import { HeaderMediumProps } from '@/types/typs'
import React from 'react'

const HeaderMedium: React.FC<HeaderMediumProps> = ({
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

export default HeaderMedium;
