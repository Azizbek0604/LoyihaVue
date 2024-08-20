<template>
    <main class="form-signin w-25 m-auto mt-5">
  <form>
    <img :src="logo" alt="Logo" style="width: 100px; cursor: pointer" @click="toHomeHandler">
    <h1 class="h3 mb-3 fw-normal mt-3">Login</h1>

    <ValidationErrorVue v-if="validationErrors" :validationErrors="validationErrors"/>

    <Input :label="'Email adress'" :type="'email'" v-model="email"/>
    <Input :label="'Password'" :type="'password'" v-model="password"/>
    
    <Button :disabled="isLoading" @click="submitHandler">Sign In</Button>
  </form>
</main>
</template>

<script>
import auth from '@/modules/auth'
import {mapState} from 'vuex'
import { logo } from '../constants'
import ValidationErrorVue from './ValidationError.vue'

export default {
 data() {
   return {
    logo,
    email: '',
    passwprd: '',
   }
  },
  components: {
    ValidationErrorVue
  },
   computed: {
    ...mapState({
      isLoading: state => state.auth.isLoading,
      validationErrors: state => state.auth.errors,
    })
  },
  methods: {
    submitHandler(e){
      e.preventDefault();
      const data = {
        email: this.email,
        password: this.password
      }
      this.$store
      .dispatch('login', data)
      .then(user => {console.log('USER', user)
      this.$router.push({name: 'home'})
      })
      .catch(err => console.log('ERROR', err)
      )
    }
  }
}
</script>

<style>
    
</style>