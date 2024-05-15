// const AsyncStorage = require("@react-native-async-storage/async-storage");




// const storage = {
//     storeData: async (key, value) => {
//         try {
//             await AsyncStorage.setItem(key, JSON.stringify(value));
//         } catch (error) {
//             console.error(error);
//         }
//     },

//     getData: async (key) => {
//         try {
//             const value = await AsyncStorage.default
//             if (value) {
//                 return JSON.parse(value);
//             } else {
//                 return null;
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     },

//     removeData: async (key) => {
//         try {
//             await AsyncStorage.removeItem(key);
//             console.log(`Data with key "${key}" has been removed.`);
//         } catch (error) {
//             console.error(`Failed to remove data with key "${key}": ${error}`);
//         }
//     }
// }

// module.exports = {
//     storage
// }