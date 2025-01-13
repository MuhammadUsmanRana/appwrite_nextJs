import { HeaderLargeProps } from '@/types/typs';
import React from 'react'

const HeaderLarge: React.FC<HeaderLargeProps> = ({
    children,
    fontSize,
    color,
    padding,
    lineHeight,
    fontFamily,
    textAlign
}) => {
    return (
        <>
            <h1
                className={`${color || ''} ${fontSize || ''} ${padding || ''} ${lineHeight || ''} ${fontFamily || ''} ${textAlign || ''}`}
            >
                {children}
            </h1>
        </>
    )
};

export default HeaderLarge;
