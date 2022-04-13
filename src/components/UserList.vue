<template>
  <div class="container">
    <div class="content">
      <div class="header-logo">
        <img src="../assets/Logo.svg" />
      </div>

      <form>
        <h1>Lista de usuários</h1>
        <table>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr v-for="user in users" :key="user.email">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
          </tr>
        </table>
        <router-link to="/"
          ><button class="btn-form">Formulário</button></router-link
        >
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const response = await axios.get("https://localhost:8080/users");
const users = response.data;

export default {
  data() {
    return {
      users,
    };
  },
  methods: {
    async getUsers() {},
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

.content form table {
  margin-bottom: 6.8rem;
}

.content form table tr th {
  text-align: left;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #cecece;
}

.content form table tr td {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #4b4b4d;
}

.content .buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content .btn-form {
  transition: all 0.9s;
  cursor: pointer;
  width: 280px;
  height: 64px;

  border: 1px solid #4b4b4d;
  box-sizing: border-box;
  border-radius: 16px;
  background: transparent !important;

  color: #4b4b4d;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  text-align: center;

  color: #4b4b4d;
}

.content .btn-form:hover {
  transition: all 0.9s;
  transform: translateY(-5%);
}
</style>
