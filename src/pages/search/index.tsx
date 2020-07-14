import React, { useEffect } from 'react';
import './index.less'
import {SearchBar} from '@/component/search';
import { useStore } from '@/utils/other';
import { PAGE } from '@/constants/enum';
import i18n from '@/i18n/i18n';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import { Card } from '@/component/card';
import { SearchResult } from '@/constants/types';

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
        rootStore.appStore.fetchSearchResult("游鱼星");
    }
    const handleClear=()=>{
        rootStore.appStore.clearHistory();
    }
    const handleReset=()=>{
        rootStore.appStore.clearSearchResult();
    }
    const handleClick=(c:string,iscover=true)=>{
        if(iscover)
            rootStore.appStore.addHistory(c);
        rootStore.appStore.fetchSearchResult(c);
    }
    const mapSearchItem=(result:SearchResult,index:number)=>{
        const handleClick=()=>{
            history.push(`/${result.type}/${result.info}`)
        }
        return (
            <div
                className="searchResult"
                key={index}
                onClick={handleClick}
            >
                [{i18n.intl(result.type)}]{result.name}
            </div>
        )
    }
    return (
        <div
            className="ttSearch"
        >
            <SearchBar cancel={handleCancel} handler={handleSearch} reset={handleReset}/>
            {
                rootStore.appStore.searchResult.length===0?
                    <>
                        <Card title={i18n.intl("hotSearch")} keywords={rootStore.appStore.hotSearch} clickHandler={handleClick}/>
                        <Card title={i18n.intl("history")} keywords={rootStore.appStore.history} clearHandler={handleClear} clickHandler={handleClick}/>
                    </>
                :
                    <>
                        {rootStore.appStore.searchResult.map(mapSearchItem)}
                    </>
            }
            
        </div>
    )
}
export default observer(Search);