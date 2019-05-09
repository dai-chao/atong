

import React,{Component} from "react"
import axios from "axios"
import API from "../network/API";

function ajax(url,data) {
    return axios.post(url, {
        data
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
export default ajax

