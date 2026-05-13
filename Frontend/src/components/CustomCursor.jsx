import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CustomCursor = () => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const frameIdRef = useRef(null)
    const lastUpdateRef = useRef({ x: 0, y: 0 })

    // Optimized spring config - reduced damping for fewer updates
    const springConfig = { damping: 35, stiffness: 120, mass: 0.6, restDelta: 0.01 }
    const springX = useSpring(mouseX, springConfig)
    const springY = useSpring(mouseY, springConfig)

    useEffect(() => {
        let isMoving = false

        const handleMouseMove = (e) => {
            // Throttle updates to every 16ms (60fps) using requestAnimationFrame
            if (isMoving) return
            
            isMoving = true
            frameIdRef.current = requestAnimationFrame(() => {
                const dx = e.clientX - lastUpdateRef.current.x
                const dy = e.clientY - lastUpdateRef.current.y
                
                // Only update if mouse moved more than 2px (dead zone)
                if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
                    mouseX.set(e.clientX)
                    mouseY.set(e.clientY)
                    lastUpdateRef.current = { x: e.clientX, y: e.clientY }
                }
                isMoving = false
            })
        }

        window.addEventListener('mousemove', handleMouseMove, { passive: true })
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current)
        }
    }, [mouseX, mouseY])

    return (
        <>
            {/* Main Cursor Dot - Minimal and performant */}
            <motion.div 
                className="fixed top-0 left-0 w-2 h-2 bg-primary-container rounded-full pointer-events-none z-[9999]"
                style={{ 
                    x: springX, 
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                    willChange: 'transform'
                }}
            />
            {/* Removed heavy blur effect - replaced with subtle glow via box-shadow for better perf */}
            <motion.div 
                className="fixed top-0 left-0 w-16 h-16 rounded-full pointer-events-none z-[9998]"
                style={{ 
                    x: springX, 
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                    willChange: 'transform',
                    boxShadow: '0 0 20px rgba(125, 211, 252, 0.2), 0 0 40px rgba(125, 211, 252, 0.1)'
                }}
            />
        </>
    )
}

export default CustomCursor
