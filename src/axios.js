import Axios from "axios";

import {getToken} from './api/token';

// Дополнительные заголовки
let customHeaders = {};

// APP VERSION
// let appVersion = document.head.querySelector('meta[name="app-version"]')
// if (appVersion) {
//   customHeaders['App-Version'] = appVersion.content
// }

// Создание экземпляра
const axiosInstance = Axios.create({
  baseURL: "https://handswork.pro/api/v1/",
  headers: customHeaders,
});

// REQUEST INTERCEPTOR
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = token;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// RESPONSE INTERCEPTOR
// axiosInstance.interceptors.response.use(null, error => {
//   const response = error.response

//   if (response.status === 401) {
//     store.dispatch(AUTH_LOGOUT).then(() => {
//       if (router.currentRoute.name !== 'login') {
//         router.push('/login')
//       }
//     })
//   }

//   if (response.status === 403 || response.status === 404) {
//     router.push({
//       name: 'error',
//       params: {
//         code: response.status,
//       },
//     })
//   }

//   if (response.status === 333) {
//     // Сохранение версии
//     if (response.data && response.data.version) {
//       localStorage.setItem('app-version', response.data.version)
//     }

//     // Обновление страницы
//     document.location.reload(true)
//   }

//   return Promise.reject(error)
// })

export default axiosInstance;
