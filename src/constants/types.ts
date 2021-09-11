import { DATA_TYPE, STATE_CLASS } from "./enum";

export type voidFunction=()=>void;
export type stringFunction=(c:string)=>void;
export type stringBooleanFunction=(c:string,b:boolean)=>void;
export interface SearchResult{
    /**
     * 数据类型。目前只有teacher和class
     */
    type:DATA_TYPE;
    /**
     * 信息：就是id号
     */
    info:number;
    /**
     * 显示名称：显示出来的数据名称
     */
    name:string;

    college?:string
}
export interface ClassInfo{
    /**
     * 课程名字
     */
    name:string;
    /**
     * 课程均分
     */
 //   score:number;
    avg_score:number;
    /**
     * 课程ID
     */
    id:number;
}

export interface UserInfo{
    avater:string;
    userName:string;
}

export interface CommentsInfo{
    user:UserInfo;
    state:STATE_CLASS;
    trust:number;
    comment:string;
    rank:number;
}

export interface TeacherInfo{
    name:string;
    id:number;
    avg_score:number;
    teacher_name:string;
}

//该接口对应后端返回的teachers对象
export interface Teacher{
    id:number,
    name:string,
    college:string
}