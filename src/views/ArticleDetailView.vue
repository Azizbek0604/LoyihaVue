<template>
    <div>
        <Loader v-if="isLoading" class="offset-md-6"/>
       <ArticleDetailVue v-else/>
    </div>
</template>

<script>
import ArticleDetailVue from '@/components/ArticleDetail.vue';
import { mapState } from 'vuex';
export default {
  components: {
    ArticleDetailVue,
  },
    computed: {
      ...mapState({
         isLoading: state => state.articles.isLoading
      })
    },   
 mounted() {
    this.$store.dispatch('articleDetail', this.$route.params.slug)
 }, 
}
</script>

<style scoped>
    
</style>