import React, { useState } from 'react';
import './index.less';
import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { useStore } from '@/utils/other';
import { PAGE, STATE_CLASS } from '@/constants/enum';
import i18n from '@/i18n/i18n';
import { ClassInfo, CommentsInfo } from '@/constants/types';
import { ClassItem } from '@/component/class-item';
import avatar from '@/image/avatar.png';
import { CommentItem } from '@/component/comment-item';
import edit from '@/image/icons/edit.svg';
import { Logo } from '@/component/logo';
import { Model } from '@/component/model';


const classInfo:ClassInfo[]=[
    {
        name:"言果课程教程",
        score:4.9,
        classId:0
    },
    {
        name:"言果课程教程",
        score:5.0,
        classId:2
    },
    {
        name:"言果课程教程",
        score:5.0,
        classId:4
    }
]

const commets:CommentsInfo[]=[
    {
        user:{
            avater:avatar,
            userName:"匿名"
        },
        state:STATE_CLASS.UNTAKED,
        trust:10,
        comment:"这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错",
        rank:5
    },
    {
        user:{
            avater:avatar,
            userName:"匿名"
        },
        state:STATE_CLASS.TAKED,
        trust:25,
        comment:"这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错",
        rank:2.8
    },
    {
        user:{
            avater:avatar,
            userName:"匿名"
        },
        state:STATE_CLASS.TAKED,
        trust:25,
        comment:"这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错",
        rank:2.8
    },
    {
        user:{
            avater:avatar,
            userName:"匿名"
        },
        state:STATE_CLASS.TAKED,
        trust:25,
        comment:"这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错",
        rank:2.8
    }
]
const mockComment="这个老师人很好这个老师人很好这个老师人很好这个老师人很好这个老师人很好这个老师人很好这个老师人很好这个老师人很好这个老师人很好这个老师人很好"

const Teacher:React.FC=()=>{
    const rootStore=useStore();
    React.useEffect(()=>{
        rootStore.appStore.setPageNow(PAGE.PAGE_TEACHER);
        document.title=i18n.intl(rootStore.appStore.pageNow,{name:"游鱼星"})
    })
    const {teacherID}=useParams();
    const teacherInfo={name:"游鱼星",college:"计算机学院"}
    const [isClass,setIsClass]=useState(true);
    const [visable,setVisble]=React.useState(false);
    return (
        <>
            <Model
                visable={visable}
                onCancel={()=>{setVisble(false)}}
                onOK={()=>{setVisble(false)}}
            >
                这是一个model
            </Model>
            <div className="ttTeacher">
                <div className="ttTeacherInfoAndComment">
                    <div className="teacherInfo">
                        <div className="teacherInfoDetail">
                            <div className="teacherInfoName">{teacherInfo.name}</div>
                            <div className="teacherInfoCollage">{teacherInfo.college}</div>
                        </div>
                        <div className="teacherScore">
                            3.9
                        </div>
                    </div>
                    <div className="teacherOwnerComment" >
                        <div className="ownerCommentDiv">
                            {mockComment}
                        </div>
                        <div className="ownerComment" onClick={()=>{setVisble(true)}}>
                            <Logo src={edit} color="#707070" height={20} width={20} isSVG/>
                        </div>
                    </div>
                </div>
                <div className="ttTeacherComment">
                    <div className="ttTeacherCommentOrState">
                        <div className={`ttTeacherCommentOrStateItem ttTeacherComment${ isClass?"On":"Off"}`} onClick={()=>{setIsClass(true)}}>课程</div>
                        <div className={`ttTeacherCommentOrStateItem ttTeacherComment${!isClass?"On":"Off"}`} onClick={()=>{setIsClass(false)}}>评价</div>
                    </div>
                    <div className="ttTeacherList">
                        {
                        isClass ? 
                            classInfo.map((cls:ClassInfo,index:number)=><ClassItem classInfo={cls} key={index}/>)
                            :
                            commets.map((comment:CommentsInfo,index:number)=><CommentItem comment={comment} key={index}/>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default observer(Teacher);