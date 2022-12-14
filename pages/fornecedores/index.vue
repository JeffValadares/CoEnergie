<template>
  <v-container>
    <h2>Fornecedores</h2>
  </v-container>
  <v-table fixed-header>
    <thead>
      <tr><th>#</th><th>CNPJ</th><th>Razão Social</th><th>Telefone</th><th>e-mail</th><th>Endereço</th></tr>
    </thead>
    <tbody></tbody>
  </v-table>
  <v-container>
    <v-btn prepend-icon="mdi-plus" color="primary" position="fixed" to="/fornecedores/add">Novo Fornecedor</v-btn>
  </v-container>
</template>