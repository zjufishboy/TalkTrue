import React from 'react';
import './index.less';

interface InfoProps{
    children:React.ReactNode;
}

export const Info:React.FC<InfoProps> =(props:InfoProps)=>{
    const {children}=props;
    return (
        <div className="fish-info">{children}</div>
    );
}