import React from 'react';
import './index.less';
import { Title } from '@/component/title';
import { Info } from '@/component/Info';

export const DisplayButton:React.FC=()=>{
    return (
        <>
            <Title>按钮组件</Title>
            <Info>一个按钮</Info>
        </>
    );
}