import ArticleService from "@/service/articles"

const state = {
    data: null,
    isLoading: false,
    error: null,
    articleDetail: null,
}

const mutations = {
    getArticlesStart(state) {
        state.isLoading = true
        state.data = null
        state.error = null
    },
    getArticlesSuccess(state, payload) {
        state.isLoading = false
        state.data = payload
    },
    getArticlesFailur(state) {
        state.isLoading = false
    },
    getArticleDetailStart(state) {
        state.isLoading = true
        state.articleDetail = null
        state.error = null
    },
    getArticleDetailSuccess(state, payload) {
        state.isLoading = false
        state.articleDetail = payload
    },
    getArticlesFailur(state) {
        state.isLoading = false
    },
}

const actions = {
    articles(context){
        return new Promise((resolve, reject) => {
            context.commit('getArticlesStart')
            ArticleService.articles()
                .then(response => {
                context.commit('getArticlesSuccess', response.data.articles) 
                resolve(response.data.articles)
            })
            .catch(() => context.commit('getArticlesFailur'))
        })
    },
    articleDetail(context, slug){
        return new Promise((resolve, reject) => {
            context.commit('getArticleDetailStart')
            ArticleService.articleDetails(slug)
            .then(response => {})
            .catch(error)
        })
    }
}

export default {state, actions, mutations}