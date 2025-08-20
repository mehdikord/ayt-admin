import {defineStore} from "pinia";
import axios from "axios";
export const Discount_Store = defineStore("discount_store",{
    Index(params){
        return new Promise((resolve,reject)=>{
            axios.get('/products/discount',{params:params}).then(response=>{
                return resolve(response)
            }).catch(error=>{
                return reject(error)
            })
        })
    },
    Create(params){
        return new Promise((resolve,reject)=>{
            axios.post('/products/discount',params).then(response=>{
                return resolve(response)
            }).catch(error=>{
               return reject(error)
            })
        })
    },
    All(){
        return new Promise((resolve,reject)=>{
            axios.get('/products/discount/all').then(response=>{
                return resolve(response)
            }).catch(error=>{
                return reject(error)
            })
        })
    },
    Show(id){
        return new Promise((resolve,reject)=>{
            axios.get(`/products/discount/`+id).then(response=>{
                return resolve(response)
            }).catch(error=>{
                return reject(error)
            })
        })
    },
    Edit(params){
        return new Promise((resolve,reject)=>{
            axios.put(`/products/discount/`+params.id,params).then(response=>{
                return resolve(response)
            }).catch(error=>{
                return reject(error)
            })
        })
    },
    Delete(id){
        return new Promise((resolve,reject)=>{
            axios.delete(`/products/discount/`+id).then(response=>{
                return resolve(response)
            }).catch(error=>{
                return reject(error)
            })
        })
    }
})