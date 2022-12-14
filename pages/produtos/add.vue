<template>
  <v-container class="pa-10">
    <h2 class="text-h4 mb-5">Novo Produto</h2>
    <v-form>
      <v-text-field label="Nome"/>
      <v-select label="Unidade" :items="['kg','l']" ></v-select>
      <v-text-field type="number" label="Quantidade padrão"></v-text-field>
      <v-btn color="primary">Salvar</v-btn>
    </v-form>
  </v-container>
</template>