import { MainContainerPrpos } from '@/types/typs';
import React from 'react';

const MainContainer: React.FC<MainContainerPrpos> = ({
    children,
    width,
    height,
    maxWidth,
    maxHeight,
    margin,
    padding,
    display,
    flexDirection,
    justifyContent
}) => {
    return (
        <div
            className={`
                w-full max-w-7xl mx-auto px-4
                ${width ? width : ''}
                ${height ? height : ''}
                ${maxWidth ? maxWidth : ''}
                ${maxHeight ? maxHeight : ''}
                ${margin ? margin : ''}
                ${padding ? padding : ''}
                ${display ? display : ''}
                ${flexDirection ? flexDirection : ''}
                ${justifyContent ? justifyContent : ''}
                `}
        >
            {children}
        </div>
    )
}

export default MainContainer;