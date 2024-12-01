<template>
    <div class="cadastro">
      <h1>Cadastro de Usuário</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="nome">Nome</label>
          <input
            type="text"
            id="nome"
            v-model="form.nome"
            placeholder="Digite seu nome"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="email">E-mail</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            placeholder="Digite seu e-mail"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="senha">Senha</label>
          <input
            type="password"
            id="senha"
            v-model="form.senha"
            placeholder="Digite sua senha"
            required
          />
        </div>
  
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          nome: '',
          email: '',
          senha: ''
        }
      };
    },
    methods: {
      handleSubmit() {
        // Aqui você pode adicionar a lógica para enviar os dados para a API
        alert(`Usuário ${this.form.nome} cadastrado com sucesso!`);
        console.log('Dados do Formulário:', this.form);
      }
    }
  };
  </script>
  
  <style scoped>
  .cadastro {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
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
    width: 100%;
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
  