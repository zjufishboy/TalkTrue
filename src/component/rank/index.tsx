import React from 'react';
import './index.less';
import StarSVG from './star.svg';
import { Logo } from '../logo';

interface FishRankProps{
    value:number;
    maxValue:number
    onChange:(newValue:number)=>void;
    isClick?:boolean;
}

export const Rank:React.FC<FishRankProps>=(props:FishRankProps)=>{
    const {value,maxValue,onChange,isClick}=props;
    const arr=new Array(maxValue).fill(0).map((i,index)=>index<value?true:false);
    const handleHover=(value:number)=>()=>{
        onChange(value);
    }
    return (
        <div className="fish-rank">
            {arr.map((isSelected,index)=>
            <Logo 
                src={StarSVG} 
                key={index} 
                height={20} 
                width={20} 
                color={isSelected?"#33B8EB":"#efefef"} 
                isSVG
                onMouseEnter={isClick ? undefined:handleHover(index+1)}
                onClick={isClick ? handleHover(index+1): undefined}
            />)}
        </div>
    );
}