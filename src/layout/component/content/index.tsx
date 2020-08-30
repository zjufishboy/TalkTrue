import React from 'react';
import './index.less';

interface FishContentProps{
    children:React.ReactNode;
}

export const Content:React.FC<FishContentProps> = (props:FishContentProps)=>{
    const { children } = props;
    return (
        <div className="fish-layout-content">
            {children}
        </div>
    );
}