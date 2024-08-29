<template>
  <div class="col">
    <div class="card shadow-none" style="border: none; border-radius: 0;">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c"></rect>
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">News</text>
      </svg>
      <div class="card-body">
        <p class="card-title fw-bold">
          {{ article.title }}
        </p>
        <p>
          {{ article.description.length > 200 ? article.description.slice(0, 200) + '...' : article.description }}
        </p>
        <div class="d-flex justify-content-between align-items-center card-footer">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" @click="navigateHandler">Read article</button>
            <!-- <button type="button" class="btn btn-sm btn-outline-secondary" @click="editHandler">Edit</button> -->
          </div>
          <small class="text-body-secondary">{{ new Date(article.createdAt).toLocaleString('us') }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
      default: () => ({
        title: '',
        description: '',
        createdAt: '',
        slug: ''
      })
    }
  },
  methods: {
    navigateHandler() {
      this.$router.push(`/articles/${this.article.slug}`);
    },
  }
};
</script>

<style scoped>
.card {
  margin-bottom: 1rem;
}
.card-title {
  font-size: 1.25rem;
}
.card-body {
  padding: 1rem;
}
.card-footer {
  padding: 0.75rem;
}
.card-img-top {
  width: 100%;
  height: 225px;
}
</style>
