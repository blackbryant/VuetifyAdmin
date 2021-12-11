<template>
    <nav>
        <v-toolbar flat app>
            <v-toolbar-title>
                <span class="font-weight-lint">todo</span>
                <span>Ninja</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat color="grey">
              <span>sign out</span>
              <v-icon right>Exit to app </v-icon>
            </v-btn>
        </v-toolbar>
        
    </nav>

</template>
<script>
export default {
  name: 'Toolbars',
  props: {
    msg: String
  }
}
</script>