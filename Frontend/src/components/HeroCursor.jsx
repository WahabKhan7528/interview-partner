import React, { useState, useEffect } from 'react'

const HeroCursor = ({ containerRef }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect()
                // Check if mouse is within the hero section boundaries
                if (
                    e.clientX >= rect.left &&
                    e.clientX <= rect.right &&
                    e.clientY >= rect.top &&
                    e.clientY <= rect.bottom
                ) {
                    setPosition({ x: e.clientX, y: e.clientY })
                    setIsVisible(true)
                } else {
                    setIsVisible(false)
                }
            }
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [containerRef])

    if (!isVisible) return null

    return (
        <div className="fixed inset-0 pointer-events-none z-[50] overflow-hidden">
            {/* Ultra-Small High-Intensity Blur Spotlight */}
            <div 
                className="fixed top-0 left-0 w-20 h-20 rounded-full backdrop-blur-[24px] bg-white/[0.01]"
                style={{ 
                    transform: `translate3d(${position.x - 40}px, ${position.y - 40}px, 0)`,
                    transition: 'transform 0.05s linear',
                    maskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)'
                }}
            />
        </div>
    )
}

export default HeroCursor
