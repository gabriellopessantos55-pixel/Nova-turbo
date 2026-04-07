export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#111',
        color: 'white',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <header
        style={{
          backgroundColor: '#000',
          padding: '20px 40px',
          borderBottom: '3px solid #ff6600'
        }}
      >
        <h1 style={{ color: '#ff6600', margin: 0 }}>
          Nova Turbo Peças e Serviços
        </h1>
        <p style={{ marginTop: '10px', fontSize: '18px' }}>
          Especialistas em turbinas automotivas desde 2008
        </p>
      </header>

      <section
        style={{
          padding: '60px 20px',
          textAlign: 'center'
        }}
      >
        <img
          src="/Turbina.jpeg"
          alt="Turbina automotiva"
          style={{
            width: '100%',
            maxWidth: '600px',
            borderRadius: '20px',
            boxShadow: '0 0 20px rgba(0,0,0,0.5)'
          }}
        />

        <h2
          style={{
            color: '#ff6600',
            fontSize: '42px',
            marginTop: '40px'
          }}
        >
          Potência e confiança para o seu veículo
          
        </h2>
        <p
          style={{
            fontSize: '20px',
            maxWidth: '800px',
            margin: '20px auto',
            lineHeight: '1.6'
            }}
        >
            Na Nova Turbo, oferecemos uma ampla gama de serviços para turbinas
            automotivas, incluindo manutenção, reparo e venda de peças de alta
            qualidade. Nossa equipe de especialistas está pronta para garantir que
            seu veículo tenha o desempenho máximo e a confiabilidade que você
            merece.
        </p>
        </section>
    </div>
    )
}
