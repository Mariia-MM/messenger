import supabase from "./supabase.js";

export default{
    mixins:[supabase],
    mounted() {
        this.checkLogin();
    },
    methods: {
        async checkLogin (){
            if (await this.supabase.auth.user()?.aud !== 'authenticated') {
                this.$router.push({name: 'login'});
            }

        }
    },
}