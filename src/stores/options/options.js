import {defineStore} from "pinia";
import axios from "axios";
export const Options_Store = defineStore("options",{
    Index(params){
        return new Promise((resolve,reject)=>{
            axios.get('/products/options',{params:params}).then(response=>{
                return resolve(response)
            }).catch(error=>{
                return reject(error)
            })
        })
    },
    Create(params){
        return new Promise((resolve,reject)=>{
            axios.post('/products/options',params).then(response=>{
                return resolve(response)
            }).catch(error=>{
                return reject(error)
            })
        })
    },
    All(){
        return new Promise((resolve,reject)=>{
            axios.get('/products/options/all').then(response=>{
                return resolve(response)
            }).catch(error=>{
                return reject(error)
            })
        })
    },
    Show(id){
        return new Promise((resolve,reject)=>{
            axios.get('/products/options/+id').then(response=>{
                return resolve(response)
            }).catch(error=>{
                return reject(error)
            })
        })
    },
    Edit(params){
        return new Promise((resolve,reject)=>{
            axios.get('/products/options/'+params.id,params).then(response=>{
                return resolve(response)
            }).catch(error=>{
                return reject(error)
            })
        })
    },
    Delete(id){
        return new Promise((resolve,reject)=>{
            axios.delete('/products/options/'+id).then(response=>{
                return resolve(response)
            }).catch(error=>{
                return reject(error)
            })
        })
    }
})