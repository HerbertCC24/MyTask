import request from "umi-request";

//请求拦截器
// request.interceptors.request.use((url, options) => {
//     return {
//       url,
//       options,
//     };
// });

//响应拦截器
request.interceptors.response.use(async (response) => {
  const data = await response.clone().json();
  console.log(data);
  return response;
});
//  测试接口 POST /api/ping
export async function ping(
  // body: API.CorpContractInfoDTO_,
  options?: { [key: string]: any }
) {
  return request<API.Result>("/api/ping", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    //   data: body,
    ...(options || {}),
  });
}
//  登录接口 POST /user/login
export async function qryLogin(
  params: { [key: string]: any },
  options?: { [key: string]: any }
) {
  const { username, password } = params;
  return request<API.Result>(`/api/user/login`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    params,
    //   data: body,
    ...(options || {}),
  });
}
//  登录接口restful POST /user/login
export async function restfulLogin(
  params: { [key: string]: any },
  options?: { [key: string]: any }
) {
  const { username, password } = params;
  return request<API.Result>(`/api/user/login/${username}/${password}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // params,
    //   data: body,
    ...(options || {}),
  });
}
//  登录接口restful POST /user/login
export async function json(
  body: { [key: string]: any },
  options?: { [key: string]: any }
) {
  // const { username, password } = params;
  return request<API.Result>(`/api/json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // params,
    data: body,
    ...(options || {}),
  });
}
