import React from 'react';
import './index.less';
import { useHistory } from 'react-router-dom';

interface PathNavProps{
    isSelected:boolean;
    url:string;
    name:string;
    subName:string;
}

export const PathNav:React.FC<PathNavProps> = (props:PathNavProps)=>{
    const { isSelected, url, name, subName }=props;
    const history =useHistory();
    const handleClick=()=>{
        history.push(url);
    }
    const cx=()=>{
        const cx=["fish-path-nav"];
        isSelected && cx.push("fish-path-nav-selected");
        return cx.join(" ");
    }
    return (
        <div 
            className={cx()} onClick={handleClick}>
            <span className="nav-name">{name}</span>
            <span className="nav-subname">{subName}</span>
        </div>
    );
}