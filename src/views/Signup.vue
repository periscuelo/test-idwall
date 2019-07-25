<template>
  <div class="home">
    <vs-row>
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="12">
        <vs-collapse accordion >
          <vs-collapse-item>
            <div slot="header">
              THE <strong>IDDOG</strong>
            </div>
            <div>
              <vs-input
                label-placeholder="your email"
                v-model="email"
                @keyup.enter="login"
              />
            </div>
          </vs-collapse-item>
        </vs-collapse>
      </vs-col>
    </vs-row>
    <vs-row v-if="msg">
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-offset="4"
        vs-w="4">
        <vs-alert
          title="Erro de autenticação"
          active="true"
          color="danger">
          {{ msg }}
        </vs-alert>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import LoginService from '@/services/login';

export default {
  data: () => ({
    email: '',
    msg: '',
  }),
  methods: {
    login() {
      try {
        const login = LoginService.login(this.email);
        login.then(() => {
          this.$router.push('feed');
        });
      } catch (error) {
        this.msg = 'E-mail inválido!';
        console.log(error);
      }
    },
  },
};
</script>
