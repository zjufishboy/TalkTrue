import React, { useEffect } from 'react';
import './index.less'
import { Logo } from '@/component/logo'
import i18n from '@/i18n/i18n';
import { useStore } from '@/utils/other';
import { SearchHead } from '@/component/search';
import { PAGE } from '@/constants/enum';
import { observer } from 'mobx-react';

const Home: React.FC = () => {
    const rootStore=useStore();
    useEffect(()=>{
        rootStore.appStore.setPageNow(PAGE.PAGE_HOME);
        document.title=i18n.intl(rootStore.appStore.pageNow)
    })
    return (
        <div
            className="ttHome"
        >
            <SearchHead/>
            <div
                className="ttHomeBody"
            >
                <Logo width={200} height={200}/>
            </div>
        </div>
    )
}
export default observer(Home);