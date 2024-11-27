<template>
    <div>
      <header :class="{ scrolled: isScrolled }" class="header">
        <img src="../assets/logo.svg" class="logo" />
        <nav class="navbar">
          <a href="/">Home</a>
          <a href="/Sobre">About</a>
          <a href="#">Portfolio</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
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
        this.isScrolled = window.scrollY > 50; 
      },
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
  };
  </script>
  
  <style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
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
}

.header.scrolled {
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
}

.logo {
  color: #fff;
  font-size: 25px;
  text-decoration: none;
  font-weight: 600;
}

.navbar {
  display: flex;
  gap: 20px;
}

.navbar a {
  color: white;
  font-size: 18px;
  text-decoration: none;
  transition: color 0.3s;
}

.navbar a:hover {
  color: coral;
}

.content {
  margin-top: 100px;
  padding: 20px;
}
</style>