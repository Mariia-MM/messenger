<template>
  <div class="login">
    <h1>Log in to your account</h1>

<p>Don't have an account? <router-link :to="{'name':'signup'}">Sign up</router-link>.</p>
  </div>    
</template>

<script>

export default {
  name: 'LoginPage',
  components: {
    
  }
}
</script>
