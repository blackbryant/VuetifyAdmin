<template>
<v-app>
   <v-content>
      <router-view></router-view>
   </v-content>
</v-app>
</template>


<style>
 

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
