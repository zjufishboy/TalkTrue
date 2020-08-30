import React from 'react';
import './index.less';

interface TitleProps{
    children:React.ReactNode;
}

export const Title:React.FC<TitleProps> =(props:TitleProps)=>{
    const {children}=props;
    return (
        <div className="fish-title">{children}</div>
    );
}