import { HeaderLargeProps } from '@/types/typs';
import React from 'react'

const HeaderLarge: React.FC<HeaderLargeProps> = ({
    children,
    color,
    padding,
    lineHeight,
    fontFamily,
    textAlign
}) => {
    return (
        <>
            <h1
                className={`text-4xl font-semibold ${color} ${padding} ${lineHeight} ${fontFamily} ${textAlign}`}
            >
                {children}
            </h1>
        </>
    )
};

export default HeaderLarge;
