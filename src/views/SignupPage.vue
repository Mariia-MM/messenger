<template>
  <div class="signup">
    <h1>sign up</h1>
    <section>
      <form class="signup__form" >
        <CustomInput 
          label="Name" 
          placeholder="Tell me your name" 
          type="text"
          :showErrors="true"
          :errorsList="['obligatory to write the name']"
        />
        <CustomInput label="Email" placeholder="Tell me your email" type="email"/>
        <CustomInput label="Password"  type="password"/>
        <CustomInput label="Repeat password"  type="password"/>
        <CustomInput type="submit" value="Sign up"/>
        
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
import CustomInput from '@/components/CustomInput'

export default {
  name: 'SignupPage',
  components: {
    CustomInput
  }
}
</script>
