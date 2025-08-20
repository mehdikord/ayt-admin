import {defineStore} from "pinia";
import axios from "axios";
export const Products_Store = defineStore("products", {
    actions: {
        Index(params){
            return new Promise((resolve,reject)=>{
                axios.get('/products',{params:params}).then(response=>{
                    return resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        Create(params){
            return new Promise((resolve,reject)=>{
                axios.get('/products/create',params).then((response)=>{
                    return resolve(response)
                }).catch((error=>{
                    return reject(error)
                }))
            })
        },
        All(){
            return new Promise((resolve,reject)=>{
                axios.get('/products/all').then((response)=>{
                   return  resolve(response)
                }).catch(error=>{
                   return reject(error)
                })
            })
        },
        Show(id){
            return new Promise((resolve,reject)=>{
                axios.get('/products/'+id).then((response)=>{
                   return resolve(response)
                }).catch(error=>{
                  return reject(error)
                })
            })
        },
        Edit(params){
            return new Promise((resolve,reject)=>{
                axios.get('/products/'+params.id,params).then((response)=>{
                    return resolve(response)
                }).catch(error=>{
                    return reject(error)
                })

            })
        },
        Delete(id){
            return new Promise((resolve,reject)=>{
                axios.delete(`/products/`+id).then((response)=>{
                    return resolve(response)
                }).catch(error=>{
                    return reject(error)
                })
            })
        }
    }
})
