export default function App() {
  const services = [
    {
      title: 'Turbinas Novas e Recondicionadas',
      description:
        'Venda e recuperação de turbinas automotivas para carros, caminhões e máquinas.',
      icon: '⚙️',
    },
    {
      title: 'Caixa de Direção Hidráulica',
      description:
        'Reparo e manutenção com peças de alta qualidade e testes completos.',
      icon: '🚗',
    },
    {
      title: 'Freios',
      description:
        'Sistema de freios completo com revisão e substituição de peças.',
      icon: '🛑',
    },
    {
      title: 'Embreagens',
      description:
        'Troca e manutenção com garantia de qualidade.',
      icon: '🔧',
    },
    {
      title: 'Cardans',
      description:
        'Balanceamento e recuperação de cardans automotivos.',
      icon: '⚡',
    },
  ]

  return (
    <div style={{ fontFamily: 'Arial', background: '#0f0f0f', color: 'white' }}>

      {/* HEADER */}
      <header style={{ padding: '20px', borderBottom: '2px solid orange', background: '#000' }}>
        <h1 style={{ color: 'orange' }}>Nova Turbo Peças e Serviços</h1>
        <p>Fundada em 2008</p>
      </header>

      {/* HERO */}
      <section style={{ padding: '60px', textAlign: 'center' }}>
        <img
          src="/Turbina.jpeg"
          style={{ maxWidth: '500px', width: '100%', borderRadius: '20px' }}
        />
        <h2 style={{ color: 'orange', marginTop: '30px' }}>
          Potência e confiança para seu veículo
        </h2>
        <p>
          Serviços especializados em turbinas e manutenção automotiva.
        </p>
      </section>

      {/* SERVIÇOS */}
      <section style={{ padding: '60px', background: '#1a1a1a' }}>
        <h2 style={{ textAlign: 'center', color: 'orange' }}>Nossos Serviços</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginTop: '40px',
          }}
        >
          {services.map((service, index) => (
            <div key={index} style={card}>
              <div style={{ fontSize: '40px' }}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section style={{ padding: '60px', textAlign: 'center' }}>
        <h2 style={{ color: 'orange' }}>Contato</h2>
        <p style={{ fontSize: '20px' }}>📞 (21) 97042-2836</p>
        <p>📍 Rod. Pres. Dutra - Comendador Soares, Nova Iguaçu - RJ</p>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '20px', textAlign: 'center', background: '#000' }}>
        <p>© Nova Turbo Peças e Serviços - Fundada em 2008</p>
      </footer>

    </div>
  )
}

const card = {
  background: '#222',
  padding: '20px',
  borderRadius: '12px',
  textAlign: 'center',
}