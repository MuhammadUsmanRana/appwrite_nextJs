import { HeadingLargeProps } from '@/types/typs';
import React from 'react'

const HeadingLarge: React.FC<HeadingLargeProps> = ({
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

export default HeadingLarge;
