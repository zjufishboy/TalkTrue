/* eslint-disable react/prop-types */
import React from 'react';
import './index.less'
import LogoDefault from '@/image/logo.png';
import { ReactSVG } from 'react-svg'
import { voidFunction } from '@/constants/types';

interface LogoProps {
    /**
     * logo链接
     */
    src?: string;
    /**
     * 宽高
     */
    height: number;
    width: number;
    /**
     * 是否圆形
     */
    isCircle?: boolean;
    /**
     * 是否有边框
     */
    isBordered?: boolean
    /**
     * 是否有边框
     */
    randomColor?: boolean
    /**
     * 是否有边框
     */
    isSVG?: boolean
    /**
     * 其他属性
     */
    color?: string;
    /**
     * 其他回调函数
     */
    onClick?:voidFunction;
    onMouseEnter?:voidFunction;
}
/**
 * 用于放置图片的图片处理组件
 */
export const Logo: React.FC<LogoProps> = (props: LogoProps) => {
    const { src = LogoDefault, height, width, isCircle, isBordered, randomColor, isSVG, color, onClick, onMouseEnter } = props;
    const getClassName = () => {
        const className = ["logo"];
        if (isCircle)
            className.push("logoCircle");
        if (isBordered)
            className.push("logoWithBorder");
        return className.join(" ");
    }
    const getRandomColor = () => {
        const red = Math.ceil(Math.random() * 255);
        const green = Math.ceil(Math.random() * 255);
        const blue = Math.ceil(Math.random() * 255);
        const alpha = Math.ceil(Math.random() * 255);
        return `rgba(${red},${green},${blue},${alpha})`
    }
    const logoStyle = { height, width, backgroundImage: `url(${src})`,cursor:"pointer" };
    const logoStyleWithRandomColor = { height, width, backgroundColor: getRandomColor() };
    const realStyle = randomColor ? logoStyleWithRandomColor : logoStyle;
    const handleStyle = (svg: SVGElement) => {
        svg.setAttribute('height', `${height}px`);
        svg.setAttribute('width', `${width}px`);
        svg.setAttribute('fill', color || "black");
    }
    return (
        isSVG ?
            <ReactSVG
                className={getClassName()}
                src={src}
                beforeInjection={handleStyle}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                wrapper="span"
            />
            :
            <div
                className={getClassName()}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                style={realStyle}
            />
    );
}
