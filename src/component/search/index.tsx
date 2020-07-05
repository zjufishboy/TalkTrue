import React, { useState, KeyboardEvent, createRef } from "react";
import "./index.less";
import { useHistory } from "react-router-dom";
import { Logo } from "../logo";

export const SearchBar: React.FC = () => {
  const [isNothing, setIsNothing] = useState(true);
  const refInput = createRef<HTMLInputElement>();
  const handleFocus = () => {
    if (isNothing) {
      setIsNothing(false);
    }
  }
  const handleBlur = () => {
    if (refInput.current && refInput.current.value === "") {
      setIsNothing(true);
    }
  }
  const handleKeyUp=()=>{
    if(refInput.current && refInput.current.value!==""){
      setIsNothing(false);
    }
  }
  const handleEnter=(e:KeyboardEvent<HTMLDivElement>)=>{
    console.log(e.which);
    if(e.which==32||e.which==13){
      let str=refInput.current.value;
      str= str.replace(/[\r\n]/g,"");   
      str=str.replace(/\s+/g,"");   
      refInput.current.value=str;
      console.log("回车或空格",refInput.current.value)
    }
  }
  return (
    <div className="searchBar">
      <input
        className="searchContent"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyUp={handleKeyUp}
        onKeyPress={handleEnter}
        ref={refInput}
        placeholder={isNothing ? "搜索":""}
        style={{color:isNothing?"#a6a6a6":"#222222"}}
      />
      <div 
        className="cancel">
        {isNothing?"取消":"搜索"}
      </div>
    </div>
  );
};


export const SearchHead: React.FC = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/search');
  }
  return (
    <div className="searchHead">
      <div className="searchHeadContent" onClick={handleClick}>
        搜索
        </div>
    </div>
  );
};
