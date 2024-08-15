<template>
    <main class="form-signin w-25 m-auto mt-5">
  <form>
    <img :src="logo" alt="Logo" style="width: 100px; cursor: pointer" @click="toHomeHandler">
    <h1 class="h3 mb-3 fw-normal mt-3">Login</h1>

    <Input :label="'Email adress'" :type="'email'" />
    <Input :label="'Password'" :type="'password'"/>
    
    <Button>Sign In</Button>
  </form>
</main>
</template>

<script>
import { logo } from '../constants'

export default {
 data() {
   return {
    logo,
   }
  },
}
</script>

<style>
    
</style>