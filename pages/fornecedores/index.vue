<script setup>
  const supabase = useSupabaseClient();
  const msg = reactive({
    type: null,
    text: null
  });

  const { data: providers } = await useAsyncData('ads', async () => {
    try {
      const { data, error } = await supabase
        .from('providers')
        .select('id, cnpj, name, phones, email, address')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data;
    } catch (error) {
      msg.type = 'error';
      msg.text = error.message;
    }
  });
</script>

<template>
  <v-container>
    <h2>Fornecedores</h2>
  </v-container>
  <v-table fixed-header>
    <thead>
      <tr><th>#</th><th>CNPJ</th><th>Razão Social</th><th>Telefone</th><th>e-mail</th><th>Endereço</th></tr>
    </thead>
    <tbody>
      <tr v-for="(provider, i) in providers" :key="provider.id">
        <td>{{i}}</td><td>{{provider.cnpj}}</td><td>{{provider.name}}</td><td>{{provider.phones}}</td><td>{{provider.email}}</td><td>{{provider.address}}</td>
      </tr>
    </tbody>
  </v-table>
  <v-container>
    <v-btn prepend-icon="mdi-plus" color="primary" position="fixed" to="/fornecedores/add">Novo Fornecedor</v-btn>
  </v-container>
  <v-snackbar v-model="msg.type" :timeout="3000" :color="msg.type">{{msg.text}}</v-snackbar>
</template>