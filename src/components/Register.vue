<template>
  <div class="container">
    <div class="content">
      <div class="header-logo">
        <img src="../assets/Logo.svg" />
      </div>

      <form @submit="onSubmit" @submit.prevent action="/">
        <h1>Formulário de Cadastro de usuário</h1>

        <label>Nome completo:</label>
        <input
          type="text"
          v-model="user.name"
          placeholder="Digite seu nome completo..."
        />
        <label>Email:</label>
        <input
          type="text"
          v-model="user.email"
          placeholder="Informe seu email..."
        />
        <label>Crie sua senha:</label>
        <input
          type="text"
          v-model="user.password"
          placeholder="Informe sua senha..."
        />
        <label>Telefone / Celular:</label>
        <input type="text" v-model="user.phone" placeholder="(12) 99999-9999" />
        <div class="buttons">
          <button class="btn-user-list">Lista de Usuários</button>
          <button class="btn-register">Cadastrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        phone: "",
      },
    };
  },
  methods: {
    onSubmit() {
      const user = {
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
        phone: this.user.phone,
      };

      const oldUsers = JSON.parse(localStorage.getItem("#res_users"));

      if (oldUsers) {
        const newUsers = [...oldUsers, user];

        localStorage.setItem("#res_users", JSON.stringify(newUsers));
        return;
      }

      localStorage.setItem("#res_users", JSON.stringify([user]));
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  max-width: 1280px;
  width: 100%;

  background: #ffffff;
  box-shadow: 0px 4px 50px 5px rgba(0, 0, 0, 0.05);
  border-radius: 16px;

  padding: 4rem;
}

.content form {
  display: flex;
  flex-direction: column;

  width: 100%;
}

.content form h1 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;

  color: #3e85b8;
}

.content form input {
  box-sizing: border-box;

  padding: 16px;
  margin: 8px 0 30px;

  height: 64px;

  background: #f6f6f6;
  border-radius: 16px;

  appearance: none;
  border: none;
}

.content form button {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  color: #ffffff;
  background: #3d6999;

  box-shadow: 2px 4px 8px rgba(132, 159, 191, 0.4);
  border-radius: 8px;
  padding: 14px;

  width: 100%;
  max-width: 300px;
  align-self: center;
  border: none;
}

.content .buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content .buttons button {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;

  width: 280px;
  height: 64px;

  background: #3e85b8;
  border-radius: 16px;
}

.content .buttons .btn-user-list {
  transition: all 0.9s;
  cursor: pointer;
  width: 280px;
  height: 64px;

  border: 1px solid #4b4b4d;
  box-sizing: border-box;
  border-radius: 16px;
  background: transparent;

  color: #4b4b4d;
}

.content .buttons .btn-user-list:hover {
  transition: all 0.9s;
  transform: translateY(-5%);
}

.content .buttons .btn-register:hover {
  cursor: pointer;
  transition: all 0.9s;
  transform: translateY(-5%);
}
</style>
