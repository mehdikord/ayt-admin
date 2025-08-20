import {defineStore} from "pinia";
import axios from "axios";
export const Categories_Products_Store = defineStore("categories_products", {
    actions: {
        Index(params){
            return new Promise((resolve,reject)=>{
                axios.get('/products/categories',{params:params}).then(response=>{
                    return resolve(response)
                }).catch(error=>{
                    reject(error)
                })
            })
        },
        Create(params){
            return new Promise((resolve,reject)=>{
                axios.get('/products/categories/create',params).then((response)=>{
                    return resolve(response)
                }).catch((error=>{
                    return reject(error)
                }))
            })
        },
        All(){
            return new Promise((resolve,reject)=>{
                axios.get('/products/categories/all').then((response)=>{
                    return  resolve(response)
                }).catch(error=>{
                    return reject(error)
                })
            })
        },
        Show(id){
            return new Promise((resolve,reject)=>{
                axios.get('/products/categories/'+id).then((response)=>{
                    return resolve(response)
                }).catch(error=>{
                    return reject(error)
                })
            })
        },
        Edit(params){
            return new Promise((resolve,reject)=>{
                axios.get('/products/categories/'+params.id,params).then((response)=>{
                    return resolve(response)
                }).catch(error=>{
                    return reject(error)
                })

            })
        },
        Delete(id){
            return new Promise((resolve,reject)=>{
                axios.delete(`/products/categories/`+id).then((response)=>{
                    return resolve(response)
                }).catch(error=>{
                    return reject(error)
                })
            })
        }
    }
})
