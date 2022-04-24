<template>
    <div class="home container-padding">
        <h1>holalalal</h1>

        <CustomButton
            text="Exit"
            @do-click="logout"

        />
        <div class="home__posts">
            <SinglePost 
                v-for="(post,index) in posts"
                :key="index"
                :message="post.text"
                :is-my-post="isMyPost(post.user_id)"
            />
         
        </div>
        <NewMessage
            :user-ID="myID"
        />
    </div>
</template>

<script>
//mixins
import supabase from '@/mixins/supabase.js';
import privateLogin from '@/mixins/private.js';
//components
import NewMessage from '@/components/NewMessage';
import SinglePost from '@/components/SinglePost';
import CustomButton from '@/components/CustomButton';

export default{
    name: 'HomePage',
    mixins: [supabase, privateLogin],
    data() {
        return {
            myID: '',
            posts: [],
        }
    },
    async mounted() {
        this.myID = await this.supabase.auth.user().id;
        this.getMessages();
        this.getUsers();
    },
    components:{
        NewMessage,
        SinglePost,
        CustomButton
    },
    methods: {
        async logout(){
            await this.supabase.auth.signOut();
            this.checkLogin();
        },
        async getMessages(){
            
            const { data,error } = await this.supabase
                .from('social_network-posts')
                .select("*");
            if (error) {
                alert(error.message);
            } else {
                this.posts = data;
            }
        },
        async getUsers(){
            const { data,error } = await this.supabase
                .from('social_network-profile')
                .select("name, user_id");
            if (error) {
                alert(error.message);
            } else {
                console.log(data);
            }
        },
        isMyPost(postOwnerId){
            return this.myID === postOwnerId;

        }
    }
        
    
}
</script>