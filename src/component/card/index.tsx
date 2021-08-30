import React from "react";
import "./index.less";
import { Icon } from "../icon";
import i18n from "@/i18n/i18n";
import { voidFunction, stringFunction, stringBooleanFunction } from "@/constants/types";
interface CardProps {
  /**
   * 标题
   */
  title: string;
  /**
   * 关键词
   */
  keywords: string[];
  /**
   * 是否可以清除
   */
  clearHandler?: voidFunction;
  /**
   * 点击函数
   */
  clickHandler?: stringBooleanFunction;
}
interface KeywordProps {
  /**
   * 关键词
   */
  keyword: string;
  /**
   * 处理函数
   */
  handler: stringFunction;
}

export const Keyword: React.FC<KeywordProps> = ({ keyword, handler }: KeywordProps) => {
  return (
    <span
      className="keyword"
      onClick={() => {
        handler(keyword);
      }}
    >
      {keyword}
    </span>
  );
};

/**
 * 卡片组件
 */
export const Card: React.FC<CardProps> = ({ title, keywords, clearHandler = undefined, clickHandler }: CardProps) => {
  const canClear = !clearHandler;
  const isEmpty = keywords.length === 0;
  const handler = (c: string) => {
    clickHandler(c, canClear);
  };
  return (
    <div className="card">
      <div className="cardTitle">
        <span>{title}</span>
        {clearHandler && <Icon name={"trashO"} comment={i18n.intl("clear")} site={"left"} handler={clearHandler} />}
      </div>
      <div className="keywordBar">
        {keywords.map((keyword, index) => (
          <Keyword keyword={keyword} key={index} handler={handler} />
        ))}
        {isEmpty && <div className="card-empty">^_^ 暂无数据 ^_^</div>}
      </div>
    </div>
  );
};
