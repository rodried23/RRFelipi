<template>
  <div class="cadastro">
    <h1>{{ isLogin ? "Login" : "Cadastro de Usuário" }}</h1>

    <form @submit.prevent="handleSubmit">
      <!-- Formulário de Login -->
      <div v-if="isLogin">
        <div class="form-group">
          <label for="login">Login</label>
          <input type="text" id="login" v-model="form.login" placeholder="Digite seu login" required />
        </div>
        <div class="form-group">
          <label for="senha">Senha</label>
          <input type="password" id="senha" v-model="form.senha" placeholder="Digite sua senha" required />
        </div>
      </div>

      <!-- Formulário de Cadastro -->
      <div v-if="!isLogin">
        <div class="form-group">
          <label for="nome">Nome</label>
          <input type="text" id="nome" v-model="form.nome" placeholder="Digite seu nome" required />
        </div>

        <div class="form-group">
          <label for="email">E-mail</label>
          <input type="email" id="email" v-model="form.email" placeholder="Digite seu e-mail" required />
        </div>

        <div class="form-group">
          <label for="telefone">Telefone</label>
          <input type="tel" id="telefone" v-model="form.telefone" placeholder="Digite seu telefone" required />
        </div>

        <div class="form-group">
          <label for="dataNascimento">Data de Nascimento</label>
          <input type="date" id="dataNascimento" v-model="form.dataNascimento" placeholder="Selecione a data de nascimento" required />
        </div>

        <div class="form-group">
          <label for="login">Login</label>
          <input type="text" id="login" v-model="form.login" placeholder="Digite seu login" required />
        </div>

        <div class="form-group">
          <label for="senha">Senha</label>
          <input type="password" id="senha" v-model="form.senha" placeholder="Digite sua senha" required />
        </div>
      </div>

      <button type="submit">{{ isLogin ? "Entrar" : "Cadastrar" }}</button>
    </form>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      isLogin: false, // Define o estado inicial para exibir o cadastro
      form: {
        nome: "",
        email: "",
        telefone: "",
        dataNascimento: "",
        login: "",
        senha: "",
      },
      apiEndpoint: "https://localhost:7183/api/Clientes", // URL da API
    };
  },

  methods: {
    async handleSubmit() {
      try {
        // Se for login, chama o endpoint de login
        if (this.isLogin) {
          const response = await axios.post(`${this.apiEndpoint}/login`, this.form);
          console.log("Resposta do login:", response.data);
          alert("Login realizado com sucesso!");
        } else {
          // Se for cadastro, chama o endpoint de cadastro
          const response = await axios.post(this.apiEndpoint, this.form);
          if (response.status === 200 || response.status === 201) {
            alert(`Usuário ${this.form.nome} cadastrado com sucesso!`);
            console.log("Resposta do Servidor:", response.data);
            this.form = { nome: "", email: "", telefone: "", dataNascimento: "", login: "", senha: "" };
          }
        }
      } catch (error) {
        console.error("Erro ao cadastrar/login usuário:", error);
        alert("Erro ao realizar a ação. Tente novamente mais tarde.");
      }
    },

    // Método para alternar entre os formulários
    switchToLogin() {
      this.isLogin = true;  // Ativa o formulário de login
    },

    switchToCadastro() {
      this.isLogin = false;  // Ativa o formulário de cadastro
    },
  },
};
</script>



<style scoped>
body {
  font-family: "Poppins", sans-serif;
  margin: 0;
  height: 76vh;
  display: flex;
  justify-content: center; 
  align-items: center; 
  background-color: #f3f4f6; 
}

.cadastro {
  background: #ffffff; 
  padding: 20px; 
  border-radius: 8px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  max-width: 400px; 
  width: 100%;
}
h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 95%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>