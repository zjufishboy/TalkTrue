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
    /**
     * 是否圆形
     */
    isCircle?:boolean;
    /**
     * 是否有边框
     */
    isBordered?:boolean
}
/**
 * 用于放置图片的图片处理组件
 */
export const Logo:React.FC<LogoProps>=({src=LogoDefault,height,width,isCircle,isBordered}:LogoProps)=>{
    const getClassName=()=>{
        const className=["logo"];
        if(isCircle)
            className.push("logoCircle");
        if(isBordered)
            className.push("logoWithBorder");
        return className.join(" ");
    }
    return (
        <div 
            className={getClassName()}
            style={{height,width,backgroundImage:`url(${src})`}}
        />
    )
}