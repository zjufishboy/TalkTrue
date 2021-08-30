import React, { useEffect } from "react";
import "./index.less";
import { Logo } from "@/component/logo";
import i18n from "@/i18n/i18n";
import { SearchHead } from "@/component/search";
import { PAGE } from "@/constants/enum";
import { observer } from "mobx-react";
import { useStore } from "@/store/rootStore";

const Home: React.FC = () => {
  const rootStore = useStore();
  useEffect(() => {
    rootStore.appStore.setPageNow(PAGE.PAGE_HOME);
    document.title = i18n.intl(rootStore.appStore.pageNow);
  });
  return (
    <div className="ttHome">
      <SearchHead />
      <div className="ttHomeBody">
        <div className="icon-container">
          <Logo width={200} height={200} />
        </div>
      </div>
    </div>
  );
};
export default observer(Home);
