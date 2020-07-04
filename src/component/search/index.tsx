import React from "react";
import "./index.less";
import { useHistory } from "react-router-dom";

export const Search: React.FC = () => {
  return (
    <div className="search">
        
    </div>
  );
};


export const SearchHead: React.FC = () => {
    const history =useHistory();
    const handleClick=()=>{
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
