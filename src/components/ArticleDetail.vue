<template>
    <div v-if="article">
       <div class="row">
        <div class="col-12">
          <p class="fs-2">{{article.title}}</p>
        </div>
        <div class="col-md-12 col-lg-8 mt-3">
          <p class="opacity-75">Description:</p>
          <p class="font-monospace">{{article.description}}</p>
        </div>
        <div class="col-6 col-lg-2 mt-3">
          <p class="opacity-75">Created at:</p>
          <p class="font-monospace">{{new Date(article.createdAt).toLocaleDateString('us')}}</p>
        </div>
        <div class="col-6 col-lg-2 mt-3">
          <p class="opacity-75">Updated at:</p>
          <p class="font-monospace">{{new Date(article.updatedAt).toLocaleDateString('us')}}</p>
        </div>
        <div class="col-lg-4 mt-3">
          <p class="opacity-75">Author:</p>
          <div>
            <div>
              <img :src="article.author.image" class="img-thumbnail masha" style="width: 270px; height: 250px;">
            </div>
            <div class="p-2 fw-bold">
            {{article.author.username}}
            </div>
          </div>
          <p class="font-monospace mt-2">{{article.author.bio}}</p>
        </div>
        <div class="col-lg-8 mt-3">
          <p class="opacity-75">Body:</p>
          <p>{{article.body}}</p>
        </div>
       </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
        article: state => state.articles.articleDetail,
    })
  }
}
</script>

<style>
  
</style>