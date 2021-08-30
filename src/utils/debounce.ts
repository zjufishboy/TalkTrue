import { voidFunction } from "@/constants/types";

/**
 * 防抖函数
 * @param funct 函数本体
 * @param time 防抖时间
 */
export function debounce(funct: voidFunction, time: number): voidFunction {
  let timer: NodeJS.Timeout;
  return () => {
    timer && clearTimeout(timer);
    timer = setTimeout(funct, time);
  };
}
