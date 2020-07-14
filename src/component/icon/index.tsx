import React from 'react';
import './index.less'
// import { FaTrash, FaTrashAlt } from 'react-icons/fa';
import { voidFunction } from '@/constants/types';
import { debounce } from '@/utils/other';

interface IconWithNameProps{
    /**
     * icon名字
     */
    name:string;
}
// export const TTIcon:React.FC<IconWithNameProps>=({name}:IconWithNameProps)=>{
//     switch(name){
//         case "trash":return <FaTrash/>
//         case "trashO":return <FaTrashAlt style={{width:10,height:10}}/>
//         default :return <div/>
//     }
// }

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