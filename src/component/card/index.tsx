import React from 'react';
import './index.less';
import { Icon } from '../icon';
import i18n from '@/i18n/i18n';
import { voidFunction } from '@/constants/types';
interface CardProps{
    /**
     * 标题
     */
    title:string;
    /**
     * 关键词
     */
    keywords:string[];
    /**
     * 是否可以清除
     */
    clearHandler?:voidFunction;
}
interface KeywordProps{
    /**
     * 关键词
     */
    keyword:string;
}

export const Keyword:React.FC<KeywordProps>=({keyword}:KeywordProps)=>{
    return (
        <span
            className="keyword"
        >
            {keyword}
        </span>
    )
}

/**
 * 卡片组件
 */
export const Card:React.FC<CardProps>=({title,keywords,clearHandler}:CardProps)=>{
    return (
        <div
            className="card"
        >
            <div
                className="cardTitle"
            >
                <span>{title}</span>
                {clearHandler && <Icon name={"trashO"} comment={i18n.intl("clear")} site={"left"} handler={clearHandler}/>}
            </div>
            <div
                className="keywordBar"
            >
                {keywords.map((keyword,index)=><Keyword keyword={keyword} key={index}/>)}
            </div>
        </div>
    )
}