import { DATA_TYPE } from "./enum";

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
}