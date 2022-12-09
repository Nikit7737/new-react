import React from 'react';

// import { getRequest, createUser } from "./Components/Service/Auth";
const axios = require('axios');

const baseUrl = 'https://testing.timestint.com/tsapi/v1'

export async function getRequest(url) {

    try{
        const response = await axios.get(baseUrl+url);
        console.log('response  ', response)     
        //  kaam me lo auth folder ko to comment out krna hai or merko hta dena
        return response.data;
    }catch(error) {
        return [];
    }
    
}

export async function createUser(url, data) {
    const response = await axios.post(baseUrl+url, data);
    return response.data;
}

// export default getRequest(); 












//  let btn = document.getElementById("mybtn");
// let content = document.getElementById("content");

//     function getData(url){
      
//         url = "https://testing.timestint.com/tsapi/v1/blog/category/";
//         // url = "https://testing.timestint.com/tsapi/v1/tag/";
//         // url = "https://testing.timestint.com/tsapi/v1/blog/post/";
//         fetch(url).then((response)=>{
//             return response.json();
//         })  .then((data)=>{
//             console.log(data);
//         })
//     }
//     getData();
    // getData("https://testing.timestint.com/tsapi/v1/tag/")
    // getData("https://testing.timestint.com/tsapi/v1/blog/category/")



// export default Auth;






