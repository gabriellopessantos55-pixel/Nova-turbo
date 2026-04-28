export default function App() {

  const services = [
    { title: 'Turbinas', desc: 'Venda e recondicionamento.', icon: '⚙️' },
    { title: 'Direção Hidráulica', desc: 'Reparo completo.', icon: '🚗' },
    { title: 'Freios', desc: 'Sistema completo.', icon: '🛑' },
    { title: 'Embreagem', desc: 'Troca e manutenção.', icon: '🔧' }
  ]

  const produtos = [
    'Turbinas', 'Kit Embreagem', 'Caixa de Direção',
    'Bomba Hidráulica', 'Freios', 'Cardans', 'Compressor'
  ]

  const whatsapp = "https://wa.me/5521970422836"

  return (
    <div style={{ fontFamily: 'Arial', background: '#0a0a0a', color: 'white', scrollBehavior: 'smooth' }}>

      {/* NAVBAR */}
      <nav style={nav}>
        <h2 style={{ color: 'orange' }}>NOVA TURBO</h2>
        <div style={menu}>
          <a href="#inicio">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#produtos">Produtos</a>
          <a href="#contato">Contato</a>
        </div>
        <a href={whatsapp} target="_blank">
          <button style={btn}>Orçamento</button>
        </a>
      </nav>

      {/* HERO */}
      <section id="inicio" style={hero}>
        <div>
          <span style={badge}>Especialistas em turbinas</span>

          <h1 style={title}>
            Potência, confiança e manutenção para o seu veículo.
          </h1>

          <p style={{ maxWidth: '500px', opacity: 0.8 }}>
            Trabalhamos com turbinas novas, recondicionadas e serviços completos.
          </p>

          <div style={{ marginTop: '20px' }}>
            <a href={whatsapp} target="_blank">
              <button style={btn}>Fale no WhatsApp</button>
            </a>
            <a href="#servicos">
              <button style={btn2}>Ver Serviços</button>
            </a>
          </div>
        </div>
      </section>

      {/* INFO */}
      <section style={info}>
        <div style={cardInfo}><h2>15+</h2><p>Anos</p></div>
        <div style={cardInfo}><h2>100%</h2><p>Testado</p></div>
        <div style={cardInfo}><h2>24h</h2><p>Resposta</p></div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" style={section}>
        <h2 style={subtitle}>SERVIÇOS</h2>
        <h1 style={title2}>Tudo que seu veículo precisa</h1>

        <div style={grid}>
          {services.map((s, i) => (
            <div key={i} style={card}>
              <div style={{ fontSize: '40px' }}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUTOS */}
      <section id="produtos" style={{ ...section, background: '#111' }}>
        <h2 style={subtitle}>PEÇAS MAIS PROCURADAS</h2>

        <div style={grid}>
          {produtos.map((p, i) => (
            <div key={i} style={card}>
              <h3>{p}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" style={{ ...section, textAlign: 'center' }}>
        <h2>Contato</h2>
        <p>📞 (21) 97042-2836</p>
        <p>📍 Nova Iguaçu - RJ</p>
      </section>

      {/* WHATSAPP FIXO */}
      <a href={whatsapp} target="_blank" style={whats}>
        💬
      </a>

      {/* FOOTER */}
      <footer style={footer}>
        © Nova Turbo Peças e Serviços - Fundada em 2008
      </footer>

    </div>
  )
}

/* ESTILOS */

const nav = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px',
  background: '#000',
  position: 'sticky',
  top: 0,
  zIndex: 10
}

const menu = {
  display: 'flex',
  gap: '20px'
}

const btn = {
  background: 'orange',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '20px',
  cursor: 'pointer'
}

const btn2 = {
  marginLeft: '10px',
  padding: '10px 20px',
  borderRadius: '20px',
  border: '1px solid white',
  background: 'transparent',
  color: 'white'
}

const hero = {
  padding: '100px 20px',
  background: 'linear-gradient(to right, #000, #331100)'
}

const title = {
  fontSize: '48px',
  maxWidth: '600px'
}

const subtitle = {
  color: 'orange'
}

const title2 = {
  fontSize: '36px'
}

const badge = {
  border: '1px solid orange',
  padding: '5px 10px',
  borderRadius: '20px',
  color: 'orange'
}

const info = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '40px'
}

const cardInfo = {
  background: '#111',
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center'
}

const section = {
  padding: '60px 20px'
}

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '20px',
  marginTop: '40px'
}

const card = {
  background: '#1a1a1a',
  padding: '20px',
  borderRadius: '15px',
  transition: '0.3s'
}

const footer = {
  textAlign: 'center',
  padding: '20px',
  background: '#000'
}

const whats = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  background: 'green',
  color: 'white',
  padding: '15px',
  borderRadius: '50%',
  fontSize: '20px'
}