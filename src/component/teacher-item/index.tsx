import React from 'react';
import './index.less';
import { ClassInfo, TeacherInfo } from '@/constants/types';
import { Logo } from '../logo';
import right from '@/image/icons/right.svg';
import { useHistory } from 'react-router-dom';
export interface TeacherItemProps{
    teacherInfo:TeacherInfo
}

export const TeacherItem:React.FC<TeacherItemProps>=({teacherInfo}:TeacherItemProps)=>{
    const history=useHistory();
    const handleClick=()=>{
        history.push(`/teacher/${teacherInfo.id}`);
    }
    return (
        <div
            className="TeacherItemInfo"
            onClick={handleClick}
        >
            <div className="teacherColorIcon">
                <Logo height={16.5} width={16.5} isCircle randomColor/>
            </div>
            <div
                className="TeacherItemName"
            >
                {teacherInfo.teacher_name}
            </div>
            <div
                className="TeacherItemScore"
            >   
                {teacherInfo.avg_score}
                {/* {`${teacherInfo.score.toFixed(1)}`} */}
            </div>
            <div className="teacherColorIcon">
                <Logo height={16.5} width={16.5} src={right} isSVG color="#cdcdcd"/>
            </div>
        </div>
    )
}