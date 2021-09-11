import React, { useState } from "react";
import "./index.less";
import { observer } from "mobx-react";
import { PAGE, STATE_CLASS } from "@/constants/enum";
import i18n from "@/i18n/i18n";
import { ClassInfo, CommentsInfo } from "@/constants/types";
import { ClassItem } from "@/component/class-item";
import avatar from "@/image/avatar.png";
import { CommentItem } from "@/component/comment-item";
import edit from "@/image/icons/edit.svg";
import { Logo } from "@/component/logo";
import { Model } from "@/component/model";
import { TTRank } from "@/biz-component/tt-rank";
import { ModelForTeacher } from "@/biz-component/tt-model";
import { useStore } from "@/store/rootStore";
import { useParams } from "react-router-dom";
import {reqTeacherById} from "@/api"

interface PathParams {
  teacherID: string
}

/* const classInfo: ClassInfo[] = [
  {
    name: "言果课程教程",
    score: 4.9,
    classId: 0,
  },
  {
    name: "言果课程教程",
    score: 5.0,
    classId: 2,
  },
  {
    name: "言果课程教程",
    score: 5.0,
    classId: 4,
  },
]; */

const commets: CommentsInfo[] = [
  {
    user: {
      avater: avatar,
      userName: "匿名",
    },
    state: STATE_CLASS.UNTAKED,
    trust: 10,
    comment:
      "这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错",
    rank: 5,
  },
  {
    user: {
      avater: avatar,
      userName: "匿名",
    },
    state: STATE_CLASS.TAKED,
    trust: 25,
    comment:
      "这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错",
    rank: 2.8,
  },
  {
    user: {
      avater: avatar,
      userName: "匿名",
    },
    state: STATE_CLASS.TAKED,
    trust: 25,
    comment:
      "这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错",
    rank: 2.8,
  },
  {
    user: {
      avater: avatar,
      userName: "匿名",
    },
    state: STATE_CLASS.TAKED,
    trust: 25,
    comment:
      "这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错这课不错",
    rank: 2.8,
  },
];
const mockComment =
  "这个老师人很好这个老师人很好这个老师人很好这个老师人很好这个老师人很好这个老师人很好这个老师人很好这个老师人很好这个老师人很好这个老师人很好";

const Teacher: React.FC = () => {
  const { appStore } = useStore();
  

  React.useEffect(() => {
    appStore.setPageNow(PAGE.PAGE_TEACHER);
    document.title = i18n.intl(appStore.pageNow, { name: "游鱼星" });
  });

  React.useEffect(()=>{
    const getTeacher = async () => {
      const result = await reqTeacherById(teacherID);
      setteacherInfo(result)
    }
    getTeacher()
  },[])

  const { teacherID } = useParams() as PathParams;
  //const teacherInfo = { name: "游鱼星", college: "计算机学院" };
  const [isClass, setIsClass] = useState(true);
  const [teacherInfo, setteacherInfo] = useState({
    id:'',
    name:'',
    college:'',
    avg_score:'',
    courses:[
      {
        name: "",
        avg_score:4.9,
        id: 0,
      },
    ]
  })
  
  //控制【打分】组件的显示与隐藏
  const [visable, setVisble] = React.useState(false);
  const handleCancel = () => {
    setVisble(false);
  };
  const handleOk = () => {
    setVisble(true);
  };

  return (
    <>
      {/* 打分组件 */}
      <ModelForTeacher
        name={teacherInfo.name}
        visable={visable}
        onCancel={handleCancel}
        onOk={handleOk}
      />
      <div className="ttTeacher">
        <div className="ttTeacherInfoAndComment">
          <div className="teacherInfo">
            <div className="teacherInfoDetail">
              <div className="teacherInfoName">{teacherInfo.name}</div>
              <div className="teacherInfoCollage">{teacherInfo.college}</div>
            </div>
            <div className="teacherScore">{teacherInfo.avg_score}</div>
          </div>
          <div className="teacherOwnerComment">
            <div className="ownerCommentDiv">{mockComment}</div>
            {/* 画笔图标 */}
            <div
              className="ownerComment"
              onClick={() => {
                setVisble(true);
              }}
            >
              <Logo src={edit} color="#707070" height={20} width={20} isSVG />
            </div>
          </div>
        </div>
        <div className="ttTeacherComment">
          <div className="ttTeacherCommentOrState">
            <div
              className={`ttTeacherCommentOrStateItem ttTeacherComment${isClass ? "On" : "Off"
                }`}
              onClick={() => {
                setIsClass(true);
              }}
            >
              课程
            </div>
            <div
              className={`ttTeacherCommentOrStateItem ttTeacherComment${!isClass ? "On" : "Off"
                }`}
              onClick={() => {
                setIsClass(false);
              }}
            >
              评价
            </div>
          </div>
          <div className="ttTeacherList">
            {isClass
              ? teacherInfo.courses.map((cls: ClassInfo, index: number) => (
                <ClassItem classInfo={cls} key={index} />
              ))
              : commets.map((comment: CommentsInfo, index: number) => (
                <CommentItem comment={comment} key={index} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default observer(Teacher);
