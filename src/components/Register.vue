<template>
    <main class="form-signin w-25 m-auto mt-5">
  <form>
    <img :src="logo" alt="Logo" style="width: 100px; cursor: pointer" @click="toHomeHandler">
    <h1 class="h3 mb-3 fw-normal mt-3">Regisiter</h1>

    <ValidationErrorVue v-if="validationErrors" :validationErrors="validationErrors"/>

    <Input :label="'Full name'" :type="'text'" v-model="username"/>
    <Input :label="'Email adress'" :type="'email'" v-model="email"/>
    <Input :label="'Password'" :type="'password'" v-model="password"/>

    <Button type="submit" :disabled="isLoading" @click="submitHandler">Register</Button>
  </form>
</main>
</template>

<script>
import input from '@/ui-components/input.vue'
import { logo } from '../constants'
import ValidationErrorVue from './ValidationError.vue'

export default {
  components: { input },
 data() {
   return {
    logo,
    username: '',
    email: '',
    password: ''
   }
  },
  components:{
    ValidationErrorVue
  },
  computed: {
    isLoading(){
      return this.$store.state.auth.isLoading
    },
    validationErrors(){
      return this.$store.state.auth.errors
    }
  },
  methods: {
    submitHandler(e){
      e.preventDefault();
      const data = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      this.$store
      .dispatch('register', data)
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