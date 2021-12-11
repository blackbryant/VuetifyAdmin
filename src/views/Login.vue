<template>
<v-container fluid>
     <form>
     <v-alert color="red" type="error" v-text="errorMsg"  v-show ="errorMsg"></v-alert>
     
    <v-card  class="mx-auto my-12" max-width="500" :loading="loading">
        <template slot="progress">
        <v-progress-linear
            color="blue darken-1"
            height="10"
            indeterminate >
            </v-progress-linear>
        </template>
        
       
        <v-card-title>登入畫面</v-card-title>
        <v-img
        style="margin-bottom:20px;"
        height="150"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>
        <v-card-text>
        <v-row align="center" class="mx-0">
            
                <v-text-field v-model="account" label="帳號" outlined ></v-text-field>
             
        </v-row>
         <v-row align="center" class="mx-0">
           
                <v-text-field v-model="password" label="密碼" outlined ></v-text-field>
           
        </v-row>
        </v-card-text>
        <v-card-actions>
        <v-btn
            color="blue darken-1 text-h4"
            text
            @click="login">

            登入
        </v-btn>
        </v-card-actions>
    </v-card>    
     </form>
</v-container>

</template>

<script>

import store from '../store'
export default {
    name:"LoginView",
    data:()=>({
        loading:false,
        errorMsg:"",
        account:"",
        password:""
    }),
    methods:{
        login(){
            this.loading = true
            setTimeout(() => (this.loading = false), 2000)

            if(this.account=='abc' && this.password=='123456')
            {
                //setStore();
    store.commit({
        type: 'setUserData',
        userData: this.user,
      });
                //store.setItem('token',"passed");
                 this.$router.push('/main'); 
            }else
            {
                this.errorMsg='Invalid account or password' ;
                setTimeout(() => (this.errorMsg=""), 2000)
                
            }
            
            
        },

    }

    

}
function setStore(){
    console.log('aaaa');
         this.$store.commit({
        type: 'setUserData',
        userData: this.account,
      });
    }
</script>