interface Ii18nSingle{
    [name:string]:string
}
interface Ii18n{
    [name:string]:Ii18nSingle;
}
class I18nManager{
    i18n:Ii18n={
        "PAGE_HOME":{
            "zh-cn":"主页"
        },
        "PAGE_SEARCH":{
            "zh-cn":"搜索"
        },
        "PAGE_TEACHER":{
            "zh-cn":"{name}"
        },
        "PAGE_CLASS":{
            "zh-cn":"{name}"
        },
        "PAGE_INTRO":{
            "zh-cn":"介绍"
        },
        "hotSearch":{
            "zh-cn":"热门搜索"
        },
        "history":{
            "zh-cn":"搜索历史"
        },
        "clear":{
            "zh-cn":"清空"
        }
    }
    i18nSetting="zh-cn";
    intl:(name:string)=>string=(name:string)=>this.i18n[name][this.i18nSetting];
}

export default new I18nManager(); 