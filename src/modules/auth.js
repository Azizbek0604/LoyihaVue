import authServise from "@/service/auth"

const state = {
    isLoading: false,
    user: null,
    errors: null 
}

const mutations = {
    registerStart(state){
        state.isLoading = true
        state.user = null,
        state.errors = null
    },
    registerSuccess(state, payload){
        state.isLoading = false
        state.user = payload 
    },
    registerFailur(state, payload){
        state.isLoading = false
        state.errors = payload
    }
}

const actions = {
    register(context, user){
        return new Promise((resolve, reject) => {
            context.commit('registerStart')
            authServise.register(user).then(response => {
                context.commit('registerSuccess', response.data.user)
                resolve(response.data.user)
            }).catch(error => {
                context.commit('registerFailur', error.response.data)
                reject(error.response.data)
            }) 
        })
    }
}

export default{state, mutations, actions}