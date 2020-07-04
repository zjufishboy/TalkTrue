import React from 'react';
import './index.less'
import { SearchHead } from '@/component/search'
import { Logo } from '@/component/logo'

export const Home: React.FC = () => {
    return (
        <div
            className="ttHome"
        >
            <SearchHead />
            <div
                className="ttHomeBody"
            >
                <Logo width={200} height={200}/>
            </div>
        </div>
    )
}