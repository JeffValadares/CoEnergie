<script setup>
  definePageMeta({ middleware: 'auth' });
  
  const supabase = useSupabaseClient();
  const pending = ref(false);
  const msg = reactive({
    type: null,
    text: null
  });
  const formData = reactive({
    name: null,
    unity: null,
    default_qty: null
  });

  const addProduct = async () => {
    pending.value = true;
    try {
      if(!formData.name || !formData.unity || !formData.default_qty) {
        msg.type = 'error';
        msg.text = 'Todos os campos são obrigatórios';
        return;
      }
      let res = await supabase.from('products').insert(formData);
      if (res.error) throw res.error;
      useRouter().push('/produtos');
    } catch(error) {
      msg.type = 'error';
      msg.text = error.message;
    } finally {
      pending.value = false;
    }
  }
</script>

<template>
  <v-container class="pa-10">
    <h2 class="text-h4 mb-5">Novo Produto</h2>
    <v-form>
      <v-text-field label="Nome" v-model="formData.name" required/>
      <v-select label="Unidade" :items="['kg','l']" v-model="formData.unity" required></v-select>
      <v-text-field type="number" label="Quantidade padrão" v-model="formData.default_qty" required></v-text-field>
      <v-btn v-if="pending" color="primary" style="width: 100px"><v-progress-circular color="blue" indeterminate></v-progress-circular></v-btn>
      <v-btn v-else color="primary" style="width: 100px" @click="addProduct">Salvar</v-btn>
    </v-form>
  </v-container>
  <v-snackbar v-model="msg.type" :timeout="3000" :color="msg.type">{{msg.text}}</v-snackbar>
</template>