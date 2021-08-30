import React from "react";
import "./index.less";
import { PAGE } from "@/constants/enum";
import i18n from "@/i18n/i18n";
import { useStore } from "@/store/rootStore";

export const About: React.FC = () => {
  const rootStore = useStore();
  React.useEffect(() => {
    rootStore.appStore.setPageNow(PAGE.PAGE_ABOUT);
    document.title = i18n.intl(rootStore.appStore.pageNow);
  });
  return (
    <div className="page-about">
      <p>
        盐果平台由CC98负责运营，是浙江大学校内学生自治的教师评价系统，区别于传统的第三方评价平台，数据完全由学生组织自行管理。
      </p>
      <p>
        对数据有疑问请联系
        <a href="https://www.zhihu.com/people/zjufishboy">游鱼星</a>,
        或CC98站内联系樱桃@Auser
      </p>
    </div>
  );
};
