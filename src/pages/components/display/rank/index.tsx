import React from 'react';
import './index.less';
import { Title } from '@/component/title';
import { Info } from '@/component/Info';
import { Rank } from '@/component/rank';

export const DisplayRank:React.FC=()=>{
    const [value,setValue]=React.useState(0);
    const [maxValue,setMaxValue]=React.useState(20);
    return (
        <>
            <Title>评分组件</Title>
            <Info>一个用来打分的组件</Info>
            <Rank value={value} maxValue={maxValue} onChange={setValue}/>
            <span>分数：{value}/{maxValue}</span>
        </>
    );
}