import React from 'react';
import './index.less';
import HomeSVG from '@/image/icons/home.svg';
import SearchSVG from '@/image/icons/search.svg';
import AboutSVG from '@/image/icons/about.svg';
import { Logo } from '@/component/logo';
import { useHistory } from 'react-router-dom';
import i18n from '@/i18n/i18n';
import { useStore } from '@/utils/other';

const NavIconMap={
    "home":HomeSVG,
    "search":SearchSVG,
    "about":AboutSVG
}

interface NavItemProps{name:string,url:string}

const NavItem:React.FC<NavItemProps>=(props:NavItemProps)=>{
    const {name,url} = props;
    const history = useHistory();
    const rootStore=useStore();
    const isNow= rootStore.appStore.pageNow === name;
    const handleClick=()=>{
        !isNow && history.replace(url);
    }
    const NavIcon=()=>{       
        switch(name){
            case "PAGE_HOME": return HomeSVG;
            case "PAGE_SEARCH": return SearchSVG;
            case "PAGE_ABOUT": return AboutSVG;
        }
    }
    return (
        <div className="tt-nav-item" onClick={handleClick}>
            <Logo width={20} height={20} src={NavIcon()} color={isNow?"#33B8EB":"gray"} isSVG/>
            <span style={{color:isNow?"#33B8EB":"gray"}}>{i18n.intl(name)}</span>
        </div>
    );
}


export const Nav:React.FC = ()=>{
    const NavConfig:NavItemProps[]=[{name:"PAGE_HOME",url:"/"},{name:"PAGE_SEARCH",url:"/search"},{name:"PAGE_ABOUT",url:"/about"}]
    return (
        <div className="tt-nav">
            {NavConfig.map(nav=><NavItem name={nav.name} url={nav.url} key={nav.name}/>)}
        </div>
    );
}