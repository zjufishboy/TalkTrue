import React, { ReactChild } from 'react';
import './index.less'

interface HeaderProps{
    /**
     * 子组件
     */
    children:ReactChild;
    /**
     * 高
     */
    height:number
}

export const Header:React.FC<HeaderProps> =({children,height}:HeaderProps)=>{
    return (
        <>
            <div
                className="header front"
                style={{height}}
            >
                {children}
            </div>
            <div
                className="header"
                style={{height}}
            />
        </>
    )
}