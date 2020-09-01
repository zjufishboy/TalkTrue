import React from 'react';
import './index.less';
import { ClassInfo } from '@/constants/types';
import { Logo } from '../logo';
import right from '@/image/icons/right.svg';
import { useHistory } from 'react-router-dom';
export interface ClassItemProps{
    classInfo:ClassInfo
}

export const ClassItem:React.FC<ClassItemProps>=({classInfo}:ClassItemProps)=>{
    const history=useHistory();
    const handleClick=()=>{
        history.push(`/course/${classInfo.classId}`);
    }
    return (
        <div
            className="classItemInfo"
            onClick={handleClick}
        >
            <div
                className="classItemName"
            >
                {classInfo.name}
            </div>
            <div
                className="classItemScore"
            >
                {`${classInfo.score.toFixed(1)}`}
            </div>
            <div className="classColorIcon">
                <Logo height={16.5} width={16.5} src={right} isSVG color="#cdcdcd"/>
            </div>
        </div>
    )
}