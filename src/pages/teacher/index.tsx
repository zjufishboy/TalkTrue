import React from 'react';
import './index.less';
import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { useStore } from '@/utils/other';
import { PAGE } from '@/constants/enum';
import i18n from '@/i18n/i18n';

const Teacher:React.FC=()=>{
    const rootStore=useStore();
    React.useEffect(()=>{
        rootStore.appStore.setPageNow(PAGE.PAGE_TEACHER);
        document.title=i18n.intl(rootStore.appStore.pageNow,{name:"游鱼星"})
    })
    const {teacherID}=useParams();
    const teacherInfo={name:"游鱼星",college:"计算机学院"}

    return (
        <div className="ttTeacher">
            <div className="ttTeacherInfo">
                <div className="teacherInfoDetail">
                    <div className="teacherInfoName">{teacherInfo.name}</div>
                    <div className="teacherInfoCollage">{teacherInfo.college}</div>
                </div>
                <div className="teacherScore">
                    3.9
                </div>
            </div>
            <div className="ttTeacherComment">
                <div className="ttTeacherCommentOrState">
                    <div className="ttTeacherCommentOrStateItem">课程</div>
                    <div className="ttTeacherCommentOrStateItem">评价</div>
                </div>
            </div>
        </div>
    )
}
export default observer(Teacher);