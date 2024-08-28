<template>
    <div>
       <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
       <Loader v-if="isLoading" class="offset-md-6"/>
       <ArticleCardVue v-else v-for="article in data" :article="article" :key="article.id"
      />
       </div>
    </div>
</template>

<script>
import ArticleCardVue from '@/components/ArticleCard.vue'
import {mapState} from 'vuex'
export default {
components: {
    ArticleCardVue
}, 
computed: {
  ...mapState({
    data: state => state.articles.data,
    isLoading: state => state.articles.isLoading,
    error: state => state.articles.error,
    })
  },
mounted() {
    this.$store.dispatch('articles')
}
}
</script>

<style>
    
</style>