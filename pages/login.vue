<script setup>
  const supabase = useSupabaseAuthClient();
  const user = useSupabaseUser();
  const router = useRouter();
  const pending = ref(false);
  const formData = reactive({ email: null, password: null });
  const msg = reactive({ type: null, text: null });

  watch(user, () => {
    if(user.value) router.push('/produtos');
  });

  const login = async () => {
    try {
      pending.value = true;
      const { data: response, error } = await supabase.auth.signInWithPassword(formData);
      if (error) throw error;
      const accessToken = useCookie('sb-access-token');
      const refreshToken = useCookie('sb-refresh-token');
      accessToken.value = response.session?.access_token ?? null;
      refreshToken.value = response.session?.refresh_token ?? null;
      msg.type = 'success';
      msg.text = 'Login bem sucedido';
      router.push('/produtos');
    } catch(error) {
      msg.type = 'error';
      msg.text = error.message;
    } finally {
      pending.value = false;
    }
  }

  const signUp = async () => {
    try {
      pending.value = true;
      const { error } = await supabase.auth.signUp(formData);
      if (error) throw error;
      msg.type = 'success';
      msg.text = 'Usuário cadastrado com sucesso';
    } catch {
      msg.type = 'error';
      msg.text = error.message;
    } finally {
      pending.value = false;
    }
  }
</script>

<template>
  <v-container class="pa-10">
    <v-card class="pa-5">
      <h2 class="text-h4 mb-5">User Login</h2>
      <v-form>
        <v-text-field type="email" label="E-mail" v-model="formData.email"></v-text-field>
        <v-text-field type="password" label="Senha" v-model="formData.password"></v-text-field>
        <v-btn v-if="pending" color="primary" style="width: 100px"><v-progress-circular color="blue" indeterminate></v-progress-circular></v-btn>
        <v-btn v-else color="primary" style="width: 100px" @click="login">Entrar</v-btn>
      </v-form>
    </v-card>
  </v-container>
  <v-snackbar v-model="msg.type" timeout="3000" :color="msg.type">{{msg.text}}</v-snackbar>
</template>