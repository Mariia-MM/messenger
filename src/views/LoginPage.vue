<template>
  <div class="login">
    <h1>Log in to your account</h1>
    <form class="login__form">
      <CustomInput
          label="Email"
          placeholder="Tell me your email"
          type="email"
          v-model="email"
      />
      <CustomInput
          label="Password"
          placeholder="What is your password?"
          type="password"
          v-model="password"
      />
      <CustomButton
          @click.prevent="login"
          type="submit"
          text="Enter"
      />

    </form>

<p>Don't have an account? <router-link :to="{'name':'signup'}">Sign up</router-link>.</p>
  </div>    
</template>

<script>
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
//import NProgress from "nprogress";
import supabase from '@/mixins/supabase.js';


export default {
  name: 'LoginPage',
  mixins: [supabase],
  data() {
    return {
      email: '',
      password: ''
    }
  },
  mounted() {
    // alert if you already are registered
    if (this.$route.query.signup) alert('You are registered!');
  },
  components: {
    CustomInput,
    CustomButton
  },
  methods: {
    async login(){
      const {user,session,error}= await this.supabase.auth.signIn({
        email: this.email,
        password: this.password,
      });
      if (user === null){
        //if error
        alert(error.message);
      } else {
        //if logined 
        this.$router.push({name:'home'});
      }
      return session;
    }
  }
}
</script>
