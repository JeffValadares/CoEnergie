<script setup>  
  const supabase = useSupabaseClient();
  const pending = ref(false);
  const msg = reactive({
    type: null,
    text: null
  });
  const formData = reactive({
    cnpj: null,
    name: null,
    email: null,
    phones: null,
    address: null
  });

  const addProvider = async () => {
    pending.value = true;
    try {
      if(!formData.name) {
        msg.type = 'error';
        msg.text = 'O campo Razão Social é obrigatório';
        return;
      }
      let res = await supabase.from('providers').insert(formData);
      if (res.error) throw res.error;
      useRouter().push('/fornecedores');
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
    <h2 class="text-h4 mb-5">Novo Fornecedor</h2>
    <v-form>
      <v-text-field label="CNPJ" v-model="formData.cnpj"/>
      <v-text-field label="Razão Social" v-model="formData.name" required/>
      <v-text-field label="Telefone" v-model="formData.phones"/>
      <v-text-field label="E-mail" v-model="formData.email"/>
      <v-text-field label="Endereço" v-model="formData.address"/>
      <v-btn v-if="pending" color="primary" style="width: 100px"><v-progress-circular color="blue" indeterminate></v-progress-circular></v-btn>
      <v-btn v-else color="primary" style="width: 100px" @click="addProvider">Salvar</v-btn>
    </v-form>
  </v-container>
  <v-snackbar v-model="msg.type" :timeout="3000" :color="msg.type">{{msg.text}}</v-snackbar>
</template>