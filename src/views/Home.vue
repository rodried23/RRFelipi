<template>
  <section class="background-section">
    <div class="form-card">
      <h1>Encontre um lar para chamar de seu</h1>
      <div class="tabs">
        <button :class="{ active: selectedTab === 'alugar' }" @click="selectedTab = 'alugar'">Alugar</button>
        <button :class="{ active: selectedTab === 'comprar' }" @click="selectedTab = 'comprar'">Comprar</button>
      </div>
      <form class="search-form">
        <div class="form-group">
          <input type="text" placeholder="Busque por cidade" v-model="cidade" />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Busque por bairro" v-model="bairro" />
        </div>
        <div class="form-group">
          <select v-model="valor">
            <option value="">Valor total até</option>
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
        <button type="submit" class="btn-search">Buscar imóveis</button>
      </form>
      <div class="owner-section">
        <p>É proprietário?</p>
        <a href="#">Veja os serviços para você</a>
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
};
</script>

<style scoped>
/* Section with background */
.background-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  background: url('../assets/fundoHome.jpg') no-repeat center center/cover;
  border-radius: 12px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Form Card */
.form-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

/* Tabs */
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
  border-radius: 20px;
  background-color: #f5f5f5;
  cursor: pointer;
  font-weight: bold;
  color: #666;
  transition: all 0.3s ease;
}

.tabs button.active {
  background-color: #3b82f6;
  color: #fff;
}

/* Form */
.search-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group input,
.form-group select {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  width: 100%;
}

input:focus,
select:focus {
  border-color: #3b82f6;
  outline: none;
}

/* Button */
.btn-search {
  padding: 10px;
  background-color: #3b82f6;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-search:hover {
  background-color: #2563eb;
}

/* Owner Section */
.owner-section {
  margin-top: 15px;
  text-align: center;
}

.owner-section p {
  font-size: 14px;
  margin-bottom: 5px;
}

.owner-section a {
  color: #3b82f6;
  text-decoration: none;
  font-weight: bold;
}

/* Responsiveness */
@media (max-width: 768px) {
  .form-card {
    margin: 0 auto;
    width: 90%;
  }
  .background-section {
    border-radius: 0;
  }
}
</style>