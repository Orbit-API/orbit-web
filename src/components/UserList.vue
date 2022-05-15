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
          <tr v-for="user in users.content" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
          </tr>
        </table>
        <router-link to="/"
          ><button class="btn-form">Formulário</button></router-link
        >
      </form>
      <div class="pagination">
        <button @click="clickPrev(users.number)">Retornar</button>
        <paginate
          :pageCount="users.totalPages + 1"
          :containerClass="'paginate'"
          :prev-text="''"
          :next-text="''"
        >
        </paginate>
        <button @click="clickNext(users.number)">Avançar</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

let users = [];

export default {
  data() {
    return {
      users: this.users,
    };
  },

  methods: {
    clickNext: async function (pageNum) {
      const actualPage = pageNum + 1;
      const response = await axios.get(
        `http://localhost:8080/users?size=10&page=${actualPage}`
      );

      this.users = response.data;
    },

    clickPrev: async function (pageNum) {
      const actualPage = pageNum - 1;
      const response = await axios.get(
        `http://localhost:8080/users?size=10&page=${actualPage}`
      );

      this.users = response.data;
    },
  },

  async mounted() {
    const response = await axios.get(
      "http://localhost:8080/users?size=10&page=1"
    );
    this.users = response.data;


    return users;
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
  justify-content: space-between;

  max-width: 1280px;
  width: 100%;
  height: 660px;

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
  margin-bottom: 64px;
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

.content .pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-top: 32px;
}

.content .pagination button {
  width: 160px;
  height: 32px;

  border: 1px solid #4b4b4d;
  border-radius: 8px;

  appearance: none;
  background-color: transparent;

  cursor: pointer;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}

.content .paginate {
  display: flex;
  align-items: center;
  justify-content: center;

  appearance: none;
  width: 100%;

  gap: 32px;
  list-style-type: none;
}

.content .paginate ul {
  width: 100%;
  margin-right: 10px;
  list-style-type: none !important;
  margin: 0;
  padding: 0;

  cursor: not-allowed;
}

.content .paginate ul li {
  list-style-type: none !important;
  margin: 0;
  padding: 0;
  width: 100%;
  margin-right: 10px;

  cursor: not-allowed !important;

}

ul.paginate  {
  cursor: not-allowed !important;
  padding: 0;
}

ul.paginate li {
  color: red;
  padding: 0;
}

.content .paginate ul li a {
  cursor: not-allowed;
}
</style>
