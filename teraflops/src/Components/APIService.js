import React from "react";

export default class APIService{
    static PutStock(body){
        return fetch("/query", {
            'method' : 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(body)
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    }
}