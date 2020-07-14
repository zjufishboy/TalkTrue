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
    height:number;
    /**
     * 是否固定
     */
    fix?:boolean
}
/**
 * 固定在顶部的容器
 */
export const Header:React.FC<HeaderProps> =({children,height,fix}:HeaderProps)=>{
    return (
        <div className={`headerOutSide`}>
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
        </div>
    )
}