import React from 'react';
import './index.less'
// import { TTIcon } from '../icon';
interface NavItem{
    /**
     * 选项
     */
    name:string;
    /**
     * icon:详情查看react-fontawesome
     * https://www.npmjs.com/package/react-fontawesome
     */
    icon:string;
}
interface NavItemProps{
    option:NavItem;
}
interface NavProps{
    options:NavItem[]
}
export const NavItemFC:React.FC<NavItemProps>=({option:{name,icon}}:NavItemProps)=>{
    return (
        <div
            className="navigatorItem"
        >
            <div
                className="navigatorItemIcon"
            >
                {/* <TTIcon name={icon}/> */}
            </div>
            <div
                className="navigatorItemName"
            >
                {name}
            </div>
        </div>
    );
}
/**
 * 导航组件：暂时只有底部一种选择
 */
export const Nav:React.FC<NavProps> =({options}:NavProps)=>{
    return (
        <div
            className="navigator"
        >
            {options.map((item:NavItem,idx:number)=><NavItemFC option={item} key={idx}/>)}
        </div>
    )
}