import React from 'react';
import './index.less';
import { useStore } from '@/utils/other';
import { PAGE } from '@/constants/enum';
import i18n from '@/i18n/i18n';

export const About:React.FC = () => {
    const rootStore=useStore();
    React.useEffect(()=>{
        rootStore.appStore.setPageNow(PAGE.PAGE_ABOUT);
        document.title=i18n.intl(rootStore.appStore.pageNow)
    })
    return (
        <div className="tt-about">
            施工中
        </div>
    );
}