interface Ii18nSingle{
    [name:string]:string
}
interface Ii18n{
    [name:string]:Ii18nSingle;
}
interface paramsTable{
    [key:string]:string;
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
            "zh-cn":"教师{name}"
        },
        "PAGE_CLASS":{
            "zh-cn":"课程{name}"
        },
        "PAGE_ABOUT":{
            "zh-cn":"关于"
        },
        "hotSearch":{
            "zh-cn":"热门搜索"
        },
        "history":{
            "zh-cn":"搜索历史"
        },
        "clear":{
            "zh-cn":"清空"
        },
        "teacher":{
            "zh-cn":"教师"
        },
        "class":{
            "zh-cn":"课程"
        }
    }
    i18nSetting="zh-cn";
    intl:(name:string,...args:paramsTable[])=>string=(name:string,...args:paramsTable[])=>{
        let result=this.i18n[name][this.i18nSetting];
        if(args.length!==0){
            for(const key in args[0]){
                result=result.replace(`{${key}}`,args[0][key])
            }
        }
        result=result.replace(/{.*}/g,"");
        return result;
    }
}

export default new I18nManager(); 