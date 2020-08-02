import React from "react";
import "./index.less";
import { CommentsInfo } from "@/constants/types";
import { Logo } from "../logo";
import { STATE_CLASS } from "@/constants/enum";

interface CommentItemPorps {
  comment: CommentsInfo;
}

export const CommentItem: React.FC<CommentItemPorps> = ({
  comment,
}: CommentItemPorps) => {
  return (
    <div className="comment">
      <div className="userBaseInfo">
        <Logo
          src={comment.user.avater}
          height={30}
          width={30}
          isCircle
        />
        <div className="userBaseInfoState">
            <div className="userBaseInfoName">
                {comment.user.userName}（{comment.state===STATE_CLASS.TAKED?"上过":"想上"}）
            </div>
            <div className="userBaseInfoRank">
                评分：{comment.rank.toFixed(1)}
            </div>
        </div>
      </div>
      <div className="commentContent">
        {comment.comment}
      </div>
      <div className="commentTrust">
        <span>可信度:{comment.trust}</span>
        <span>可信</span>
        <span>不实</span>
      </div>
    </div>
  );
};
