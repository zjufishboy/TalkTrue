import React from 'react';
import './index.less'
import LogoDefault from '@/image/logo.png';

interface LogoProps{
    /**
     * logo链接
     */
    src?:string;
    /**
     * 宽高
     */
    height:number;
    width:number;
}

export const Logo:React.FC<LogoProps>=({src=LogoDefault,height,width}:LogoProps)=>{
    return (
        <div 
            className="logo"
            style={{height,width,backgroundImage:`url(${src})`}}
        />
    )
}