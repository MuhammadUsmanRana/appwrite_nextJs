import { HeaderSmallProps } from '@/types/typs'
import React from 'react'

const HeaderSmall: React.FC<HeaderSmallProps> = ({
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

export default HeaderSmall