
// // const URL_HTTP = 'https://57c3-2405-4802-6050-eba0-f872-1f5e-5cc1-616.ngrok-free.app/api/users/';

// // const apiAuth = {
// //     login: async (dataLogin) => {
// //         const response = await fetch(`${URL_HTTP}login`, {
// //             method: "POST",
// //             body: JSON.stringify({ email: dataLogin.email, password: dataLogin.password })
// //         });

// //         // console.log(await response);node c:\Users\ASUS-PR0\Documents\ReactNative\ASM_ReactNative2\src\services\auth\auth.services.js
// //         return response;
// //     }
// // }


// // apiAuth.login({ email: "dungkuro4205@gmail.com", password: "123456" }).then((data) => {
// //     console.log(data);
// // });



// const axios = require('axios');

// const URL_HTTP = 'https://192.168.1.13:1306/api/users/';

// const instance = axios.create({
//     baseURL: URL_HTTP,
//     timeout: 1000,
//     headers: { 'X-Custom-Header': 'foobar' }
// });


// const apiAuth = {
//     login: async (dataLogin) => {
//         try {
//             const response = await axios.post(`${URL_HTTP}login`, {
//                 email: dataLogin.email,
//                 password: dataLogin.password
//             });

//             return response.data; // Trả về dữ liệu phản hồi từ Axios

//         } catch (error) {
//             console.error('There was a problem with the request:', error);
//             throw error; // Re-throw the error to be handled by the caller
//         }
//     },
//     updatePass: async (dataUpdate, token) => {
//         try {
//             const response = await axios.put(`${URL_HTTP}update_password`, {
//                 password: dataUpdate.pass,
//                 newPassword: dataUpdate.newPass
//             }, {
//                 headers: {
//                     token: token
//                 }
//             });
//             return response.data
//         } catch (error) {
//             console.error('There was a problem with the request:', error);
//             throw error;
//         }
//     }
// }

// // apiAuth.login({ email: "dungkuro4205@gmail.com", password: "123456" })
// //     .then(data => {
// //         console.log(data);
// //     })
// //     .catch(error => {
// //         console.error(error);
// //     });
// apiAuth.updatePass({ pass: '12345', newPass: '12345' }, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImVtYWlsIjoiZHVuZ2t1cm80MjA1QGdtYWlsLmNvbSIsImlhdCI6MTcxNTIyODMxMCwiZXhwIjoxNzE1MjMxOTEwfQ.32SekwEXLPgQJbs7R-du_cX7DsA4tEDJxGdr6DA5Qlw').then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })
// // c:\Users\ASUS-PR0\Documents\ReactNative\ASM_ReactNative2\src\services\auth\auth.services.js