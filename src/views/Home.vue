<template>
  <section class="background-section">
  <div class="form-wrapper">
    <div class="form-card">
      <h1>Encontre um lar para chamar de seu</h1>
      <div class="tabs">
        <button :class="{ active: selectedTab === 'alugar' }" @click="selectedTab = 'alugar'">Alugar</button>
        <button :class="{ active: selectedTab === 'comprar' }" @click="selectedTab = 'comprar'">Comprar</button>
      </div>
      <form class="search-form" @submit.prevent="validarFormulario">
        <div class="form-group">
          <input type="text" placeholder="Busque por cidade" v-model="cidade" />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Busque por bairro" v-model="bairro" />
        </div>
        <div class="form-row">
          <div class="form-group">
            <select v-model="valor">
              <option value="">Escolha o valor</option>
              <option value="1000">R$ 1.000</option>
              <option value="2000">R$ 2.000</option>
              <option value="5000">R$ 5.000</option>
            </select>
          </div>
          <div class="form-group">
            <select v-model="quartos">
              <option value="">Nº de quartos</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <button type="submit" class="btn-search">Buscar imóveis</button>
      </form>
      <div class="owner-section">
        <p>É proprietário?</p>
        <a href="#">Veja os serviços para você</a>
      </div>
    </div>
    <div class="image-container">
      <img src="../assets/fundoHome.jpg" alt="Pessoa usando celular" />
    </div>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: 'alugar',
      cidade: '',
      bairro: '',
      valor: '',
      quartos: '',
    };
  },
  methods: {
    validarFormulario() {
      if (!this.cidade || !this.bairro) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
      }
      alert("Formulário enviado!");
      return true;
    },
  },
};
</script>

<style scoped>
.background-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  background-color: #f9f9f9;
}

.form-wrapper {
  display: flex;
  gap: 20px;
  align-items: center;
  max-width: 1200px;
  width: 100%;
}

.form-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 30px 20px;
  max-width: 400px;
  flex: 1;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
}

h1 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #111827;
}

.tabs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.tabs button {
  flex: 1;
  padding: 10px;
  margin: 0 5px;
  border: none;
  border-radius: 12px;
  background-color: #f3f4f6;
  color: #4b5563;
  font-weight: bold;
  transition: all 0.3s ease;
}

.tabs button.active {
  background-color: #2563eb;
  color: white;
}

.search-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
  margin-left: 0.3vh;
}

.form-row {
  display: flex;
  gap: 15px;
}

.btn-search {
  width: 100%;
  padding: 10px;
  background-color: #2563eb;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.btn-search:hover {
  background-color: #1e40af;
}

.owner-section {
  margin-top: 20px;
  text-align: center;
}

.owner-section a {
  color: #2563eb;
  text-decoration: none;
  font-weight: bold;
}

@media (max-width: 768px) {
  .form-wrapper {
    flex-direction: column;
    align-items: stretch;
  }

  .form-card,
  .image-container {
    max-width: 100%;
  }

  .image-container img {
    display: none;
  }
}
</style>