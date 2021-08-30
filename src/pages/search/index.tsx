import React, { useEffect } from "react";
import "./index.less";
import { SearchBar } from "@/component/search";
import { PAGE } from "@/constants/enum";
import i18n from "@/i18n/i18n";
import { observer } from "mobx-react";
import { useHistory } from "react-router-dom";
import { Card } from "@/component/card";
import { SearchResult } from "@/constants/types";
import { useStore } from "@/store/rootStore";

const Search: React.FC = () => {
  const { appStore } = useStore();
  const history = useHistory();
  useEffect(() => {
    appStore.setPageNow(PAGE.PAGE_SEARCH);
    document.title = i18n.intl(appStore.pageNow);
  });
  const handleCancel = () => {
    history.replace("/");
  };
  const handleSearch = (content: string) => {
    appStore.addHistory(content);
    appStore.fetchSearchResult("游鱼星");
  };
  const handleClear = () => {
    appStore.clearHistory();
  };
  const handleReset = () => {
    appStore.clearSearchResult();
  };
  const handleClick = (c: string, iscover = true) => {
    if (iscover) appStore.addHistory(c);
    appStore.fetchSearchResult(c);
  };
  const mapSearchItem = (result: SearchResult, index: number) => {
    const handleClick = () => {
      appStore.clearSearchResult();
      history.push(`/${result.type}/${result.info}`);
    };
    return (
      <div className="searchResult" key={index} onClick={handleClick}>
        [{i18n.intl(result.type)}]{result.name}
      </div>
    );
  };
  return (
    <div className="ttSearch">
      <SearchBar cancel={handleCancel} handler={handleSearch} reset={handleReset} />
      {appStore.searchResult.length === 0 ? (
        <>
          <Card title={i18n.intl("hotSearch")} keywords={appStore.hotSearch} clickHandler={handleClick} />
          <Card
            title={i18n.intl("history")}
            keywords={appStore.history}
            clearHandler={handleClear}
            clickHandler={handleClick}
          />
        </>
      ) : (
        <>{appStore.searchResult.map(mapSearchItem)}</>
      )}
    </div>
  );
};
export default observer(Search);
