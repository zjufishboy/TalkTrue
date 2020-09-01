import React from 'react';
import './index.less'
import { voidFunction } from '@/constants/types';
import { debounce } from '@/utils/other';

interface IconProps{
    /**
     * icon名字
     */
    name?:string;
    /**
     * icon注释:参考
     */
    comment:string;
    /**
     * 显示的位置
     */
    site:"bottom"|"left";
    /**
     * 
     */
    handler:voidFunction;
}
export const Icon:React.FC<IconProps>=({name,comment,site,handler}:IconProps)=>{
    return <span
        className={site==="bottom"?"iconBottom":"iconLeft"}
        onClick={debounce(handler,100)}
    >
        {/* <TTIcon name={name}/> */}
        {comment}
    </span>
}