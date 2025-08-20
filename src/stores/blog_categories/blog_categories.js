import {defineStore} from "pinia";
import axios from "axios";
export const Blog_Categories_Store = defineStore("blog_categories", {
    Index(params){
        return new Promise((resolve,reject)=>{
            axios.get('/blog/categories',{params:params}).then(response=>{
                return resolve(response)
            }).catch(error=>{
                return reject(error);
            })
        })
    },
    All(){
        return new Promise((resolve,reject)=>{
            axios.get('/blog/categories/all').then(response=>{
                return resolve(response)
            }).catch(error=>{
                return reject(error)
            })
        })
    },
    Create(params){
        return new Promise((resolve,reject)=>{
            axios.post('/blog/categories/create',params).then(response=>{
                return resolve(response)
            }).catch(error=>{
                return reject(error)
            })
        })
    },
    Show(id){
        return new Promise((resolve,reject)=>{
            axios.get(`/blog/categories/`+id).then(response=>{
                return resolve(response)
            }).catch(error=>{
                return reject(error)
            })
        })
    },
    Edit(params){
        return new Promise((resolve,reject)=>{
            axios.get('/blog/categories/'+params.id,params).then(response=>{
                return resolve(response)
            }).catch(error=>{
                return reject(error)
            })
        })
    },
    Delete(id){
        return new Promise((resolve,reject)=>{
            axios.delete(`/blog/categories/`+id).then(response=>{
                return resolve(response)
            }).catch(error=>{
                return reject(error)
            })
        })
    }
})