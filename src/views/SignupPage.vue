<template>
  <div class="signup">
    <h1>sign up</h1>
    <section>
      <form class="signup__form" >
        <CustomInput 
          label="Name" 
          placeholder="Tell me your name" 
          type="text"
          v-model="name"
          :showErrors="nameError"          
          :errorsList="['The name have to contain more then 4 characters']"
        />
        <CustomInput 
          label="Email" 
          placeholder="Tell me your email" 
          type="email"
          :showErrors="emailError"
          v-model="email"
          :errorsList="['obligatory to write the email','wrong email format']"
        />
        <CustomInput 
          label="Password"  
          type="password"
          placeholder="Write password"
          :showErrors="passwordError"
          v-model="password"
          :errorsList="['obligatory to write the password','passwords does not match']"
        />
        <CustomInput 
          label="Repeat password"  
          type="password"
          placeholder="Repeat password"
          :showErrors="passwordError"
          v-model="password2"          
        />
        <CustomButton
          @click.prevent="confirm"
          type="submit"
          text="Sign up"
        
        />


      </form>
    </section>

    <section>
          <p>
            <router-link :to="{'name':'login'}">Log in</router-link>.
          </p>
    </section>



  </div>
</template>

<script>
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import NProgress from "nprogress";

const limitName = 4;

export default {
  name: 'SignupPage',
  mounted() {
    console.log(process.env.VUE_APP_URL_API);
  },
  data() {
    return {
      name:'',
      nameError: false,
      email:'',
      emailError: false,
      password:'',
      password2:'',
      passwordError: false
      

    }
  },
  components: {
    CustomInput,
    CustomButton,
    
},
  methods: {
    confirm(){
      //Clean old confirmations
      this.nameError = false;
      this.emailError = false;
      this.passwordError = false;
      //Name
      //limit of characters to a limitName
      if (this.name.trim().length < limitName){
        this.nameError = true;
      }
      //Email
      if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.email)){
        this.emailError = true;
      }

      //Password

      if(this.password.trim().length===0 || this.password != this.password2){
        this.passwordError = true;
      }
      
      if(!this.nameError
      && !this.emailError
      && !this.passwordError){
        //Save data
        this.createUser();
        
      }
    },
    async createUser(){
      NProgress.start();
 
    }
    
  },
}
</script>
