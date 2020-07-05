import React, { ReactChild } from 'react';
import './index.less'
import FA  from 'react-fontawesome';
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
                <FA name={icon}/>
            </div>
            <div
                className="navigatorItemName"
            >
                {name}
            </div>
        </div>
    );
}

export const Nav:React.FC<NavProps> =({options}:NavProps)=>{
    return (
        <div
            className="navigator"
        >
            {options.map((item:NavItem,idx:number)=><NavItemFC option={item} key={idx}/>)}
        </div>
    )
}