import ArticleService from "@/service/articles"

const state = {
    isLoading: false,
}

const mutations = {
    createArticleStart(state) {
        state.isLoading = true
    },
    createArticleSuccess(state) {
        state.isLoading = false
    },
    createArticleFailur(state) {
        state.isLoading = false
    },
}

const actions = {
    createArticle(context, article){
        new Promise((resolve, reject) => {
            context.commit('createArticleStart')
            ArticleService.createArticle(article)
            .then(() => context.commit('createArticleSuccess'))
            .catch(() => context.commit('createArticleFailur'))
        })
    }
}

export default {
    state,
    mutations,
    actions
}