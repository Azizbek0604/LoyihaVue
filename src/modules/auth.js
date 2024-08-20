import { setItem } from "@/helper/persistaneStorage"
import AuthServise from "@/service/auth"

const state = {
    isLoading: false,
    user: null,
    errors: null,
    isLoggedIn: null, 
}

const mutations = {
    registerStart(state){
        state.isLoading = true
        state.user = null
        state.errors = null
        state.isLoggedIn = null 

    },
    registerSuccess(state, payload){
        state.isLoading = false
        state.user = payload 
        state.isLoggedIn = true
    },
    registerFailur(state, payload){
        state.isLoading = false
        state.errors = payload.errors  
        state.isLoggedIn = false

    },
    loginStart(state) {
        state.isLoading = true
        state.user = null,
        state.errors = null
        state.isLoggedIn = null
    },
    loginSuccess(state, payload) {
        state.isLoading = false
        state.user = payload 
        state.isLoggedIn = true
    },
    loginFailur(state, payload) {
        state.isLoading = false
        state.errors = payload.errors  
        state.isLoggedIn = false 
    },
}

const actions = {
    register(context, user){
        return new Promise((resolve, reject) => {
            context.commit('registerStart')
            AuthServise.register(user)
                .then(response => {
                context.commit('registerSuccess', response.data.user)
                setItem('token', response.data.user.token)
                resolve(response.data.user)
            }).catch(error => {
                context.commit('registerFailur', error.response.data)
                reject(error.response.data)
            }) 
        })
    },
    login(context, user){
        return new Promise((resolve, reject) => {
            context.commit('loginStart')
            AuthServise.login(user)
                .then(response => {
                context.commit('loginSuccess', response.data.user)
                setItem('token', response.data.user.token)
                resolve(response.data.user)
            }).catch(error => {
                context.commit('loginFailur', error.response.data)
                reject(error.response.data)
            }) 
        })
    },
}

export default{state, mutations, actions}