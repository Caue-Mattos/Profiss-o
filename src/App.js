
import './App.css';
import logo from './logo.svg';
import img1 from './img/prog1.png'
import img2 from './img/prog2.webp'
import img3 from './img/prog3.jpg'
import img4 from './img/prog4.jpg'

function App() {
  return (
    <div id='root'>
      <div id='app'>
        <header class="header-pag">
          <h1>Profissão:Programador</h1>
          <nav class="app-header">
                <a href='#introduction'>Introdução</a>
                <a href='#skills'>Habilidades</a>
                <a href='#oportunities'>Oportunidades</a>
                <a href='#tools'>Ferramentas Utilizadas</a>
          </nav>
        </header>
        <main>
          <section id="introduction" class="visel">
            <div class="content">
              <div class="image">
                <img src={img1}></img>
              </div>
              <div class="text">
                <h2>Introdução</h2>
                <p>O programador escreve códigos simples e complexos por meio de linguagens de programação como HTML, Javascript, Python ou C++. Tudo isso acontece com o objetivo de corrigir possíveis erros, desenvolver soluções para problemas, criar comandos e novas funcionalidades para softwares, programas e sistemas.</p>
              </div>
            </div>
          </section>

          <section id="skills" class="visivel">
            <div class="content">
              <div class="image">
                <img src={img2}></img>
              </div>
              <div class="text">
                <h2>Habilidades necessarias</h2>
                <p>Dominar linguagens de programação é fundamental para qualquer desenvolvedor de sistemas. A proficiência em Python, Java, JavaScript, React, Angular e abre portas e define a capacidade de criar soluções inovadoras</p>
              </div>
            </div>
          </section>

          <section id="oportunities" class=" visivel">
            <div class="content">
              <div class="image">
                <img src={img3}></img>
              </div>
              <div class="text">
                <h2>Oportunidades de carreira</h2>
                <p class="paragrafo">Empresas de TI.</p>
                <p class="paragrafo">Trabalho Freelancer.</p>
                <p class="paragrafo">Departamentos de Tecnologia Internos.</p>
                <p class="paragrafo">Desenvolvimento Front-end.</p>
                <p class="paragrafo">Desenvolvimento Back-end.</p>
                <p class="paragrafo">Desenvolvimento Full-stack.</p>
                <p class="paragrafo">Desenvolvimento Mobile.</p>
              </div>
            </div>
          </section>

          <section id="tools" class=" visivel">
            <div class="content">
              <div class="image">
                <img src={img4}></img>
              </div>
              <div class="text">
                <h2>Ferramenta e Tecnologia Utilizadas</h2>
                <p>O programador escreve códigos simples e complexos por meio de linguagens de programação como HTML, Javascript, Python ou C++. Tudo isso acontece com o objetivo de corrigir possíveis erros, desenvolver soluções para problemas, criar comandos e novas funcionalidades para softwares, programas e sistemas.</p>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

export default App;
