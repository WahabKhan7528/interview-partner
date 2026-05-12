import React, { useEffect, useState } from 'react'

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true)
            } else {
                setIsHovering(false)
            }
        }

        window.addEventListener('mousemove', updatePosition)
        window.addEventListener('mouseover', handleMouseOver)

        return () => {
            window.removeEventListener('mousemove', updatePosition)
            window.removeEventListener('mouseover', handleMouseOver)
        }
    }, [])

    return (
        <>
            {/* Main Cursor Dot */}
            <div 
                className="fixed top-0 left-0 w-2 h-2 bg-primary-container rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{ 
                    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                    transition: 'transform 0.1s ease-out'
                }}
            />
            {/* Blurry Glow / Filter Effect */}
            <div 
                className={`fixed top-0 left-0 w-40 h-40 rounded-full pointer-events-none z-[9998] blur-[40px] transition-all duration-300 ease-out ${isHovering ? 'bg-primary-container/30 scale-150' : 'bg-primary-container/10'}`}
                style={{ 
                    transform: `translate3d(${position.x - 80}px, ${position.y - 80}px, 0)`,
                    transition: 'transform 0.2s ease-out, background-color 0.3s, scale 0.3s'
                }}
            />
            {/* Literal Blur Spotlight (Satisfies the "blurry effect when I hover" request) */}
            <div 
                className="fixed top-0 left-0 w-24 h-24 rounded-full pointer-events-none z-[9997] backdrop-blur-[4px] border border-white/10 flex items-center justify-center overflow-hidden shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]"
                style={{ 
                    transform: `translate3d(${position.x - 48}px, ${position.y - 48}px, 0)`,
                    transition: 'transform 0.1s ease-out'
                }}
            >
                {/* Subtle scanning line inside the blur circle */}
                <div className="w-full h-[1px] bg-primary-container/20 absolute top-0 animate-[scan_2s_linear_infinite]"></div>
            </div>
        </>
    )
}

export default CustomCursor
