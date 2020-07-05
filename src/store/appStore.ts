import { observable, action } from 'mobx'
import { PAGE } from '@/constants/enum';
class AppStore{
    @observable pageNow=PAGE.PAGE_HOME;// 当前的页面
    @action
    setPageNow(page:PAGE){
        this.pageNow=page;
    }
}
export default AppStore;