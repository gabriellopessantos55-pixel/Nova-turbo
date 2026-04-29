import { useEffect, useState } from 'react'

export default function App() {
  const whatsapp = 'https://wa.me/5521970422836'
  const [form, setForm] = useState({ nome: '', telefone: '', servico: '' })

  const services = [
    { title: 'Turbinas Novas e Recondicionadas', text: 'Venda e recuperação de turbinas automotivas para carros, caminhões e utilitários.', icon: '⚙️', img: '/turbina.jpg' },
    { title: 'Freios', text: 'Manutenção completa do sistema de freios com peças de qualidade.', icon: '🛑', img: '/freio.jpg' },
    { title: 'Direção Hidráulica', text: 'Reparo e manutenção de caixas, bombas e sistemas hidráulicos.', icon: '🚗', img: '/direcao.jpg' },
    { title: 'Embreagem', text: 'Troca e manutenção de kits de embreagem para veículos leves e pesados.', icon: '🔧', img: '/embreagem.jpg' },
    { title: 'Cardans', text: 'Balanceamento, recuperação e troca de componentes.', icon: '🔩', img: '/cardan.jpg' },
    { title: 'Compressores', text: 'Serviços especializados em compressores e componentes relacionados.', icon: '🛠️', img: '/compressor.jpg' },
  ]

  const products = [
    { name: 'Turbo Sprinter CDI 311/313', img: '/produto1.jpg' },
    { name: 'Turbina Renault Master 2.5', img: '/produto2.jpg' },
    { name: 'Bi-Turbo Sprinter CDI 415/515', img: '/produto3.jpg' },
    { name: 'Kit de Embreagem Pesada', img: '/produto4.jpg' },
  ]

  const gallery = [
    { title: 'Oficina', img: '/galeria1.jpg' },
    { title: 'Turbinas', img: '/galeria2.jpg' },
    { title: 'Peças', img: '/galeria3.jpg' },
    { title: 'Serviços', img: '/galeria4.jpg' },
  ]

  const reviews = [
    { name: 'Carlos M.', text: 'Atendimento rápido, serviço bem feito e preço justo. Recomendo!' },
    { name: 'Renato S.', text: 'Minha turbina ficou excelente. Equipe muito profissional.' },
    { name: 'Marcos A.', text: 'Resolveram meu problema com direção hidráulica no mesmo dia.' },
  ]

  const brands = ['Mercedes-Benz', 'Renault', 'Volkswagen', 'Ford', 'Iveco', 'Scania', 'Volvo', 'Fiat', 'Chevrolet']

  const faqs = [
    { q: 'Vocês trabalham com turbinas novas e recondicionadas?', a: 'Sim. Trabalhamos com venda, manutenção e recuperação de turbinas automotivas.' },
    { q: 'Fazem orçamento pelo WhatsApp?', a: 'Sim. Você pode enviar sua solicitação pelo formulário ou pelo botão de WhatsApp.' },
    { q: 'Atendem veículos leves e pesados?', a: 'Sim. Atendemos veículos leves, utilitários, caminhões e linha diesel.' },
    { q: 'As peças têm garantia?', a: 'Sim. Trabalhamos com peças testadas e serviços com garantia conforme avaliação técnica.' },
  ]

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

        <input type="checkbox" id="menuToggle" className="menuToggle" />
        <label htmlFor="menuToggle" className="mobileMenuBtn">☰</label>

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
          <p>Trabalhamos com turbinas novas, recondicionadas e serviços completos em freios, direção hidráulica, compressores, cardans e embreagens.</p>
          <div className="heroBtns">
            <a href={whatsapp} target="_blank" rel="noreferrer" className="greenBtn">Fale no WhatsApp</a>
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
              <div className="imageBox"><img src={service.img} alt={service.title} /></div>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section whySection">
        <p className="label">POR QUE ESCOLHER A NOVA TURBO</p>
        <h2>Confiança, qualidade e atendimento especializado</h2>
        <div className="grid whyGrid">
          <div className="whyCard"><strong>🛡️</strong><h3>Garantia nos serviços</h3><p>Serviços realizados com cuidado técnico e peças testadas.</p></div>
          <div className="whyCard"><strong>⚡</strong><h3>Resposta rápida</h3><p>Atendimento ágil pelo WhatsApp para orçamentos e dúvidas.</p></div>
          <div className="whyCard"><strong>🔧</strong><h3>Equipe especializada</h3><p>Experiência com turbinas, freios, direção hidráulica e linha diesel.</p></div>
        </div>
      </section>

      <section className="section sealsSection">
        <p className="label">QUALIDADE E GARANTIA</p>
        <h2>Atendimento com confiança</h2>
        <div className="grid sealsGrid">
          <div className="sealCard"><strong>🛡️</strong><span>Garantia em serviços</span></div>
          <div className="sealCard"><strong>✅</strong><span>Peças testadas</span></div>
          <div className="sealCard"><strong>⚡</strong><span>Orçamento rápido</span></div>
          <div className="sealCard"><strong>💬</strong><span>Suporte via WhatsApp</span></div>
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
            <article className="productCard" key={product.name}>
              <div className="productIcon productImageWrap"><img src={product.img} alt={product.name} /></div>
              <span>Destaque #{index + 1}</span>
              <h3>{product.name}</h3>
              <p>Produto com excelente desempenho, qualidade e garantia.</p>
              <a href={whatsapp} target="_blank" rel="noreferrer" className="greenBtn small">Solicitar orçamento</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section brandsSection">
        <p className="label">MARCAS ATENDIDAS</p>
        <h2>Trabalhamos com diversas linhas automotivas</h2>
        <div className="brandsGrid">
          {brands.map((brand) => <span key={brand}>{brand}</span>)}
        </div>
      </section>

      <section className="section gallerySection">
        <p className="label">GALERIA</p>
        <h2>Fotos reais da oficina e dos serviços</h2>
        <p className="desc">Adicione fotos da oficina, peças, turbinas e serviços realizados para passar mais confiança ao cliente.</p>
        <div className="grid galleryGrid">
          {gallery.map((item) => (
            <article className="galleryCard" key={item.title}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section faqSection">
        <p className="label">FAQ</p>
        <h2>Perguntas frequentes</h2>
        <div className="faqList">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section hoursSection">
        <p className="label">HORÁRIO DE FUNCIONAMENTO</p>
        <h2>Estamos prontos para atender você</h2>
        <div className="hoursBox">
          <p><strong>Segunda a Sexta:</strong> 08h às 18h</p>
          <p><strong>Sábado:</strong> 08h às 13h</p>
          <p><strong>Domingo:</strong> Fechado</p>
        </div>
      </section>

      <section className="section seoLocal">
        <p className="label">ATENDIMENTO LOCAL</p>
        <h2>Peças e serviços automotivos em Nova Iguaçu - RJ</h2>
        <p className="desc">
          A Nova Turbo Peças e Serviços atende clientes em Nova Iguaçu, Comendador Soares,
          Rodovia Presidente Dutra e região. Somos referência local em turbinas em Nova Iguaçu,
          freios em Nova Iguaçu, direção hidráulica em Nova Iguaçu, embreagens, cardans,
          compressores e peças automotivas para veículos leves e pesados.
        </p>
      </section>

      <section id="sobre" className="section about">
        <p className="label">QUEM SOMOS</p>
        <h2>Tradição e qualidade em peças automotivas</h2>
        <p className="desc">A Nova Turbo Peças e Serviços atua desde 2008 oferecendo atendimento rápido, produtos de qualidade e soluções para veículos leves e pesados.</p>
      </section>

      <section id="contato" className="contact">
        <div className="contactInfo">
          <p className="label">CONTATO</p>
          <h2>Fale com nossa equipe</h2>
          <p className="desc">Solicite um orçamento ou tire suas dúvidas. Nossa equipe responde rapidamente.</p>
          <p className="contactLine">✉️ vendasglobal122@gmail.com</p>
          <p className="contactLine">📞 (21) 97042-2836</p>
          <p className="contactLine">📍 Pres. Dutra, 21190 - Comendador Soares, Nova Iguaçu - RJ, 26280-520, Brasil</p>
        </div>
        <form className="form" onSubmit={enviarWhatsApp}>
          <input name="nome" value={form.nome} onChange={handleChange} placeholder="Seu nome" required />
          <input name="telefone" value={form.telefone} onChange={handleChange} placeholder="Seu telefone" required />
          <textarea name="servico" value={form.servico} onChange={handleChange} placeholder="Descreva o serviço desejado" rows="5" required />
          <button type="submit">Enviar orçamento pelo WhatsApp</button>
        </form>
      </section>

      <section className="mapBox">
        <iframe src="https://www.google.com/maps?q=Pres.+Dutra,+21190+-+Comendador+Soares,+Nova+Iguaçu+-+RJ,+26280-520,+Brasil&output=embed" width="100%" height="330" style={{ border: 0 }} loading="lazy" title="Mapa Nova Turbo" />
        <div className="mapActions">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Pres.+Dutra,+21190+-+Comendador+Soares,+Nova+Iguaçu+-+RJ,+26280-520,+Brasil"
            target="_blank"
            rel="noreferrer"
            className="greenBtn"
          >
            Como chegar
          </a>
        </div>
      </section>

      <a className="whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp">
        <span>💬</span>
      </a>
      <footer className="footerPro">
        <div className="footerGrid">
          <div className="footerBrand">
            <div className="footerLogoWrap">
              <img src="/logo.png" alt="Logo Nova Turbo Peças e Serviços" />
            </div>
            <div>
              <h3>NOVA TURBO</h3>
              <p>Peças e Serviços</p>
              <span>Empresa fundada em 2008</span>
            </div>
          </div>

          <div className="footerCol">
            <h4>Links Rápidos</h4>
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#produtos">Produtos</a>
            <a href="#sobre">Quem Somos</a>
            <a href="#contato">Contato</a>
          </div>

          <div className="footerCol">
            <h4>Contato</h4>
            <p>✉️ vendasglobal122@gmail.com</p>
            <p>📞 (21) 97042-2836</p>
            <p>📍 Rod. Pres. Dutra - Comendador Soares, Nova Iguaçu - RJ</p>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="footerWhats">Falar no WhatsApp</a>
          </div>
        </div>

        <div className="footerBottom">
          <p>© {new Date().getFullYear()} Nova Turbo Peças e Serviços. Todos os direitos reservados.</p>
        </div>
      </footer>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        a { color: inherit; text-decoration: none; }
        .site { min-height: 100vh; background: #06110a; color: #fff; font-family: Arial, Helvetica, sans-serif; overflow-x: hidden; }
        .header { min-height: 120px; display: flex; align-items: center; justify-content: space-between; gap: 28px; padding: 14px 24px; background: rgba(8,9,11,.96); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255,255,255,.08); position: sticky; top: 0; z-index: 20; box-shadow: 0 12px 35px rgba(0,0,0,.28); }
        .brand { display: flex; align-items: center; gap: 16px; min-width: 260px; }
        .logoWrap { width: 92px; height: 92px; border-radius: 50%; padding: 5px; background: linear-gradient(135deg, #42b35e, #ffffff22, #0b0b0b); box-shadow: 0 0 0 1px rgba(255,255,255,.08), 0 14px 35px rgba(66,179,94,.18); flex-shrink: 0; }
        .brand img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; object-position: center; background: #fff; display: block; }
        .brand h1 { color: #42b35e; font-size: 36px; letter-spacing: 2px; font-weight: 900; }
        .brand p { color: #c8c8c8; font-size: 16px; margin-top: 5px; letter-spacing: .6px; }
        .menuToggle, .mobileMenuBtn { display: none; }
        nav { display: flex; align-items: center; gap: 42px; font-size: 20px; font-weight: 800; }
        nav a { position: relative; transition: .25s ease; }
        nav a::after { content: ''; position: absolute; left: 0; bottom: -8px; width: 0; height: 3px; background: #42b35e; border-radius: 999px; transition: .25s ease; }
        nav a:hover { color: #67d982; }
        nav a:hover::after { width: 100%; }
        .quoteBtn, .greenBtn { background: linear-gradient(135deg, #42b35e, #67d982); color: #000; font-weight: 900; padding: 18px 30px; border-radius: 999px; box-shadow: 0 12px 30px rgba(66,179,94,.28); display: inline-block; transition: .25s ease; }
        .quoteBtn:hover, .greenBtn:hover { background: #7de693; transform: translateY(-2px); }
        .hero { min-height: 650px; display: flex; align-items: center; padding: 70px 16px; background: radial-gradient(circle at right, rgba(66,179,94,.18), transparent 38%), linear-gradient(90deg, #06110a 0%, #0b1c10 48%, #14331d 100%); }
        .heroText { max-width: 920px; }
        .tag { color: #9bf0ae; border: 1px solid rgba(66,179,94,.55); background: rgba(66,179,94,.08); padding: 10px 24px; border-radius: 999px; display: inline-block; font-size: 20px; margin-bottom: 42px; }
        .hero h2 { font-size: clamp(40px, 6vw, 78px); line-height: 1.15; font-weight: 900; max-width: 950px; margin-bottom: 38px; }
        .hero p { color: #e8e8e8; font-size: 27px; line-height: 1.75; max-width: 820px; }
        .heroBtns { display: flex; gap: 24px; margin-top: 48px; }
        .darkBtn { border: 1px solid #3c3c46; border-radius: 22px; padding: 18px 34px; font-weight: 800; font-size: 22px; }
        .stats { max-width: 1180px; margin: -50px auto 80px; padding: 28px; background: #101c13; border: 1px solid #1f3525; border-radius: 0 0 34px 34px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .stats div { background: #050b07; border-radius: 22px; padding: 32px 20px; text-align: center; }
        .stats strong { display: block; color: #42b35e; font-size: 48px; font-weight: 900; }
        .stats span { color: #bfc3d6; font-size: 20px; }
        .section, .contact, .mapBox { max-width: 1220px; margin: 0 auto; padding: 80px 16px; }
        .label { color: #42b35e; font-weight: 900; letter-spacing: 8px; font-size: 22px; margin-bottom: 24px; }
        .section h2, .contact h2 { font-size: clamp(38px, 5vw, 58px); line-height: 1.1; font-weight: 900; margin-bottom: 26px; }
        .desc { color: #bfc3d6; font-size: 24px; line-height: 1.55; max-width: 820px; }
        .grid { display: grid; gap: 36px; margin-top: 70px; }
        .servicesGrid, .whyGrid, .galleryGrid, .reviewsGrid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
        .card, .whyCard, .reviewCard, .galleryCard, .hoursBox, .faqList details { background: #101c13; border: 1px solid #1f3525; border-radius: 28px; padding: 26px; transition: .3s ease; }
        .card:hover, .whyCard:hover, .reviewCard:hover, .galleryCard:hover { transform: translateY(-8px); border-color: rgba(66,179,94,.45); box-shadow: 0 22px 50px rgba(66,179,94,.08); }
        .imageBox { height: 210px; overflow: hidden; border-radius: 24px; background: #101114; margin-bottom: 28px; }
        .imageBox img, .galleryCard img, .productImageWrap img { width: 100%; height: 100%; object-fit: cover; transition: transform .45s ease; }
        .card:hover img, .galleryCard:hover img, .productCard:hover .productImageWrap img { transform: scale(1.08); }
        .icon { font-size: 48px; margin-bottom: 22px; }
        .card h3, .productCard h3, .whyCard h3 { font-size: 29px; margin-bottom: 18px; }
        .card p, .productCard p, .whyCard p { color: #bfc3d6; font-size: 20px; line-height: 1.65; }
        .whySection, .productsSection { border-top: 1px solid #1f3525; border-bottom: 1px solid #1f3525; max-width: 100%; padding-left: max(16px, calc((100vw - 1220px) / 2)); padding-right: max(16px, calc((100vw - 1220px) / 2)); background: #09170d; }
        .whyCard strong { font-size: 42px; display: block; margin-bottom: 18px; }
        .sectionTop { display: flex; justify-content: space-between; gap: 30px; align-items: flex-start; }
        .catalogBtn { border: 1px solid #294933; border-radius: 24px; padding: 24px 32px; font-size: 24px; font-weight: 800; }
        .productsGrid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
        .sealsSection { background: #08160c; border-top: 1px solid #1f3525; border-bottom: 1px solid #1f3525; max-width: 100%; padding-left: max(16px, calc((100vw - 1220px) / 2)); padding-right: max(16px, calc((100vw - 1220px) / 2)); }
        .sealsGrid { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
        .sealCard { background: #101c13; border: 1px solid #1f3525; border-radius: 28px; padding: 26px; text-align: center; transition: .3s ease; }
        .sealCard:hover { transform: translateY(-6px); border-color: rgba(66,179,94,.45); box-shadow: 0 22px 50px rgba(66,179,94,.08); }
        .sealCard strong { display: block; font-size: 42px; margin-bottom: 14px; }
        .sealCard span { color: #e7efe9; font-size: 20px; font-weight: 800; }
        .productCard { background: #06110a; border: 1px solid #1f3525; border-radius: 34px; padding: 30px; }
        .productIcon { height: 280px; background: #101c13; border-radius: 24px; display: flex; align-items: center; justify-content: center; margin-bottom: 32px; overflow: hidden; }
        .productCard span { color: #7de693; background: rgba(66,179,94,.12); border-radius: 999px; padding: 9px 18px; display: inline-block; font-size: 18px; font-weight: 900; margin-bottom: 28px; }
        .small { margin-top: 26px; padding: 14px 22px; font-size: 16px; }
        .brandsGrid { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 40px; }
        .brandsGrid span { background: #101c13; border: 1px solid #294933; color: #d9ffe1; padding: 14px 20px; border-radius: 999px; font-weight: 800; }
        .galleryCard { overflow: hidden; padding: 0; }
        .galleryCard img { height: 240px; display: block; }
        .galleryCard h3 { padding: 20px; font-size: 22px; }
        .stars { color: #7de693; font-size: 22px; margin-bottom: 18px; letter-spacing: 3px; }
        .reviewCard p { color: #e7efe9; font-size: 20px; line-height: 1.55; margin-bottom: 20px; }
        .reviewCard strong { color: #7de693; }
        .faqList { display: grid; gap: 16px; margin-top: 40px; }
        .faqList summary { cursor: pointer; font-size: 22px; font-weight: 900; }
        .faqList details p { color: #bfc3d6; font-size: 19px; line-height: 1.55; margin-top: 16px; }
        .hoursBox { margin-top: 36px; max-width: 620px; }
        .hoursBox p { color: #e7efe9; font-size: 22px; line-height: 1.8; }
        .seoLocal { background: #08160c; border-top: 1px solid #1f3525; border-bottom: 1px solid #1f3525; max-width: 100%; padding-left: max(16px, calc((100vw - 1220px) / 2)); padding-right: max(16px, calc((100vw - 1220px) / 2)); }
        .contact { display: grid; grid-template-columns: 1fr 420px; gap: 50px; background: #101c13; max-width: 100%; padding-left: max(16px, calc((100vw - 1220px) / 2)); padding-right: max(16px, calc((100vw - 1220px) / 2)); }
        @media (max-width: 900px) {
          .footerGrid { grid-template-columns: 1fr; }
        }
        .contactLine { font-size: 24px; margin-top: 30px; line-height: 1.45; }
        .form { background: #06110a; border: 1px solid #1f3525; border-radius: 32px; padding: 28px; display: flex; flex-direction: column; gap: 16px; }
        .form input, .form textarea { width: 100%; padding: 17px; border-radius: 16px; border: 1px solid #294933; background: #0b1c10; color: #fff; font-size: 16px; outline: none; }
        .form button { background: #42b35e; color: #000; border: none; border-radius: 18px; padding: 17px; font-weight: 900; font-size: 16px; cursor: pointer; }
        .mapBox iframe { border-radius: 28px; overflow: hidden; }
        .mapActions { margin-top: 22px; display: flex; justify-content: flex-start; }
        .whatsapp { position: fixed; right: 24px; bottom: 24px; width: 68px; height: 68px; border-radius: 50%; background: linear-gradient(135deg, #22c55e, #86efac); color: #06110a; display: flex; align-items: center; justify-content: center; font-size: 32px; z-index: 30; box-shadow: 0 18px 40px rgba(34,197,94,.35); border: 3px solid rgba(255,255,255,.18); animation: pulseWhats 1.7s infinite; transition: .25s ease; }
        .whatsapp:hover { transform: scale(1.08); box-shadow: 0 22px 55px rgba(34,197,94,.48); }
        .whatsapp span { display: block; transform: translateY(1px); }
        @keyframes pulseWhats {
          0% { box-shadow: 0 0 0 0 rgba(34,197,94,.45), 0 18px 40px rgba(34,197,94,.35); }
          70% { box-shadow: 0 0 0 16px rgba(34,197,94,0), 0 18px 40px rgba(34,197,94,.35); }
          100% { box-shadow: 0 0 0 0 rgba(34,197,94,0), 0 18px 40px rgba(34,197,94,.35); }
        }
        footer { background: #050b07; border-top: 1px solid #1f3525; color: #9ca3af; }
        .footerPro { padding: 0; }
        .footerGrid { max-width: 1220px; margin: 0 auto; padding: 56px 16px 34px; display: grid; grid-template-columns: 1.2fr .8fr 1fr; gap: 36px; }
        .footerBrand { display: flex; align-items: flex-start; gap: 18px; }
        .footerLogoWrap { width: 82px; height: 82px; border-radius: 50%; padding: 4px; background: linear-gradient(135deg, #42b35e, #ffffff22, #0b0b0b); flex-shrink: 0; }
        .footerLogoWrap img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; background: #fff; display: block; }
        .footerBrand h3 { color: #42b35e; font-size: 28px; font-weight: 900; letter-spacing: 1px; }
        .footerBrand p { color: #e5e7eb; margin-top: 6px; font-size: 18px; }
        .footerBrand span { display: block; margin-top: 10px; color: #9ca3af; font-size: 15px; }
        .footerCol h4 { color: #fff; font-size: 20px; margin-bottom: 18px; }
        .footerCol { display: flex; flex-direction: column; gap: 12px; }
        .footerCol a, .footerCol p { color: #c7d2d9; font-size: 16px; line-height: 1.6; }
        .footerCol a:hover { color: #7de693; }
        .footerWhats { margin-top: 10px; display: inline-flex; align-items: center; justify-content: center; width: fit-content; background: linear-gradient(135deg, #42b35e, #67d982); color: #000 !important; padding: 12px 18px; border-radius: 999px; font-weight: 900; }
        .footerBottom { border-top: 1px solid #1f3525; padding: 18px 16px 24px; text-align: center; color: #8b949e; font-size: 14px; }
        @media (max-width: 900px) {
          .header { min-height: auto; display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 14px; text-align: left; padding: 16px; }
          .brand { justify-content: flex-start; min-width: auto; width: auto; }
          .logoWrap { width: 72px; height: 72px; }
          .brand h1 { font-size: 26px; }
          .brand p { font-size: 14px; }
          .mobileMenuBtn { display: flex; width: 48px; height: 48px; border-radius: 14px; align-items: center; justify-content: center; background: #101c13; border: 1px solid #294933; color: #7de693; font-size: 28px; cursor: pointer; }
          nav { grid-column: 1 / -1; display: none; width: 100%; flex-direction: column; align-items: stretch; gap: 10px; padding: 14px; background: #07130b; border: 1px solid #1f3525; border-radius: 22px; font-size: 16px; }
          nav a { padding: 14px 16px; background: #101c13; border-radius: 14px; text-align: center; }
          nav a::after { display: none; }
          .menuToggle:checked ~ nav { display: flex; }
          .quoteBtn { grid-column: 1 / -1; width: 100%; text-align: center; padding: 14px 20px; }
          .stats { grid-template-columns: 1fr; margin-top: 0; border-radius: 0; }
          .hero { min-height: auto; }
          .heroBtns { flex-direction: column; align-items: flex-start; }
          .sectionTop { flex-direction: column; }
          .contact { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  )
}
