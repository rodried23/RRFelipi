<template>
    <div class="glass">

        <img src="../assets/logo.svg" class="logo" />
        <nav class="navbar">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Portfolio</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </nav>
    </div>

</template>

<script>
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    min-height: 100vh;
    /* background: url('../assets/imob.jpg') no-repeat center center; */
    background-size: cover;
    background-position: center;
    background-color: #fff;
}

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 50px; /* Diminui o padding para melhorar a responsividade */
    display: flex;
    justify-content: space-between; /* Logo para esquerda e menu para direita */
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
}

.header::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, .4), transparent);
    transition: .5s;
}

.header:hover::before {
    left: 100%;
}

.logo {
    color: #fff;
    font-size: 25px;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
    /* background-image: url("../assets/logo.svg"); */
}

.navbar {
    display: flex;
    margin-right: 100px;
    justify-content: right; /* Centraliza os itens no container */
    align-items: center;
    gap: 20px; /* Espaçamento entre os itens */
}

.navbar a {
    color: black;
    font-size: 30px;
    text-decoration: none;
    margin: 0; /* Remova margens para melhor controle com gap */
    transition: 0.3s;
}

.navbar a:hover {
    color: coral;
}

.glass {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 0px;
    border: 0px solid rgba(255, 255, 255, 0.688);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}
</style>