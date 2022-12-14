<template>
  <v-container>
    <h2>Produtos</h2>
  </v-container>
  <v-table fixed-header>
    <thead>
      <tr><th>#</th><th>Nome</th><th>Último Preço</th><th>Fornecedor</th><th>Última Compra</th><th>Unidade</th><th>Quantidade padrão</th></tr>
    </thead>
    <tbody></tbody>
  </v-table>
  <v-container>
    <v-btn prepend-icon="mdi-plus" color="primary" position="fixed" to="/produtos/add">Novo Produto</v-btn>
  </v-container>
</template>