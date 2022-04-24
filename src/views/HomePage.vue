<template>
    <div class="home">
        <h1>holalalal</h1>


        <button @click="logout">Exit</button>
        <NewMessage
            :user-ID="myID"
        />
    </div>
</template>

<script>
import supabase from '@/mixins/supabase.js';
import privateLogin from '@/mixins/private.js';
import NewMessage from '@/components/NewMessage'

export default{
    name: 'HomePage',
    mixins: [supabase, privateLogin],
    data() {
        return {
            myID: ''
        }
    },
    async mounted() {
        this.myID = await this.supabase.auth.user().id;
        
    },
    components:{
        NewMessage
    },
    methods: {
        async logout(){
            await this.supabase.auth.signOut();
            this.checkLogin();

        }
        
    }
}
</script>