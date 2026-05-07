import { useEffect, useState } from 'react'

export default function App() {
  const whatsapp = 'https://wa.me/5521970422836'
  const instagram = 'https://www.instagram.com/novaturbo2009?igsh=MXFqOTVmNGRsd2cyag=='
  const maps = 'https://www.google.com/maps/search/?api=1&query=Pres.+Dutra,+21190+-+Comendador+Soares,+Nova+Iguaçu+-+RJ,+26280-520,+Brasil'

  const [form, setForm] = useState({ nome: '', telefone: '', servico: '' })

  const services = [
    {
      title: 'Turbinas Novas e Recondicionadas',
      text: 'Venda e recuperação de turbinas automotivas para carros, caminhões, vans e barcos.',
      icon: '⚙️',
      img: '/turbina.jpg',
    },
    {
      title: 'Troca do Conjunto Central',
      text: 'Substituição do conjunto central da turbina com avaliação técnica e serviço especializado.',
      icon: '✅',
      img: '/conjunto-central.jpg',
    },
  ]

  const products = [
    { name: 'Evoque 2.0', text: 'Produto com excelente desempenho, qualidade e garantia.', img: '/turbina1.jpg' },
    { name: 'Turbina L200 2.4', text: 'Alta performance e durabilidade para veículos utilitários.', img: '/turbina2.jpg' },
    { name: 'Turbina Hilux 3.0', text: 'Excelente desempenho para linha diesel.', img: '/turbina3.jpg' },
    { name: 'Turbina HR / Kia Bongo', text: 'Peça muito procurada para veículos de trabalho.', img: '/turbina4.jpg' },
  ]

  const brands = [
    { name: 'Garrett by Honeywell', img: '/garrett.jpg' },
    { name: 'Holset Turbochargers', img: '/holset.jpg' },
    { name: 'BorgWarner', img: '/borgwarner.jpg' },
  ]

  const gallery = [
    { title: 'Oficina', img: '/galeria1.jpg' },
    { title: 'Turbinas', img: '/galeria2.jpg' },
    { title: 'Peças', img: '/galeria3.jpg' },
    { title: 'Serviços', img: '/galeria4.jpg' },
  ]

  const faqs = [
    { q: 'Vocês trabalham com turbinas novas e recondicionadas?', a: 'Sim. Trabalhamos com venda, manutenção e recuperação de turbinas automotivas.' },
    { q: 'Fazem orçamento pelo WhatsApp?', a: 'Sim. Você pode enviar sua solicitação pelo formulário ou pelo botão de WhatsApp.' },
    { q: 'Atendem quais tipos de veículos?', a: 'Trabalhamos com turbinas para caminhões, carros, vans e até barcos.' },
    { q: 'As peças têm garantia?', a: 'Sim. Trabalhamos com peças testadas e serviços com garantia conforme avaliação técnica.' },
  ]

  useEffect(() => {
    document.title = 'Nova Turbo Peças e Serviços | Turbinas em Nova Iguaçu'

    let favicon = document.querySelector('link[rel="icon"]')
    if (!favicon) {
      favicon = document.createElement('link')
      favicon.setAttribute('rel', 'icon')
      document.head.appendChild(favicon)
    }
    favicon.setAttribute('href', '/logo.png')

    const description = 'Nova Turbo Peças e Serviços em Nova Iguaçu RJ. Especialistas em turbinas novas, recondicionadas, troca de reparo, conjunto central, balanceamento e diagnóstico em motores turbo.'
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
        <a href="#inicio" className="brand">
          <div className="logoWrap">
            <img src="/logo.png" alt="Logo Nova Turbo" />
          </div>
          <div>
            <h1>NOVA TURBO</h1>
            <p>Peças e Serviços</p>
          </div>
        </a>

        <input type="checkbox" id="menuToggle" className="menuToggle" />
        <label htmlFor="menuToggle" className="mobileMenuBtn">☰</label>

        <nav className="menu">
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

      <main>
        <section id="inicio" className="hero">
          <div className="container heroContent">
            <span className="tag">Especialistas em turbinas automotivas</span>
            <h2>Especialistas em turbinas para caminhões, carros, vans e barcos.</h2>
            <div className="heroList">
              <p>✔ Turbinas Novas e Recondicionadas</p>
              <p>✔ Serviço com Troca de Reparo e Troca do Conjunto Central</p>
              <p>✔ Diagnóstico especializado em Motores Turbo</p>
            </div>
            <div className="heroBtns">
              <a href={whatsapp} target="_blank" rel="noreferrer" className="greenBtn">Fale no WhatsApp</a>
              <a href="#servicos" className="darkBtn">Ver Serviços</a>
            </div>
          </div>
        </section>

        <section className="stats container">
          <div><strong>15+</strong><span>Anos de experiência</span></div>
          <div><strong>100%</strong><span>Peças testadas</span></div>
          <div><strong>24h</strong><span>Resposta rápida</span></div>
        </section>

        <section id="servicos" className="section container">
          <p className="label">NOSSOS SERVIÇOS</p>
          <h2>Tudo o que seu veículo precisa</h2>
          <p className="desc">Atendimento técnico especializado com peças de qualidade e garantia em todos os serviços.</p>

          <div className="serviceChecklist">
            <p>✔ Troca do Conjunto Central</p>
            <p>✔ Troca de Reparo</p>
            <p>✔ Balanceamento</p>
            <p>✔ Limpeza do Intercooler</p>
            <p>✔ Troca do Óleo do Motor</p>
          </div>

          <div className="grid servicesGrid">
            {services.map((service) => (
              <article className="card" key={service.title}>
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

        <section className="section whySection">
          <div className="container">
            <p className="label">POR QUE ESCOLHER A NOVA TURBO</p>
            <h2>Confiança, qualidade e atendimento especializado</h2>
            <div className="grid whyGrid">
              <div className="infoCard"><strong>🛡️</strong><h3>Garantia nos serviços</h3><p>Serviços realizados com cuidado técnico e peças testadas.</p></div>
              <div className="infoCard"><strong>⚡</strong><h3>Resposta rápida</h3><p>Atendimento ágil pelo WhatsApp para orçamentos e dúvidas.</p></div>
              <div className="infoCard"><strong>🔧</strong><h3>Especialistas em Turbinas</h3><p>Trabalhamos exclusivamente com turbinas para caminhões, carros, vans e até barcos.</p></div>
            </div>
          </div>
        </section>

        <section id="produtos" className="section productsSection">
          <div className="container">
            <div className="sectionTop">
              <div>
                <p className="label">PEÇAS MAIS VENDIDAS</p>
                <h2>Turbinas mais procuradas</h2>
              </div>
              <a href={whatsapp} target="_blank" rel="noreferrer" className="catalogBtn">Ver catálogo completo</a>
            </div>
            <div className="grid productsGrid">
              {products.map((product, index) => (
                <article className="productCard" key={product.name}>
                  <div className="productImageWrap"><img src={product.img} alt={product.name} /></div>
                  <span>Destaque #{index + 1}</span>
                  <h3>{product.name}</h3>
                  <p>{product.text}</p>
                  <a href={whatsapp} target="_blank" rel="noreferrer" className="greenBtn small">Solicitar orçamento</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section brandsSection container">
          <p className="label">MARCAS DE TURBINAS</p>
          <h2>Trabalhamos com as principais marcas de turbinas</h2>
          <p className="desc">Arraste para o lado e veja algumas das marcas de turbinas atendidas pela Nova Turbo.</p>
          <div className="brandsCarousel">
            {brands.map((brand) => (
              <article className="brandCard" key={brand.name}>
                <img src={brand.img} alt={brand.name} />
                <h3>{brand.name}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section gallerySection container">
          <p className="label">GALERIA</p>
          <h2>Fotos reais da oficina e dos serviços</h2>
          <div className="grid galleryGrid">
            {gallery.map((item) => (
              <article className="galleryCard" key={item.title}>
                <img src={item.img} alt={item.title} />
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section faqSection container">
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

        <section className="section hoursSection container">
          <p className="label">HORÁRIO DE FUNCIONAMENTO</p>
          <h2>Estamos prontos para atender você</h2>
          <div className="hoursBox">
            <p><strong>Segunda-feira:</strong> 08:00 - 17:00</p>
            <p><strong>Terça-feira:</strong> 08:00 - 17:00</p>
            <p><strong>Quarta-feira:</strong> 08:00 - 17:00</p>
            <p><strong>Quinta-feira:</strong> 08:00 - 17:00</p>
            <p><strong>Sexta-feira:</strong> 08:00 - 17:00</p>
            <p><strong>Sábado:</strong> Fechada</p>
            <p><strong>Domingo:</strong> Fechada</p>
          </div>
        </section>

        <section id="sobre" className="section about container">
          <p className="label">QUEM SOMOS</p>
          <h2>Tradição e qualidade em turbinas automotivas</h2>
          <p className="desc">A Nova Turbo Peças e Serviços atua desde 2008 oferecendo atendimento rápido, produtos de qualidade e soluções para motores turbo.</p>
          <div className="aboutHighlights">
            <div>⚙️ Turbinas Novas e Recondicionadas</div>
            <div>🔧 Serviço com Troca de Reparo e Troca do Conjunto Central</div>
            <div>🛠️ Diagnóstico especializado em Motores Turbo</div>
          </div>
        </section>

        <section className="section instagramSection container">
          <p className="label">INSTAGRAM</p>
          <h2>Acompanhe a Nova Turbo nas redes sociais</h2>
          <p className="desc">Veja fotos, serviços realizados, novidades e conteúdos sobre turbinas no Instagram oficial da empresa.</p>
          <a href={instagram} target="_blank" rel="noreferrer" className="instagramBtn">📸 Seguir @novaturbo2009</a>
        </section>

        <section id="contato" className="contactSection">
          <div className="container contactGrid">
            <div>
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
          </div>
        </section>

        <section className="mapBox container">
          <iframe src="https://www.google.com/maps?q=Pres.+Dutra,+21190+-+Comendador+Soares,+Nova+Iguaçu+-+RJ,+26280-520,+Brasil&output=embed" width="100%" height="330" style={{ border: 0 }} loading="lazy" title="Mapa Nova Turbo" />
          <div className="mapActions">
            <a href={maps} target="_blank" rel="noreferrer" className="greenBtn">Como chegar</a>
          </div>
        </section>
      </main>

      <a className="whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp"><span>💬</span></a>

      <footer className="footerPro">
        <div className="container footerGrid">
          <div className="footerBrand">
            <div className="footerLogoWrap"><img src="/logo.png" alt="Logo Nova Turbo" /></div>
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
            <p>📍 Pres. Dutra, 21190 - Comendador Soares, Nova Iguaçu - RJ, 26280-520, Brasil</p>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="footerWhats">Falar no WhatsApp</a>
          </div>
        </div>
        <div className="footerBottom">© {new Date().getFullYear()} Nova Turbo Peças e Serviços. Todos os direitos reservados.</div>
      </footer>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #06110a; overflow-x: hidden; }
        a { color: inherit; text-decoration: none; }
        img { max-width: 100%; }
        .site { min-height: 100vh; background: #06110a; color: #fff; font-family: Arial, Helvetica, sans-serif; overflow-x: hidden; width: 100%; }
        .container { width: min(1220px, calc(100% - 32px)); margin: 0 auto; }
        .header { min-height: 112px; display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 14px 24px; background: rgba(8, 9, 11, .96); border-bottom: 1px solid rgba(255,255,255,.08); position: sticky; top: 0; z-index: 20; box-shadow: 0 12px 35px rgba(0,0,0,.28); }
        .brand { display: flex; align-items: center; gap: 14px; min-width: 240px; }
        .logoWrap { width: 82px; height: 82px; border-radius: 50%; padding: 5px; background: linear-gradient(135deg, #42b35e, #ffffff22, #0b0b0b); flex-shrink: 0; }
        .logoWrap img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; background: #fff; display: block; }
        .brand h1 { color: #42b35e; font-size: 32px; letter-spacing: 2px; font-weight: 900; }
        .brand p { color: #c8c8c8; font-size: 15px; margin-top: 4px; }
        .menuToggle, .mobileMenuBtn { display: none; }
        .menu { display: flex; align-items: center; gap: 34px; font-size: 18px; font-weight: 800; }
        .menu a { position: relative; transition: .25s ease; }
        .menu a:hover { color: #67d982; }
        .quoteBtn, .greenBtn { background: linear-gradient(135deg, #42b35e, #67d982); color: #000; font-weight: 900; padding: 16px 26px; border-radius: 999px; box-shadow: 0 12px 30px rgba(66,179,94,.28); display: inline-block; transition: .25s ease; }
        .quoteBtn:hover, .greenBtn:hover { transform: translateY(-2px); }
        .hero { min-height: 620px; display: flex; align-items: center; padding: 80px 0; background: radial-gradient(circle at right, rgba(66,179,94,.18), transparent 38%), linear-gradient(90deg, #06110a 0%, #0b1c10 48%, #14331d 100%); }
        .heroContent { margin-left: max(16px, calc((100vw - 1220px) / 2)); }
        .tag { color: #9bf0ae; border: 1px solid rgba(66,179,94,.55); background: rgba(66,179,94,.08); padding: 10px 22px; border-radius: 999px; display: inline-block; font-size: 18px; margin-bottom: 34px; }
        .hero h2 { font-size: clamp(38px, 6vw, 76px); line-height: 1.12; font-weight: 900; max-width: 980px; margin-bottom: 26px; }
        .heroList { display: grid; gap: 10px; margin-top: 20px; }
        .heroList p { color: #e8e8e8; font-size: clamp(18px, 2.2vw, 25px); line-height: 1.5; font-weight: 700; }
        .heroBtns { display: flex; gap: 20px; margin-top: 42px; flex-wrap: wrap; }
        .darkBtn { border: 1px solid #3c3c46; border-radius: 999px; padding: 16px 28px; font-weight: 800; font-size: 18px; }
        .stats { margin-top: -48px; margin-bottom: 80px; padding: 24px; background: #101c13; border: 1px solid #1f3525; border-radius: 0 0 30px 30px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .stats div { background: #050b07; border-radius: 20px; padding: 28px 20px; text-align: center; }
        .stats strong { display: block; color: #42b35e; font-size: 42px; font-weight: 900; }
        .stats span { color: #bfc3d6; font-size: 18px; }
        .section { padding: 80px 0; }
        .label { color: #42b35e; font-weight: 900; letter-spacing: 8px; font-size: 18px; margin-bottom: 24px; }
        .section h2, .contactSection h2 { font-size: clamp(36px, 5vw, 56px); line-height: 1.1; font-weight: 900; margin-bottom: 24px; }
        .desc { color: #bfc3d6; font-size: 22px; line-height: 1.55; max-width: 820px; }
        .grid { display: grid; gap: 32px; margin-top: 52px; }
        .servicesGrid { grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); }
        .serviceChecklist { margin: 34px 0 46px; background: linear-gradient(135deg,#0c1f14,#07130b); border: 1px solid #1f3525; border-radius: 28px; padding: 28px; max-width: 620px; }
        .serviceChecklist p { color: #fff; font-weight: 900; font-size: 22px; line-height: 1.55; }
        .card, .infoCard, .galleryCard, .hoursBox, .faqList details { background: #101c13; border: 1px solid #1f3525; border-radius: 28px; padding: 26px; transition: .3s ease; }
        .card:hover, .infoCard:hover, .galleryCard:hover { transform: translateY(-8px); border-color: rgba(66,179,94,.45); box-shadow: 0 22px 50px rgba(66,179,94,.08); }
        .imageBox { height: 230px; overflow: hidden; border-radius: 22px; background: #101114; margin-bottom: 24px; }
        .imageBox img, .galleryCard img, .productImageWrap img { width: 100%; height: 100%; object-fit: cover; transition: transform .45s ease; display: block; }
        .card:hover img, .galleryCard:hover img, .productCard:hover img { transform: scale(1.06); }
        .icon { font-size: 44px; margin-bottom: 18px; }
        .card h3, .productCard h3, .infoCard h3 { font-size: 27px; margin-bottom: 16px; }
        .card p, .productCard p, .infoCard p { color: #bfc3d6; font-size: 19px; line-height: 1.65; }
        .whySection, .productsSection, .contactSection { max-width: 100%; background: #09170d; border-top: 1px solid #1f3525; border-bottom: 1px solid #1f3525; }
        .whyGrid { grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
        .infoCard strong { font-size: 40px; display: block; margin-bottom: 16px; }
        .sectionTop { display: flex; justify-content: space-between; gap: 30px; align-items: flex-start; }
        .catalogBtn { border: 1px solid #294933; border-radius: 24px; padding: 20px 28px; font-size: 20px; font-weight: 800; }
        .productsGrid { grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
        .productCard { background: #06110a; border: 1px solid #1f3525; border-radius: 30px; padding: 26px; }
        .productImageWrap { height: 230px; background: #101c13; border-radius: 22px; margin-bottom: 26px; overflow: hidden; }
        .productCard span { color: #7de693; background: rgba(66,179,94,.12); border-radius: 999px; padding: 9px 16px; display: inline-block; font-size: 16px; font-weight: 900; margin-bottom: 22px; }
        .small { margin-top: 22px; padding: 13px 20px; font-size: 15px; }
        .brandsCarousel { display: flex; gap: 22px; margin-top: 42px; overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 18px; -webkit-overflow-scrolling: touch; }
        .brandCard { min-width: 310px; scroll-snap-align: start; background: #101c13; border: 1px solid #294933; border-radius: 26px; padding: 22px; }
        .brandCard img { width: 100%; height: 170px; object-fit: contain; background: #fff; border-radius: 18px; padding: 16px; }
        .brandCard h3 { margin-top: 16px; color: #e7efe9; font-size: 21px; }
        .galleryGrid { grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
        .galleryCard { overflow: hidden; padding: 0; }
        .galleryCard img { height: 240px; }
        .galleryCard h3 { padding: 20px; font-size: 22px; }
        .faqList { display: grid; gap: 16px; margin-top: 40px; }
        .faqList summary { cursor: pointer; font-size: 21px; font-weight: 900; }
        .faqList details p { color: #bfc3d6; font-size: 18px; line-height: 1.55; margin-top: 16px; }
        .hoursBox { margin-top: 34px; max-width: 650px; }
        .hoursBox p { color: #e7efe9; font-size: 21px; line-height: 1.8; }
        .aboutHighlights { display: grid; gap: 14px; margin-top: 28px; max-width: 860px; }
        .aboutHighlights div { background: #101c13; border: 1px solid #294933; color: #e7efe9; padding: 16px 18px; border-radius: 18px; font-size: 18px; font-weight: 800; }
        .instagramBtn { margin-top: 30px; display: inline-flex; background: linear-gradient(135deg, #42b35e, #67d982); color: #000; padding: 18px 28px; border-radius: 999px; font-weight: 900; }
        .contactSection { padding: 80px 0; }
        .contactGrid { display: grid; grid-template-columns: 1fr 420px; gap: 50px; }
        .contactLine { font-size: 22px; margin-top: 28px; line-height: 1.45; overflow-wrap: anywhere; }
        .form { background: #06110a; border: 1px solid #1f3525; border-radius: 30px; padding: 26px; display: flex; flex-direction: column; gap: 16px; }
        .form input, .form textarea { width: 100%; padding: 16px; border-radius: 14px; border: 1px solid #294933; background: #0b1c10; color: #fff; font-size: 16px; outline: none; }
        .form button { background: #42b35e; color: #000; border: none; border-radius: 18px; padding: 17px; font-weight: 900; font-size: 16px; cursor: pointer; }
        .mapBox { padding: 80px 0; }
        .mapBox iframe { border-radius: 26px; overflow: hidden; max-width: 100%; }
        .mapActions { margin-top: 22px; }
        .whatsapp { position: fixed; right: 24px; bottom: 24px; width: 68px; height: 68px; border-radius: 50%; background: linear-gradient(135deg, #22c55e, #86efac); color: #06110a; display: flex; align-items: center; justify-content: center; font-size: 32px; z-index: 30; border: 3px solid rgba(255,255,255,.18); animation: pulseWhats 1.7s infinite; }
        @keyframes pulseWhats { 0% { box-shadow: 0 0 0 0 rgba(34,197,94,.45); } 70% { box-shadow: 0 0 0 16px rgba(34,197,94,0); } 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); } }
        .footerPro { background: #050b07; border-top: 1px solid #1f3525; color: #9ca3af; overflow: hidden; }
        .footerGrid { padding: 56px 0 34px; display: grid; grid-template-columns: 1.2fr .8fr 1fr; gap: 36px; }
        .footerBrand { display: flex; align-items: flex-start; gap: 18px; }
        .footerLogoWrap { width: 82px; height: 82px; border-radius: 50%; padding: 4px; background: linear-gradient(135deg, #42b35e, #ffffff22, #0b0b0b); flex-shrink: 0; }
        .footerLogoWrap img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; background: #fff; display: block; }
        .footerBrand h3 { color: #42b35e; font-size: 28px; font-weight: 900; }
        .footerBrand p { color: #e5e7eb; margin-top: 6px; font-size: 18px; }
        .footerBrand span { display: block; margin-top: 10px; color: #9ca3af; font-size: 15px; }
        .footerCol h4 { color: #fff; font-size: 20px; margin-bottom: 18px; }
        .footerCol { display: flex; flex-direction: column; gap: 12px; }
        .footerCol a, .footerCol p { color: #c7d2d9; font-size: 16px; line-height: 1.6; overflow-wrap: anywhere; }
        .footerWhats { margin-top: 10px; width: fit-content; background: linear-gradient(135deg, #42b35e, #67d982); color: #000 !important; padding: 12px 18px; border-radius: 999px; font-weight: 900; }
        .footerBottom { border-top: 1px solid #1f3525; padding: 18px 16px 24px; text-align: center; color: #8b949e; font-size: 14px; }
        @media (max-width: 950px) {
          .header { display: grid; grid-template-columns: 1fr auto; align-items: center; padding: 16px; gap: 14px; }
          .brand { min-width: auto; }
          .logoWrap { width: 68px; height: 68px; }
          .brand h1 { font-size: 25px; }
          .brand p { font-size: 14px; }
          .mobileMenuBtn { display: flex; width: 48px; height: 48px; border-radius: 14px; align-items: center; justify-content: center; background: #101c13; border: 1px solid #294933; color: #7de693; font-size: 28px; cursor: pointer; }
          .menu { grid-column: 1 / -1; display: none; width: 100%; flex-direction: column; align-items: stretch; gap: 10px; padding: 14px; background: #07130b; border: 1px solid #1f3525; border-radius: 22px; font-size: 16px; }
          .menu a { padding: 14px 16px; background: #101c13; border-radius: 14px; text-align: center; }
          .menuToggle:checked ~ .menu { display: flex; }
          .quoteBtn { grid-column: 1 / -1; width: 100%; text-align: center; padding: 14px 20px; }
          .hero { min-height: auto; padding: 70px 0; }
          .stats { grid-template-columns: 1fr; margin-top: 0; border-radius: 0; }
          .heroBtns, .sectionTop { flex-direction: column; align-items: flex-start; }
          .contactGrid, .footerGrid { grid-template-columns: 1fr; }
          .footerBrand { flex-direction: column; align-items: center; text-align: center; }
          .footerCol { align-items: center; text-align: center; }
          .footerWhats { width: 100%; max-width: 280px; text-align: center; }
          .serviceChecklist p { font-size: 18px; }
          .whatsapp { width: 60px; height: 60px; right: 18px; bottom: 18px; }
        }
      `}</style>
    </div>
  )
}
