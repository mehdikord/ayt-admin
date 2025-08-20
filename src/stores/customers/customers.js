import {defineStore} from "pinia";
import axios from "axios";
export const Store_Customers = defineStore("Customers", {
    actions: {
//برای گرفتن لیست کاربران
        Index(params){
            return new Promise((resolve,reject) => {
                axios.get("/customers",{params:params}).then((response)=>{
                    return resolve(response)
                }).catch(error=>{
                    return reject(error)
                })
            })
        },
        Create(params){
            return new Promise((resolve,reject)=>{
                axios.post('/customers/create',params).then((response)=>{
                   return resolve(response)
                }).catch(error=>{
                   return reject(error)
                })
            })

        },
        All(){
            return new Promise((resolve,reject)=>{
                axios.get('/cuatomers/all').then(response=>{
                    return resolve(response)
                }).catch(error=>{
                    return reject(error)
                })
            })
        },
        Show(id){
            return new Promise((resolve,reject)=>{
                axios.get('/customers/'+id).then(response=>{
                    return resolve(response)
                }).catch(error=>{
                    return reject(error)
                })
            })
        },
        Edit(params){
            return new Promise((resolve,reject)=>{
                axios.get('/customers/'+params.id,params).then(response=>{
                    return resolve(response)
                }).catch(error=>{
                    return reject(error)
                })
            })
        },
        Delete(id){
            return new Promise((resolve,reject)=>{
                axios.get('/customers/'+id).then(response=>{
                    return resolve(response)
                }).catch(error=>{
                    return reject(error)
                })
            })
        }

    }
})