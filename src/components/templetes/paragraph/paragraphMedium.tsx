import { ParagraphMediumProps } from '@/types/typs'
import React from 'react'


const ParagraphMedium: React.FC<ParagraphMediumProps> = ({
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
                className={`text-base font-semibold ${color} ${padding} ${lineHeight} ${fontFamily} ${textAlign}`}
            >
                {children}
            </p>
        </>
    )
}

export default ParagraphMedium;