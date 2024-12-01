<template>
    <div id="homepage">
      <section id="projects" class="projects-section">
        <div class="container">
          <div class="project-card">
            <h2>Estilo e Preço</h2>
            <p>
              Projetos que combinam design e funcionalidade para sua casa ou
              negócio, sempre com atenção aos detalhes.
            </p>
          </div>
          <div class="project-card">
            <h2>Facilidade e Conforto</h2>
            <p>
              Soluções que transformam ideias em realidade com eficiência e
              inovação.
            </p>
          </div>
        </div>
      </section>
  
      <section class="parallax showcase">
        <div class="content">
          <h2>Transforme Sua Visão</h2>
          <p>
            Inspiramos confiança com designs modernos e exclusivos. Seja bem-vindo
            ao futuro da arquitetura.
          </p>
          <button class="cta-button">Explore Mais</button>
        </div>
      </section>
  
      <section class="info-section">
        <div class="container">
          <div class="info-box">
            <h3>Sobre Nossos Projetos</h3>
            <p>
              Oferecemos designs únicos e personalizados para atender suas
              expectativas e estilo de vida.
            </p>
            <button class="info-button">Saiba Mais</button>
          </div>
          <div class="info-box">
            <h3>Por Que Escolher a Gente</h3>
            <p>
              Experiência, dedicação e compromisso em entregar qualidade em cada
              detalhe.
            </p>
            <button class="info-button">Veja Depoimentos</button>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomePage",
  };
  </script>
  
  <style scoped>
  #homepage {
    color: #333;
    overflow-x: hidden;
  }
  
  .projects-section {
    padding: 60px 20px;
    background-color: #f9f9f9;
    text-align: center;
  }
  
  .project-card {
    margin: 20px auto;
    padding: 30px;
    max-width: 400px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .project-card:hover {
    transform: translateY(-10px);
  }
  
  .project-card h2 {
    font-size: 24px;
    color: #333;
    margin-bottom: 15px;
  }
  
  .project-card p {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
  }

  .showcase {
    position: relative;
    height: 500px;
    background-image: url("../assets/Leonardo_Vision_XL_Design_a_captivating_background_image_for_a_0.jpg");
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
  }
  
  .showcase .content {
    background: rgba(0, 0, 0, 0.6);
    padding: 30px;
    border-radius: 15px;
  }
  
  .showcase h2 {
    font-size: 36px;
    margin-bottom: 20px;
  }
  
  .showcase p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  
  .cta-button {
    background-color: #ff7f50;
    border: none;
    padding: 12px 25px;
    color: white;
    border-radius: 25px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
  }
  
  .cta-button:hover {
    background-color: #ff5733;
  }
  
  .info-section {
    display: flex;
    justify-content: space-around;
    padding: 60px 20px;
    background: #fff;
    flex-wrap: wrap;
  }
  
  .info-box {
    max-width: 400px;
    margin: 20px;
    text-align: center;
  }
  
  .info-box h3 {
    font-size: 22px;
    margin-bottom: 15px;
  }
  
  .info-box p {
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 20px;
    color: #555;
  }
  
  .info-button {
    background-color: #333;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .info-button:hover {
    background-color: #555;
  }
  

  @media (max-width: 768px) {
    .info-section {
      flex-direction: column;
      align-items: center;
    }
  
    .showcase {
      height: 400px;
    }
  
    .showcase h2 {
      font-size: 28px;
    }
  }
  </style>