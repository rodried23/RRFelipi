<template>
  <div>
    <header :class="{ scrolled: isScrolled }" class="header">
      <!-- SVG Logo -->
      <img v-if="isScrolled"
    src="../assets/logo.svg" 
    class="logo" 
    alt="Logo" 
  />
  <img v-if="!isScrolled"
    src="../assets/logo1.svg" 
    class="logo" 
    alt="Logo" 
  />
      <nav class="navbar">
        <a href="/Sobre">About</a>
        <a href="/Cadastro" class="login">Entrar</a>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
    };
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50; // Change state when scrolled 50px
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
/* General Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

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
  will-change: transform; /* Improve performance */
  transform: translateY(0);
}

.header.scrolled {
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  transform: translateY(-10px); /* Slight parallax effect */
}

.header.scrolled .navbar a {
  color: white; /* Define a cor dos links como branca quando o cabeçalho estiver na classe "scrolled" */
}


.logo {
  width: 150px;
  transition: fill 0.3s ease;
}

.navbar {
  display: flex;
  gap: 20px;
}

.navbar a {
  color: black;
  font-size: 18px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.navbar a:hover {
  color: coral;
}

/* Adjust content margin to avoid overlap with header */
.content {
  margin-top: 100px;
  padding: 20px;
}
</style>