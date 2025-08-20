import {defineStore} from "pinia";
import axios from "axios";
export const Blog_Store = defineStore("blog", {
    Index(params){
        return new Promise((resolve,reject)=>{
            axios.get('/blog',{params:params}).then(response=>{
                return resolve(response)
            }).catch(error=>{
                return reject(error);
            })
        })
    },
    All(){
        return new Promise((resolve,reject)=>{
            axios.get('/blog/all').then(response=>{
                return resolve(response)
            }).catch(error=>{
                return reject(error)
            })
        })
    },
    Create(params){
        return new Promise((resolve,reject)=>{
            axios.post('/blog/create',params).then(response=>{
                return resolve(response)
            }).catch(error=>{
                return reject(error)
            })
        })
    },
    Show(id){
        return new Promise((resolve,reject)=>{
            axios.get(`/blog/`+id).then(response=>{
                return resolve(response)
            }).catch(error=>{
                return reject(error)
            })
        })
    },
    Edit(params){
        return new Promise((resolve,reject)=>{
            axios.get('/blog/'+params.id,params).then(response=>{
                return resolve(response)
            }).catch(error=>{
                return reject(error)
            })
        })
    },
    Delete(id){
        return new Promise((resolve,reject)=>{
            axios.delete(`/blog/`+id).then(response=>{
                return resolve(response)
            }).catch(error=>{
                return reject(error)
            })
        })
    }
})