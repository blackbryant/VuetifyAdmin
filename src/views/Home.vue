<template>
  <div class="home">
    <h1>HomePage</h1>
     

    <p class="red lighten-4 blue--text text--darken-4 ">dsdf  </p>
    <p class="red lighten-4 blue--text text--lighten-1 ">dsdf  </p>

    <!-- v-btn -->
    <v-btn class="hidden-md-and-down" > Click Me Down</v-btn>
    <v-btn class="hidden-md-and-up" > Click Me Up</v-btn>

    <v-btn class="pink white--text"> click Me (white--text)</v-btn>
    <v-btn depressed  class="pink"> click Me (depressed)</v-btn>
    <v-btn flat  class="pink"> click Me (flat)</v-btn>  
    <v-btn depressed class="pink white--text">
      <v-icon>email</v-icon>
      <span> email Me</span>
    </v-btn>

    <v-btn small depressed class="pink white--text">
      <v-icon>email</v-icon>
      <span> email Me</span>
    </v-btn>

    <v-btn large depressed class="pink white--text">
      
      <span> email Me</span>
      <v-icon right>email</v-icon>
    </v-btn>

    <v-btn class="ma-2" color="primary" >
        Accept
        <v-icon  right>
          marked-circle
        </v-icon>
      </v-btn>
    
    

  </div>
</template>

<script>
  
//import HelloWorld from '../components/HelloWorld'
//import Toolbars from '../components/Toolbars'

export default {
  name: 'Home',
  components: {
  //  Toolbars, 
  //  HelloWorld
     
  }
}
</script>
