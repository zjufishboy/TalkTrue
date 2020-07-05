import React, { ReactChild } from 'react';
import './index.less'

interface FooterProps{
    /**
     * 子组件
     */
    children:ReactChild;
    /**
     * 高
     */
    height:number
}

export const Footer:React.FC<FooterProps> =({children,height}:FooterProps)=>{
    return (
        <div className="footerOutSide">
            <div
                className="footer front"
                style={{height}}
            >
                {children}
            </div>
            <div
                className="footer"
                style={{height}}
            />
        </div>
    )
}