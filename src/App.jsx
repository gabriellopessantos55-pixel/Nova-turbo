
export default function App() {
  return (
    <div style={{ fontFamily: 'Arial', background: '#0f0f0f', color: 'white' }}>

      <header style={{ padding: '20px', borderBottom: '2px solid orange', background: '#000' }}>
        <h1 style={{ color: 'orange' }}>Nova Turbo Peças e Serviços</h1>
        <p>Especialistas desde 2008</p>
      </header>

      <section style={{ padding: '60px', textAlign: 'center' }}>
        <img src="/Turbina.jpeg" style={{ maxWidth: '500px', width: '100%', borderRadius: '20px' }} />
        <h2 style={{ color: 'orange', marginTop: '30px' }}>Potência e confiança para seu veículo</h2>
        <p>Serviços completos em turbinas, freios, direção hidráulica e mais.</p>
      </section>

      <section style={{ padding: '60px', background: '#1a1a1a' }}>
        <h2 style={{ textAlign: 'center', color: 'orange' }}>Serviços</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '40px' }}>
          <div style={card}><h3>Turbinas</h3><p>Venda e reparo.</p></div>
          <div style={card}><h3>Freios</h3><p>Manutenção completa.</p></div>
          <div style={card}><h3>Direção</h3><p>Revisão hidráulica.</p></div>
          <div style={card}><h3>Cardans</h3><p>Balanceamento.</p></div>
          <div style={card}><h3>Embreagem</h3><p>Troca e reparo.</p></div>
        </div>
      </section>

      <section style={{ padding: '60px', textAlign: 'center' }}>
        <h2 style={{ color: 'orange' }}>Contato</h2>
        <p>(21) 97042-2836</p>
        <p>Rod. Pres. Dutra - Nova Iguaçu - RJ</p>
      </section>

      <footer style={{ padding: '20px', textAlign: 'center', background: '#000' }}>
        <p>© Nova Turbo Peças e Serviços - 2008</p>
      </footer>

    </div>
  )
}

const card = {
  background: '#222',
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center'
}
