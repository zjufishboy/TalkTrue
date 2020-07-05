import React from 'react';
import './index.less'
import {SearchBar} from '@/component/search';
export const Search: React.FC = () => {
    return (
        <div
            className="ttSearch"
        >
            <SearchBar/>
        </div>
    )
}