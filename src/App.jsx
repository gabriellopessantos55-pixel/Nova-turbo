
export default function App() {
  return (
    <div style={{background:'#111', color:'#fff', minHeight:'100vh', fontFamily:'Arial'}}>
      <header style={{padding:'20px', borderBottom:'2px solid orange'}}>
        <h1 style={{color:'orange'}}>Nova Turbo Peças e Serviços</h1>
        <p>Fundada em 2008</p>
      </header>

      <div style={{textAlign:'center', padding:'40px'}}>
        <img src="/Turbina.jpeg" style={{maxWidth:'400px', width:'100%'}} />
        <h2>Potência e confiança para seu veículo</h2>
        <p>Serviços de turbinas, freios, direção hidráulica e mais.</p>
      </div>

      <div style={{padding:'40px'}}>
        <h2>Contato</h2>
        <p>(21) 97042-2836</p>
        <p>Rod. Pres. Dutra - Nova Iguaçu - RJ</p>
      </div>
    </div>
  )
}
