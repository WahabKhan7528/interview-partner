import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'

const HeroCursor = ({ containerRef }) => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const [isInside, setIsInside] = React.useState(false)
    const frameIdRef = useRef(null)
    const lastUpdateRef = useRef({ x: 0, y: 0 })

    // Optimized spring config - reduced complexity for better performance
    const springX = useSpring(mouseX, { damping: 40, stiffness: 150, mass: 0.7, restDelta: 0.01 })
    const springY = useSpring(mouseY, { damping: 40, stiffness: 150, mass: 0.7, restDelta: 0.01 })

    useEffect(() => {
        let isMoving = false

        const handleMouseMove = (e) => {
            if (!containerRef.current) return

            const rect = containerRef.current.getBoundingClientRect()
            const inside = (
                e.clientX >= rect.left &&
                e.clientX <= rect.right &&
                e.clientY >= rect.top &&
                e.clientY <= rect.bottom
            )

            setIsInside(inside)
            
            if (inside && !isMoving) {
                isMoving = true
                frameIdRef.current = requestAnimationFrame(() => {
                    const dx = e.clientX - lastUpdateRef.current.x
                    const dy = e.clientY - lastUpdateRef.current.y
                    
                    // Dead zone throttling
                    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
                        mouseX.set(e.clientX)
                        mouseY.set(e.clientY)
                        lastUpdateRef.current = { x: e.clientX, y: e.clientY }
                    }
                    isMoving = false
                })
            }
        }

        window.addEventListener('mousemove', handleMouseMove, { passive: true })
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current)
        }
    }, [containerRef, mouseX, mouseY])

    return (
        <AnimatePresence>
            {isInside && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 pointer-events-none z-[50] overflow-hidden"
                    style={{ contain: 'layout style paint' }}
                >
                    <motion.div 
                        className="fixed top-0 left-0 w-16 h-16 rounded-full pointer-events-none"
                        style={{ 
                            x: springX, 
                            y: springY,
                            translateX: '-50%',
                            translateY: '-50%',
                            willChange: 'transform',
                            boxShadow: '0 0 30px rgba(125, 211, 252, 0.15)'
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default HeroCursor
