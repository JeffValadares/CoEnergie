<script setup>
  const supabase = useSupabaseClient();
  const msg = reactive({
    type: null,
    text: null
  });

  const { data: products } = await useAsyncData('ads', async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('id, name, unity, default_qty')
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
    <h2>Produtos</h2>
  </v-container>
  <v-table fixed-header>
    <thead>
      <tr><th>#</th><th>Nome</th><th>Último Preço</th><th>Fornecedor</th><th>Última Compra</th><th>Unidade</th><th>Quantidade padrão</th></tr>
    </thead>
    <tbody>
      <tr v-for="(product, i) in products" :key="product.id">
        <td>{{i}}</td><td>{{product.name}}</td><td>-</td><td>-</td><td>-</td><td>{{product.unity}}</td><td>{{product.default_qty}}</td>
      </tr>
    </tbody>
  </v-table>
  <v-container>
    <v-btn prepend-icon="mdi-plus" color="primary" position="fixed" to="/produtos/add">Novo Produto</v-btn>
  </v-container>
  <v-snackbar v-model="msg.type" :timeout="3000" :color="msg.type">{{msg.text}}</v-snackbar>
</template>