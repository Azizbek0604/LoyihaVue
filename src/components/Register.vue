<template>
    <main class="form-signin w-25 m-auto mt-5">
  <form>
    <img :src="logo" alt="Logo" style="width: 100px; cursor: pointer" @click="toHomeHandler">
    <h1 class="h3 mb-3 fw-normal mt-3">Regisiter</h1>

    <Input :label="'Full name'" :type="'text'" />
    <Input :label="'Email adress'" :type="'email'" />
    <Input :label="'Password'" :type="'password'"/>

    <Button type="submit" :disabled="isLoading" @click="submitHandler">Register</Button>
  </form>
</main>
</template>

<script>
import input from '@/ui-components/input.vue'
import { logo } from '../constants'

export default {
  components: { input },
 data() {
   return {
    logo,
   }
  },
  computed: {
    isLoading(){
      return this.$store.state.auth.isLoading
    }
  },
  methods: {
    submitHandler(e){
      e.preventDefault();
      this.$store.dispatch('register')
    }
  }
}
</script>

<style>
    
</style>