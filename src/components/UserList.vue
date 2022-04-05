<template>
  <div class="container">
    <div class="content">
      <div class="header-logo">
        <img src="../assets/Logo.svg" />
      </div>

      <form @submit="onSubmit" @submit.prevent action="/">
        <h1>Lista de usuários</h1>

        <router-link to="/user-list"
          ><button class="btn-user-list">Cadastrar usuários</button></router-link
        >
      </form>
    </div>
  </div>
</template>

<script>
 
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
