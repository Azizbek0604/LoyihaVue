<template>
  <div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
    <a class="d-flex align-items-center link-body-emphasis text-decoration-none" href="#">
      <img :src="logo" alt="Company Logo" style="width: 100px; cursor: pointer" @click="toHomeHandler">
    </a>
     <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
    <template v-if="isLoggedIn">
    <RouterLink :to="{ name: 'create-article' }" class="me-3 py-2 link-body-emphasis text-decoration-none">
        Create Article
      </RouterLink>
      <RouterLink :to="{ name: 'home' }" class="me-3 py-2 link-body-emphasis text-decoration-none">
        {{currensUser.username }}
      </RouterLink>
      <a href="#" class="me-3 py-2 link-body-emphasis text-decoration-none" @click="logout">Logout</a>
    </template>
    <template v-if="isAnonymous">
      <RouterLink :to="{ name: 'login' }" class="me-3 py-2 link-body-emphasis text-decoration-none">
        Login
      </RouterLink>
      <RouterLink :to="{ name: 'register' }" class="me-3 py-2 link-body-emphasis text-decoration-none">
        Register
      </RouterLink>
    </template>
  </nav>
  </div>
</template>

<script>
import { logo } from '../constants';
import { mapGetters } from 'vuex';
import { gettersTypes } from '@/modules/types'; 

export default {
  data() {
    return {
      logo,
    };
  },
  computed: {
    ...mapGetters({
      currensUser: gettersTypes.currentUser,
      isLoggedIn: gettersTypes.isLoggedIn,
      isAnonymous: gettersTypes.isAnonymous
    }),
  },
  methods: {
    toHomeHandler() {
      this.$router.push({ name: 'home' });
    },
    logout() {
      return this.$store.dispatch('logout')
    }
  }
};
</script>

<style>

</style>
