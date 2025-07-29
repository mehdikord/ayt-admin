import {defineStore} from "pinia";
import axios from "axios";
export const Store_Users = defineStore("Users", {
    actions: {
//برای گرفتن لیست کاربران
        Index(params){
            return new Promise((resolve,reject) => {
                axios.get("/users",{params:params}).then((response)=>{
                    return resolve(response)
                }).catch(error=>{
                    return reject(error)
                })
            })
        },
        All(){
            return new Promise((resolve,reject)=>{
                axios.get('/users/all').then(response=>{
                    return resolve(response)
                }).catch(error=>{
                    return reject(error)
                })
            })
        },
        Show(id){
            return new Promise((resolve,reject)=>{
                axios.get('/users/'+id).then(response=>{
                    return resolve(response)
                }).catch(error=>{
                    return reject(error)
                })
            })
        },
        Edit(params){
            return new Promise((resolve,reject)=>{
                axios.get('/users/'+params.id,params).then(response=>{
                    return resolve(response)
                }).catch(error=>{
                    return reject(error)
                })
            })
        }

    }
})