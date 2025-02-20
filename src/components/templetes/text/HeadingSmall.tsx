import { HeadingSmallProps } from '@/types/typs'
import React from 'react'

const HeadingSmall: React.FC<HeadingSmallProps> = ({
    children,
    color,
    padding,
    lineHeight,
    fontFamily,
    textAlign
}) => {
    return (
        <>
            <h3
                className={`text-2xl font-semibold ${color} ${padding} ${lineHeight} ${fontFamily} ${textAlign}`}
            >
                {children}
            </h3>
        </>
    )
}

export default HeadingSmall