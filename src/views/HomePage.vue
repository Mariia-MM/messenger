<template>
<div class="home">
<h1>holalalal</h1>
<button @click="logout">Exit</button>
</div>
</template>

<script>
import supabase from '@/mixins/supabase.js';
import privateLogin from '@/mixins/private.js'

export default{
    name: 'HomePage',
    mixins: [supabase, privateLogin],
    data() {
        return {
            
        }
    },
    mounted() {
        
    },
    components:{

    },
    methods: {
        async logout(){
            await this.supabase.auth.signOut();
            this.checkLogin();

        }
        
    }
}
</script>