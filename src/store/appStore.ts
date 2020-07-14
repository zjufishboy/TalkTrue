import { observable, action } from 'mobx'
import 'mobx-react-lite/batchingForReactDom'
import { PAGE, DATA_TYPE } from '@/constants/enum';
import { SearchResult } from '@/constants/types';
import { mockSearchResult, mockSearchResultClass } from '@/mock/mock';
class AppStore{
    @observable pageNow=PAGE.PAGE_HOME;// 当前的页面
    @observable history:string[]=[];//搜索历史
    @observable hotSearch:string[]=["游鱼星","fishstar"];//搜索历史
    @observable searchResult:SearchResult[]=[mockSearchResult,mockSearchResultClass];//搜索信息；
    
    @action
    setPageNow(page:PAGE):void{
        this.pageNow=page;
    }
    @action
    fetchHistory():void{
        let historyStr =localStorage.getItem("TThistory");
        if(!historyStr)
            historyStr="[]";
        this.history=JSON.parse(historyStr);
    }

    @action
    addHistory(keyword:string):void{
        this.history=[keyword,...this.history]
        localStorage.setItem("TThistory",JSON.stringify(this.history))
    }

    @action
    clearHistory():void{
        this.history=[];
        localStorage.setItem("TThistory",JSON.stringify(this.history))
    }

    @action
    fetchSearchResult(content:string):void{
        const data={...mockSearchResult};
        this.searchResult=[data];
    }

    @action
    clearSearchResult():void{
        this.searchResult=[];
    }
}
export default AppStore;