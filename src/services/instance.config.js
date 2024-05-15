// const { default: AsyncStorage } = require('@react-native-async-storage/async-storage');
// const axios = require('axios');
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// AsyncStorage




// // const storage = {
// //     storeData: async (key, value) => {
// //         try {
// //             await AsyncStorage.setItem(key, JSON.stringify(value));
// //         } catch (error) {
// //             console.error(error);
// //         }
// //     },

// //     getData: async (key) => {
// //         try {
// //             const value = await AsyncStorage.default
// //             if (value) {
// //                 return JSON.parse(value);
// //             } else {
// //                 return null;
// //             }
// //         } catch (error) {
// //             console.error(error);
// //         }
// //     },

// //     removeData: async (key) => {
// //         try {
// //             await AsyncStorage.removeItem(key);
// //             console.log(`Data with key "${key}" has been removed.`);
// //         } catch (error) {
// //             console.error(`Failed to remove data with key "${key}": ${error}`);
// //         }
// //     }
// // }

// const URL_HTTP = 'http://192.168.1.13:1306/api';

// const instance = axios.create({
//     baseURL: URL_HTTP,
//     timeout: 1000,
//     headers: { 'Content-Type': 'application/json' }
// });

// const runRefreshToken = async (refreshToken) => {
//     try {
//         const response = await instance.post('/users/refresh_token', {
//             refreshToken: refreshToken
//         });
//         return response.data;
//     } catch (err) {
//         throw err;
//     }
// };

// instance.interceptors.request.use(async (config) => {
//     console.log("request");

//     if (config.url.indexOf('/users/login') >= 0 || config.url.indexOf('users/refresh_token') >= 0) return config;

//     const accessToken = {
//         token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTcxNTU4NTY5NiwiZXhwIjoxNzE1NTg5Mjk2fQ.eUxCYXrYHmHPSugelNogq446ST4IL_DqsGUM3Z4HL84',
//         timeExpired: 1715589296134
//     }
//     const refreshToken = {
//         token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTcxNTU4NTY5NiwiZXhwIjoxNzQ3MTQzMjk2fQ.cS-nvqDloIEaUyfvT2rwpak5gOWDS83ODaVb4XenLq0',
//         timeExpired: 1716104096137
//     }

//     if (!accessToken) {
//         return Promise.reject("Vui lòng đăng nhập!");
//     } else {
//         if (!refreshToken || refreshToken.timeExpired <= Date.now()) {
//             return Promise.reject("Vui lòng đăng nhập!");
//         }

//         if (accessToken.timeExpired <= Date.now()) {
//             const newToken = await runRefreshToken(refreshToken.token);
//             console.log(newToken);
//         }
//     }
//     console.log("Token chưa hết hạn!");
//     return config;
// }, err => {
//     return Promise.reject(err);
// });

// const test = async () => {
//     await instance.get('/users').then(() => {
//         console.log("Test");
//     }).catch(err => {
//         console.error("err: ", err);
//     });
// };

// // test();
// // console.log(1715589296134 <= Date.now());

// // const test = async () => {
// //     await fetch(URL_HTTP + '/users').then(res => {
// //         return res.json();
// //     }).then(res => {
// //         console.log(res);
// //     })
// // }
// // test()


// const checkStorage = async (key, value) => {
//     await AsyncStorage.setItem(key, value);
// }

// checkStorage('test', 7);

