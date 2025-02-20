import { ParagraphSmallProps } from '@/types/typs'
import React from 'react'

const ParagraphSmall: React.FC<ParagraphSmallProps> = ({
    children,
    color,
    padding,
    lineHeight,
    fontFamily,
    textAlign,
    justify,
    margin,
}) => {
    return (
        <>
            <p
                className={`text-sm font-normal flex ${color} ${padding} ${lineHeight} ${fontFamily} ${textAlign} ${justify} ${margin}`}
            >
                {children}
            </p>
        </>
    )
}

export default ParagraphSmall;