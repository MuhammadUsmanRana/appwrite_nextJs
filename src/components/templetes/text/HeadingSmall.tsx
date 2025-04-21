import { HeadingSmallProps } from '@/types/typs'
import React from 'react'

const HeadingSmall: React.FC<HeadingSmallProps> = ({
    children,
    color,
    padding,
    lineHeight,
    fontFamily,
    textAlign,
    className
}) => {
    return (
        <>
            <h3
                className={`text-2xl font-semibold ${color} ${padding} ${lineHeight} ${fontFamily} ${textAlign} ${className}`}
            >
                {children}
            </h3>
        </>
    )
}

export default HeadingSmall