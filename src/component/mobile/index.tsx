import React, { ReactChild } from 'react';
import './index.less'

interface MobileProps{
    /**
     * 子组件
     */
    children:ReactChild[];
    /**
     * 宽高
     */
    height:number|string;
    width:number|string;
}
/**
 * 手机尺寸组件
 */
export const Mobile:React.FC<MobileProps> =({children,height,width}:MobileProps)=>{
    return (
        <div
            className="mobile"
            style={{height,width}}
        >
            {children}
        </div>
    )
}