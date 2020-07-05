import React, { useEffect } from 'react';
import './index.less'
import { Logo } from '@/component/logo'
import i18n from '@/i18n/i18n';
import { useStore } from '@/utils/other';

export const Home: React.FC = () => {
    const rootStore=useStore();
    useEffect(()=>{
        document.title=i18n.intl(rootStore.appStore.pageNow)
    })
    return (
        <div
            className="ttHome"
        >
            <div
                className="ttHomeBody"
            >
                <Logo width={200} height={200}/>
            </div>
        </div>
    )
}