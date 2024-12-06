<template>
  <div class="cadastro-container"> 

    <div class="content">
      <!-- Coluna da Imagem -->
      <div class="image-section">       
        <img src="../assets/banner.png" alt="Imagem do imóvel" class="banner-img" />  
         <!-- Coluna do Banner -->
      <div class="banner-text">
          <h1>REALIZE O SONHO DO SEU APÊ</h1>
          <p>COM MENSAIS A PARTIR DE R$699</p>
          <p>Apartamento com <b>Varanda Gourmet</b></p>
          <span>ITBI E REGISTRO <b>GRÁTIS</b></span>
        </div>      
      </div>

      

      <!-- Coluna do Formulário -->
      <div class="form-section">
        <h2>QUERO MAIS INFORMAÇÕES SOBRE ESTE IMÓVEL</h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="nome">Nome Completo</label>
            <input
              id="nome"
              v-model="form.nome"
              type="text"
              placeholder="Seu nome completo"
              required
            />
          </div>

          <div class="form-group">
            <label for="email">E-mail</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="Seu e-mail de contato"
              required
            />
          </div>

          <div class="form-group">
            <label for="telefone">Telefone</label>
            <input
              id="telefone"
              v-model="form.telefone"
              type="text"
              placeholder="(DDD)99999-0000"
              required
            />
          </div>

          <button type="submit" class="btn-enviar">Enviar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        nome: "",
        email: "",
        telefone: "",
      },
      apiEndpoint: "https://localhost:7183/api/Clientes", // Ajuste para sua API
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post(this.apiEndpoint, this.form);

        if (response.status === 200) {
          alert(`Usuário ${this.form.nome} cadastrado com sucesso!`);
          // Limpar formulário
          this.form = {
            nome: "",
            email: "",
            telefone: "",
          };
        }
      } catch (error) {
        console.error("Erro ao enviar o formulário:", error);
        alert("Erro ao cadastrar usuário. Tente novamente.");
      }
    },
  },
};
</script>

<style scoped>
/* Estilos gerais */
.cadastro-container {
  width: 100%;
  margin: 0 auto;
  margin-top: 2.55%;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Para centralizar verticalmente */
  background-color: #f9f9f9;
}

/* Conteúdo principal */
.content {
  display: flex; /* Flexbox para alinhar as colunas */
  justify-content: space-between; /* Espaço entre as colunas */
  align-items: center;
  width: 90%; /* Reduzir largura para dar espaçamento nas laterais */
  max-width: 1200px; /* Limita a largura máxima */
  gap: 20px; /* Espaçamento entre a imagem e o formulário */
}

/* Coluna da imagem */
.image-section {
  flex: 1; /* Faz a coluna ocupar o espaço restante */
  display: z;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.banner-img {
  width: 100%; /* Imagem ocupa toda a largura disponível */
  max-width: 500px; /* Limite da largura máxima */
  height: auto;
  border-radius: 10px;
}

.banner-text {
  position: absolute;
  top: 50%; /* Centraliza verticalmente */
  right: 10px; /* Ajusta o alinhamento para a direita */
  transform: translateY(-50%); /* Centraliza o texto em relação ao eixo Y */
  background: rgba(0, 0, 0, 0.6); /* Fundo semi-transparente */
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px; /* Define largura fixa */
  text-align: center;
}

/* Coluna do formulário */
.form-section {
  flex: 1; /* Faz a coluna ocupar o espaço restante */
  max-width: 400px; /* Limita a largura máxima */
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.form-section h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

.btn-enviar {
  width: 100%;
  padding: 10px;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
}

.btn-enviar:hover {
  background-color: darkorange;
}

</style>
