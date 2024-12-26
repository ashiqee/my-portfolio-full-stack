import axios from "axios";
import { cookies } from "next/headers";

import { getNewAccessToken } from "@/services/AuthService";




const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
});

axiosInstance.interceptors.request.use(
  async function (config) {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const config = error.config;

    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;
      const res = await getNewAccessToken();
      const accessToken = res.data.accessToken;

      config.headers["Authorization"] = accessToken;
      (await cookies()).set("accessToken", accessToken);

      return axiosInstance(config);
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;