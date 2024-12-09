<template>
  <div :class="{ scrolled: isScrolled }" class="header">
    <a v-if="isScrolled" href="/home">
      <img src="../assets/logo.svg" class="logo" alt="Logo" />
    </a>
    <a v-if="!isScrolled" href="/home">
      <img src="../assets/logo1.svg" class="logo" alt="Logo" />
    </a>
    <nav class="navbar">
      <a href="/Sobre">Sobre</a>
      <div 
        class="dropdown" 
        @mouseover="toggleDropdown(true)" 
        @mouseleave="toggleDropdown(false)"
      >
        <a href="javascript:void(0)" class="login">
          Entrar
        </a>
        <div v-if="dropdownOpen" class="dropdown-menu">
          <a href="/cadastro">Entrar</a>
          <a href="/cadastro">Cadastrar</a>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isScrolled: false,
      dropdownOpen: false
    };
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    // Agora recebe um parâmetro para indicar se o mouse está dentro ou não
    toggleDropdown(state) {
      this.dropdownOpen = state;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>



<style scoped>
body {
  background-color: #020202cc;
  color: #fff;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  z-index: 1000;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.header.scrolled {
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
}

.logo {
  width: 150px;
  transition: fill 0.3s ease;
}

.navbar {
  display: flex;
  gap: 20px;
  margin-right: 8vh;
}

.navbar a {
  color: black;
  font-size: 18px;
  text-decoration: none;
}

.navbar a:hover {
  color: coral;
}

.dropdown {
  position: relative;
}

.dropdown-menu {
  display: flex;
  flex-direction: column;
  position: absolute;
  background: rgb(182, 162, 236);
  color: black;
  min-width: 200px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.dropdown-menu a {
  padding: 10px;
  text-decoration: none;
  color: black;
}

.dropdown-menu a:hover {
  background-color: #f0f0f0;
}
</style>


