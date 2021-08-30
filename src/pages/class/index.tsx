import React from "react";
import "./index.less";
import { observer } from "mobx-react";
import { PAGE, STATE_CLASS } from "@/constants/enum";
import i18n from "@/i18n/i18n";
import { useParams } from "react-router-dom";
import { Logo } from "@/component/logo";
import edit from "@/image/icons/edit.svg";
import { TeacherInfo, CommentsInfo } from "@/constants/types";
import { TeacherItem } from "@/component/teacher-item";
import avatar from "@/image/avatar.png";
import { CommentItem } from "@/component/comment-item";
import { useStore } from "@/store/rootStore";

const mockCourseInfo = {
  name: "CC98选修课程",
  classID: 0,
  college: "CC98学院",
};
const mockComment =
  "这个老师人很好这个老师人很好这个老师人很好这个老师人很好这个老师人很好这个老师人很好这个老师人很好这个老师人很好这个老师人很好这个老师人很好";

const teacherInfo: TeacherInfo[] = [
  {
    name: "游鱼星",
    id: 98,
    score: 5,
  },
  {
    name: "游鱼星",
    id: 97,
    score: 5,
  },
  {
    name: "游鱼星",
    id: 96,
    score: 5,
  },
];
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

const Course: React.FC = () => {
  const rootStore = useStore();
  const [isTeacher, setIsTeacher] = React.useState(true);
  React.useEffect(() => {
    rootStore.appStore.setPageNow(PAGE.PAGE_CLASS);
    document.title = i18n.intl(rootStore.appStore.pageNow, { name: "CC98" });
  });
  const { courseID } = useParams();
  const courseInfo = mockCourseInfo;
  return (
    <div className="ttCourse">
      <div className="courseInfoAndScore">
        <div className="courseInfo">
          <div className="courseInfoDetail">
            <div className="courseInfoName">{courseInfo.name}</div>
            <div className="courseInfoCollage">{courseInfo.college}</div>
          </div>
          <div className="courseScore">3.9</div>
        </div>
        <div className="courseOwnerComment">
          <div className="ownerCommentDiv">{mockComment}</div>
          <div className="ownerComment">
            <Logo src={edit} color="#707070" height={20} width={20} isSVG />
          </div>
        </div>
      </div>
      <div className="ttCourseComment">
        <div className="ttCourseCommentOrState">
          <div
            className={`ttCourseCommentOrStateItem ttCourseComment${
              isTeacher ? "On" : "Off"
            }`}
            onClick={() => {
              setIsTeacher(true);
            }}
          >
            课程
          </div>
          <div
            className={`ttCourseCommentOrStateItem ttCourseComment${
              !isTeacher ? "On" : "Off"
            }`}
            onClick={() => {
              setIsTeacher(false);
            }}
          >
            评价
          </div>
        </div>
        <div className="ttCourseList">
          {isTeacher
            ? teacherInfo.map((thr: TeacherInfo, index: number) => (
                <TeacherItem teacherInfo={thr} key={index} />
              ))
            : commets.map((comment: CommentsInfo, index: number) => (
                <CommentItem comment={comment} key={index} />
              ))}
        </div>
      </div>
    </div>
  );
};
export default observer(Course);
