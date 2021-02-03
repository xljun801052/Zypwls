import axios from "axios";

export default function homepageRequest(config) {

  // 先从localStroage中获取token，放在请求头中
  let token = window.localStorage.getItem("token")
  console.log(token)

  // 创建axios实例对象
  const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:12019",
    timeout: "120000",
    headers:{
      token
    }
  })

  // 定制请求拦截器
  axiosInstance.interceptors.request.use(
    config => {
      return config;
    },
    error => {
      console.log("request-interceptor出现错误!");
    }
  );

  // 定制响应拦截器
  axiosInstance.interceptors.response.use(
    res => {
      return res.data;
    },
    error => {
      console.log("response-interceptor出现错误!");
    }
  );

  // 返回Promise对象
  return axiosInstance(config);
}
