import React, { useState, KeyboardEvent, createRef } from "react";
import "./index.less";
import { useHistory } from "react-router-dom";
import { voidFunction } from "@/constants/types";
import { debounce } from "@/utils/debounce";

interface SearchBarProps {
  /**
   * 取消函数
   */
  cancel: voidFunction;
  /**
   * 搜索函数
   */
  handler?: (content: string) => void;
  /**
   * 重新搜索函数
   */
  reset: voidFunction;
}

/**
 * 正式的搜索条
 */
export const SearchBar: React.FC<SearchBarProps> = ({
  cancel,
  handler,
  reset,
}: SearchBarProps) => {
  const [isNothing, setIsNothing] = useState(true);
  const refInput = createRef<HTMLInputElement>();
  const handleFocus = () => {
    if (isNothing) {
      setIsNothing(false);
    }
    reset();
  };
  const handleBlur = () => {
    if (refInput.current && refInput.current.value === "") {
      setIsNothing(true);
    }
  };
  const handleKeyUp = () => {
    if (refInput.current && refInput.current.value !== "") {
      setIsNothing(false);
    }
  };
  const handleEnter = (e: KeyboardEvent<HTMLDivElement>) => {
    //console.log(e.which)
    if (e.which == 32 || e.which == 13) {
      let str = refInput.current.value;
       //匹配换行符和回车符
      str = str.replace(/[\r\n]/g, "");
        //匹配空格
      str = str.replace(/\s+/g, "");
      refInput.current.value = str;
    }
  };
  const Cancel = debounce(cancel, 100);
  const handleSearch = () => {
    handler(refInput.current.value);
    // refInput.current.value="";
  };
  return (
    <div className="searchBar">
      <input
        className="searchContent"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyUp={handleKeyUp}
        onKeyPress={handleEnter}
        ref={refInput}
        placeholder={isNothing ? "搜索" : ""}
        style={{ color: isNothing ? "#a6a6a6" : "#222222" }}
      />
      <div className="cancel" onClick={isNothing ? Cancel : handleSearch}>
        {/* 点击空白处后,如果输入框内没有内容,则【搜索】变为【取消】 */}
        {isNothing ? "取消" : "搜索"}
      </div>
    </div>
  );
};

/**
 * 虚假的引导搜索条
 */
export const SearchHead: React.FC = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/search");
  };
  return (
    <div className="searchHead">
      <div className="searchHeadContent" onClick={handleClick}>
        搜索
      </div>
    </div>
  );
};
