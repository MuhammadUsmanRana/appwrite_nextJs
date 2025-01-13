import { ParagraphSmallProps } from '@/types/typs'
import React from 'react'

const ParagraphSmall: React.FC<ParagraphSmallProps> = ({
    children,
    color,
    padding,
    lineHeight,
    fontFamily,
    textAlign
}) => {
    return (
        <>
            <p
                className={`text-sm font-semibold ${color} ${padding} ${lineHeight} ${fontFamily} ${textAlign}`}
            >
                {children}
            </p>
        </>
    )
}

export default ParagraphSmall;