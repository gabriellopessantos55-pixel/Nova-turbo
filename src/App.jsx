import { useEffect, useState } from 'react'

export default function App() {
  const [form, setForm] = useState({ nome: '', telefone: '', servico: '' })

  useEffect(() => {
    document.title = 'Nova Turbo Peças e Serviços | Turbinas, Freios e Direção Hidráulica em Nova Iguaçu'

    let favicon = document.querySelector('link[rel="icon"]')
    if (!favicon) {
      favicon = document.createElement('link')
      favicon.setAttribute('rel', 'icon')
      document.head.appendChild(favicon)
    }
    favicon.setAttribute('href', '/logo.png')

    const description = 'Nova Turbo Peças e Serviços em Nova Iguaçu RJ. Especialistas em turbinas, freios, direção hidráulica, embreagens, cardans e compressores. Solicite orçamento pelo WhatsApp.'
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', description)

    let keywords = document.querySelector('meta[name="keywords"]')
    if (!keywords) {
      keywords = document.createElement('meta')
      keywords.setAttribute('name', 'keywords')
      document.head.appendChild(keywords)
    }
    keywords.setAttribute('content', 'Nova Turbo, turbinas Nova Iguaçu, peças automotivas, freios, direção hidráulica, embreagem, cardans, compressores, Rodovia Presidente Dutra')

    let schema = document.querySelector('#business-schema')
    if (!schema) {
      schema = document.createElement('script')
      schema.id = 'business-schema'
      schema.type = 'application/ld+json'
      document.head.appendChild(schema)
    }
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'AutoPartsStore',
      name: 'Nova Turbo Peças e Serviços',
      foundingDate: '2008',
      telephone: '+55 21 97042-2836',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rod. Pres. Dutra - Comendador Soares',
        addressLocality: 'Nova Iguaçu',
        addressRegion: 'RJ',
        postalCode: '26280-490',
        addressCountry: 'BR'
      },
      areaServed: 'Nova Iguaçu, RJ',
      serviceType: ['Turbinas automotivas', 'Freios', 'Direção hidráulica', 'Embreagem', 'Cardans', 'Compressores']
    })
  }, [])

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function enviarWhatsApp(event) {
    event.preventDefault()

    const mensagem = `Olá, vim pelo site da Nova Turbo e quero solicitar um orçamento.%0A%0ANome: ${form.nome}%0ATelefone: ${form.telefone}%0AServiço desejado: ${form.servico}`
    window.open(`https://wa.me/5521970422836?text=${mensagem}`, '_blank')
  }
  const whatsapp = 'https://wa.me/5521970422836'

  const services = [
    { title: 'Turbinas Novas e Recondicionadas', text: 'Venda e recuperação de turbinas automotivas para carros, caminhões e utilitários.', icon: '⚙️', img: '/turbina.jpg' },
    { title: 'Freios', text: 'Manutenção completa do sistema de freios com peças de qualidade.', icon: '🛑', img: '/freio.jpg' },
    { title: 'Direção Hidráulica', text: 'Reparo e manutenção de caixas, bombas e sistemas hidráulicos.', icon: '🚗', img: '/direcao.jpg' },
    { title: 'Embreagem', text: 'Troca e manutenção de kits de embreagem para veículos leves e pesados.', icon: '🔧', img: '/embreagem.jpg' },
    { title: 'Cardans', text: 'Balanceamento, recuperação e troca de componentes.', icon: '🔩', img: '/cardan.jpg' },
    { title: 'Compressores', text: 'Serviços especializados em compressores e componentes relacionados.', icon: '🛠️', img: '/compressor.jpg' },
  ]

  const products = [
    'Turbo Sprinter CDI 311/313',
    'Turbina Renault Master 2.5',
    'Bi-Turbo Sprinter CDI 415/515',
    'Kit de Embreagem Pesada',
  ]

  return (
    <div className="site">
      <header className="header">
        <div className="brand">
          <div className="logoWrap">
            <img src="/logo.png" alt="Logo Nova Turbo Peças e Serviços" />
          </div>
          <div className="brandText">
            <h1>NOVA TURBO</h1>
            <p>Peças e Serviços</p>
          </div>
        </div>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#produtos">Produtos</a>
          <a href="#sobre">Quem Somos</a>
          <a href="#contato">Contato</a>
        </nav>

        <a href={whatsapp} target="_blank" rel="noreferrer" className="quoteBtn">
          Solicitar Orçamento
        </a>
      </header>

      <section id="inicio" className="hero">
        <div className="heroText">
          <span className="tag">Especialistas em turbinas automotivas</span>
          <h2>Potência, confiança e manutenção para o seu veículo.</h2>
          <p>
            Trabalhamos com turbinas novas, recondicionadas e serviços completos
            em freios, direção hidráulica, compressores, cardans e embreagens.
          </p>
          <div className="heroBtns">
            <a href={whatsapp} target="_blank" rel="noreferrer" className="orangeBtn">Fale no WhatsApp</a>
            <a href="#servicos" className="darkBtn">Ver Serviços</a>
          </div>
        </div>
      </section>

      <section className="stats">
        <div><strong>15+</strong><span>Anos de experiência</span></div>
        <div><strong>100%</strong><span>Peças testadas</span></div>
        <div><strong>24h</strong><span>Resposta rápida</span></div>
      </section>

      <section id="servicos" className="section">
        <p className="label">NOSSOS SERVIÇOS</p>
        <h2>Tudo o que seu veículo precisa</h2>
        <p className="desc">Atendimento técnico especializado com peças de qualidade e garantia em todos os serviços.</p>

        <div className="grid servicesGrid">
          {services.map((service) => (
            <article className="card serviceCard" key={service.title}>
              <div className="imageBox">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="produtos" className="section productsSection">
        <div className="sectionTop">
          <div>
            <p className="label">PRODUTOS EM DESTAQUE</p>
            <h2>As peças mais procuradas</h2>
          </div>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="catalogBtn">Ver catálogo completo</a>
        </div>

        <div className="grid productsGrid">
          {products.map((product, index) => (
            <article className="productCard" key={product}>
              <div className="productIcon">⚙️</div>
              <span>Destaque #{index + 1}</span>
              <h3>{product}</h3>
              <p>Produto com excelente desempenho, qualidade e garantia.</p>
              <a href={whatsapp} target="_blank" rel="noreferrer" className="orangeBtn small">Solicitar orçamento</a>
            </article>
          ))}
        </div>
      </section>

      <section id="sobre" className="section about">
        <p className="label">QUEM SOMOS</p>
        <h2>Tradição e qualidade em peças automotivas</h2>
        <p className="desc">
          A Nova Turbo Peças e Serviços atua desde 2008 oferecendo atendimento rápido,
          produtos de qualidade e soluções para veículos leves e pesados.
        </p>
      </section>

      <section id="contato" className="contact">
        <div className="contactInfo">
          <p className="label">CONTATO</p>
          <h2>Fale com nossa equipe</h2>
          <p className="desc">Solicite um orçamento ou tire suas dúvidas. Nossa equipe responde rapidamente.</p>
          <p className="contactLine">📞 (21) 97042-2836</p>
          <p className="contactLine">📍 Rod. Pres. Dutra - Comendador Soares, Nova Iguaçu - RJ, 26280-490</p>
        </div>

        <form className="form" onSubmit={enviarWhatsApp}>
          <input
            name="nome"
            value={form.nome}
            onChange={handleChange}
            placeholder="Seu nome"
            required
          />
          <input
            name="telefone"
            value={form.telefone}
            onChange={handleChange}
            placeholder="Seu telefone"
            required
          />
          <textarea
            name="servico"
            value={form.servico}
            onChange={handleChange}
            placeholder="Descreva o serviço desejado"
            rows="5"
            required
          />
          <button type="submit">Enviar orçamento pelo WhatsApp</button>
        </form>
      </section>

      <section className="mapBox">
        <iframe
          src="https://www.google.com/maps?q=Rod.+Pres.+Dutra,+Comendador+Soares,+Nova+Iguaçu+-+RJ,+26280-490&output=embed"
          width="100%"
          height="330"
          style={{ border: 0 }}
          loading="lazy"
          title="Mapa Nova Turbo"
        />
      </section>

      <a className="whatsapp" href={whatsapp} target="_blank" rel="noreferrer">💬</a>

      <footer>Nova Turbo Peças e Serviços • Empresa fundada em 2008</footer>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        a { color: inherit; text-decoration: none; }
        .site { min-height: 100vh; background: #08090b; color: #fff; font-family: Arial, Helvetica, sans-serif; overflow-x: hidden; }
        .header { min-height: 120px; display: flex; align-items: center; justify-content: space-between; gap: 28px; padding: 14px 24px; background: rgba(8, 9, 11, .96); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255,255,255,.08); position: sticky; top: 0; z-index: 20; box-shadow: 0 12px 35px rgba(0,0,0,.28); }
        .brand { display: flex; align-items: center; gap: 16px; min-width: 260px; }
        .logoWrap { width: 92px; height: 92px; border-radius: 50%; padding: 5px; background: linear-gradient(135deg, #ff6a00, #ffffff22, #0b0b0b); box-shadow: 0 0 0 1px rgba(255,255,255,.08), 0 14px 35px rgba(255,106,0,.18); flex-shrink: 0; }
        .brand img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; object-position: center; background: #fff; display: block; }
        .brandText { display: flex; flex-direction: column; justify-content: center; }
        .brand h1 { color: #ff6a00; font-size: 36px; letter-spacing: 2px; font-weight: 900; }
        .brand p { color: #c8c8c8; font-size: 16px; margin-top: 5px; letter-spacing: .6px; }
        nav { display: flex; align-items: center; gap: 42px; font-size: 20px; font-weight: 800; }
        nav a { position: relative; transition: .25s ease; }
        nav a::after { content: ''; position: absolute; left: 0; bottom: -8px; width: 0; height: 3px; background: #ff6a00; border-radius: 999px; transition: .25s ease; }
        nav a:hover { color: #ff6a00; }
        nav a:hover::after { width: 100%; }
        .quoteBtn, .orangeBtn { background: linear-gradient(135deg, #ff6a00, #ff8a1f); color: #000; font-weight: 900; padding: 18px 30px; border-radius: 999px; box-shadow: 0 12px 30px rgba(255,106,0,.28); display: inline-block; transition: .25s ease; }
        .quoteBtn:hover, .orangeBtn:hover { background: #ff8a1f; transform: translateY(-2px); }
        .hero { min-height: 650px; display: flex; align-items: center; padding: 70px 16px; background: radial-gradient(circle at right, rgba(255,106,0,.22), transparent 38%), linear-gradient(90deg, #08090b 0%, #120b09 50%, #3a1707 100%); }
        .heroText { max-width: 920px; }
        .tag { color: #ff9a3b; border: 1px solid rgba(255,106,0,.55); background: rgba(255,106,0,.08); padding: 10px 24px; border-radius: 999px; display: inline-block; font-size: 20px; margin-bottom: 42px; }
        .hero h2 { font-size: clamp(46px, 7vw, 92px); line-height: 1.15; font-weight: 900; max-width: 950px; margin-bottom: 38px; }
        .hero p { color: #e8e8e8; font-size: 27px; line-height: 1.75; max-width: 820px; }
        .heroBtns { display: flex; gap: 24px; margin-top: 48px; }
        .darkBtn { border: 1px solid #3c3c46; border-radius: 22px; padding: 18px 34px; font-weight: 800; font-size: 22px; }
        .stats { max-width: 1180px; margin: -50px auto 80px; padding: 28px; background: #18191d; border: 1px solid #272a30; border-radius: 0 0 34px 34px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .stats div { background: #050607; border-radius: 22px; padding: 32px 20px; text-align: center; }
        .stats strong { display: block; color: #ff6a00; font-size: 48px; font-weight: 900; }
        .stats span { color: #bfc3d6; font-size: 20px; }
        .section, .contact, .mapBox { max-width: 1220px; margin: 0 auto; padding: 80px 16px; }
        .label { color: #ff6a00; font-weight: 900; letter-spacing: 8px; font-size: 22px; margin-bottom: 24px; }
        .section h2, .contact h2 { font-size: clamp(38px, 5vw, 58px); line-height: 1.1; font-weight: 900; margin-bottom: 26px; }
        .desc { color: #bfc3d6; font-size: 24px; line-height: 1.55; max-width: 820px; }
        .grid { display: grid; gap: 36px; margin-top: 70px; }
        .servicesGrid { grid-template-columns: repeat(auto-fit, minmax(330px, 1fr)); }
        .card { background: #18191d; border: 1px solid #2a2b31; border-radius: 34px; padding: 30px; transition: .3s ease; }
        .card:hover { transform: translateY(-8px); border-color: rgba(255,106,0,.45); box-shadow: 0 22px 50px rgba(255,106,0,.08); }
        .imageBox { height: 210px; overflow: hidden; border-radius: 24px; background: #101114; margin-bottom: 28px; }
        .imageBox img { width: 100%; height: 100%; object-fit: cover; transition: transform .45s ease; }
        .card:hover img { transform: scale(1.1); }
        .icon { font-size: 48px; margin-bottom: 22px; }
        .card h3, .productCard h3 { font-size: 29px; margin-bottom: 24px; }
        .card p, .productCard p { color: #bfc3d6; font-size: 22px; line-height: 1.65; }
        .productsSection { border-top: 1px solid #24262c; border-bottom: 1px solid #24262c; max-width: 100%; padding-left: max(16px, calc((100vw - 1220px) / 2)); padding-right: max(16px, calc((100vw - 1220px) / 2)); background: #0f1013; }
        .sectionTop { display: flex; justify-content: space-between; gap: 30px; align-items: flex-start; }
        .catalogBtn { border: 1px solid #3d4048; border-radius: 24px; padding: 24px 32px; font-size: 24px; font-weight: 800; }
        .productsGrid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
        .productCard { background: #08090b; border: 1px solid #282b32; border-radius: 34px; padding: 30px; }
        .productIcon { height: 280px; background: #191a1e; border-radius: 24px; display: flex; align-items: center; justify-content: center; font-size: 78px; margin-bottom: 32px; }
        .productCard span { color: #ff7a10; background: rgba(255,106,0,.12); border-radius: 999px; padding: 9px 18px; display: inline-block; font-size: 18px; font-weight: 900; margin-bottom: 28px; }
        .small { margin-top: 26px; padding: 14px 22px; font-size: 16px; }
        .about { text-align: left; }
        .contact { display: grid; grid-template-columns: 1fr 420px; gap: 50px; background: #18191d; max-width: 100%; padding-left: max(16px, calc((100vw - 1220px) / 2)); padding-right: max(16px, calc((100vw - 1220px) / 2)); }
        .contactLine { font-size: 24px; margin-top: 30px; line-height: 1.45; }
        .form { background: #090a0c; border: 1px solid #2a2b31; border-radius: 32px; padding: 28px; display: flex; flex-direction: column; gap: 16px; }
        .form input, .form textarea { width: 100%; padding: 17px; border-radius: 16px; border: 1px solid #292b32; background: #15161a; color: #fff; font-size: 16px; outline: none; }
        .form button { background: #ff6a00; color: #000; border: none; border-radius: 18px; padding: 17px; font-weight: 900; font-size: 16px; cursor: pointer; }
        .mapBox iframe { border-radius: 28px; overflow: hidden; }
        .whatsapp { position: fixed; right: 22px; bottom: 22px; width: 58px; height: 58px; border-radius: 50%; background: #22c55e; display: flex; align-items: center; justify-content: center; font-size: 28px; z-index: 30; box-shadow: 0 18px 40px rgba(0,0,0,.3); }
        footer { background: #050607; border-top: 1px solid #282b32; color: #9ca3af; text-align: center; padding: 30px 16px; }
        @media (max-width: 900px) {
          .header { min-height: auto; flex-wrap: wrap; justify-content: center; text-align: center; padding: 18px 16px; }
          .brand { justify-content: center; min-width: auto; width: 100%; }
          .logoWrap { width: 82px; height: 82px; }
          nav { order: 3; width: 100%; justify-content: center; flex-wrap: wrap; gap: 18px; font-size: 16px; }
          .quoteBtn { padding: 14px 20px; }
          .stats { grid-template-columns: 1fr; margin-top: 0; border-radius: 0; }
          .hero { min-height: auto; }
          .heroBtns { flex-direction: column; align-items: flex-start; }
          .darkBtn { margin: 0; }
          .sectionTop { flex-direction: column; }
          .contact { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  )
}
