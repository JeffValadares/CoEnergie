<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-card>
        <v-list
          :items="items"
          item-title="name"
          item-value="id"
        ></v-list>
      </v-card>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>💩CoEnergie</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [
        {
          name: 'Produtos',
          id: 1,
        },
        {
          name: 'Fornecedores',
          id: 2,
        },
      ]
    }),
  }
</script>