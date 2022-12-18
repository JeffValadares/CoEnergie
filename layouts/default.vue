<template>
  <v-app id="inspire">
    <NuxtLoadingIndicator />
    <v-navigation-drawer v-model="drawer">
      <v-card>
        <div class="mx-auto py-3 text-center">
          <nuxt-link to="/">
            <img src="~/assets/logo.jpg" class="w-100 px-3" alt="Logo"/>
          </nuxt-link>
        </div>
        <v-divider></v-divider>
        <v-list nav>
          <v-list-item link to="/produtos">Produtos</v-list-item>
          <v-list-item link to="/fornecedores">Fornecedores</v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>CoEnergie</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup>
  const drawer = ref(null);
</script>