import { HeadingMediumProps } from '@/types/typs'
import React from 'react'

const HeadingMedium: React.FC<HeadingMediumProps> = ({
    children,
    color,
    padding,
    lineHeight,
    fontFamily,
    textAlign
}) => {
    return (
        <>
            <h2
                className={`text-3xl font-semibold ${color} ${padding} ${lineHeight} ${fontFamily} ${textAlign}`}
            >
                {children}
            </h2 >
        </>
    )
}

export default HeadingMedium;
