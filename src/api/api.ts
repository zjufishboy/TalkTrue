const prefix = "https://rate.t.liujl.com";

const apiFetch = (path: string, data: any, config: RequestInit) => {
  if (config.method === "POST") {
    config.body = JSON.parse(data);
  }
  // 默认开启跨域
  config.mode = "cors";
  return fetch(prefix + path, config);
};

export const apiGet = (path: string, data: Record<string, string | number>, config: RequestInit = {}) => {
  // 默认有个字段
  const paramStrs = ["format=json"];
  for (const k of Object.keys(data)) {
    const v = data[k];
    paramStrs.push(`${k}=${v}`);
  }
  if (paramStrs.length > 0) {
    // 存在参数
    path += "?" + paramStrs.join("&");
  }
  config.method = "GET";
  config.credentials = "include";
  return apiFetch(path, {}, config);
};

export const apiPost = (path: string, data: Record<string, unknown>, config: RequestInit = {}) => {
  config.method = "POST";
  return apiFetch(path, {}, config);
};
