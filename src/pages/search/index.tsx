import React, { useEffect } from 'react';
import './index.less'
import {SearchBar} from '@/component/search';
import { useStore } from '@/utils/other';
import { PAGE } from '@/constants/enum';
import i18n from '@/i18n/i18n';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import { Card } from '@/component/card';
const Search: React.FC = () => {
    const rootStore=useStore();
    const history = useHistory();
    useEffect(()=>{
        rootStore.appStore.setPageNow(PAGE.PAGE_SEARCH);
        document.title=i18n.intl(rootStore.appStore.pageNow)
    })
    const handleCancel=()=>{
        history.replace('/');
    }
    const handleSearch=(content:string)=>{
        rootStore.appStore.addHistory(content);
    }
    const handleClear=()=>{
        rootStore.appStore.clearHistory();
    }
    return (
        <div
            className="ttSearch"
        >
            <SearchBar cancel={handleCancel} handler={handleSearch}/>

            <Card title={i18n.intl("hotSearch")} keywords={rootStore.appStore.hotSearch}/>
            <Card title={i18n.intl("history")} keywords={rootStore.appStore.history} clearHandler={handleClear}/>
        </div>
    )
}
export default observer(Search);