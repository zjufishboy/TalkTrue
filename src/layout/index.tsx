import React from 'react';
import './index.less';
import { Side } from './component/side';
import { Content } from './component/content';
import { PathNav } from './component/PathNav';
import { useHistory } from 'react-router-dom';

interface LayoutProps{
    children:React.ReactNode;
}

const Path=[
    {
        name:"Rank",
        subName:"评分",
        path:"rank"
    },
    {
        name:"Button",
        subName:"按钮",
        path:"button"
    }
]

export const Layout:React.FC<LayoutProps> = (props:LayoutProps)=>{
    const { children } =props;
    const history =useHistory();
    const pathNameNow=history.location.pathname;
    return (
        <div className="fish-layout">
            <Side>
                <div className="fish-layout-logo">
                    Fish Design
                </div>
                {Path.map(
                    (path,index)=>
                        <PathNav 
                            key={index}
                            name={path.name} 
                            subName={path.subName} 
                            isSelected={pathNameNow === '/component/'+path.path} 
                            url={'/component/'+path.path}
                        />)}
            </Side>
            <Content>
                {children}
            </Content>
        </div>
    );
}