import { useEffect } from "react"

export default function App() {

  const whatsapp = "https://wa.me/5521970422836"

  const servicos = [
    { nome: "Turbinas", img: "/turbina.jpg" },
    { nome: "Freios", img: "/freio.jpg" },
    { nome: "Direção Hidráulica", img: "/direcao.jpg" },
    { nome: "Embreagem", img: "/embreagem.jpg" },
    { nome: "Cardans", img: "/cardan.jpg" },
    { nome: "Compressores", img: "/compressor.jpg" },
  ]

  useEffect(() => {
    const elements = document.querySelectorAll(".fade")
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
        }
      })
    })
    elements.forEach(el => observer.observe(el))
  }, [])

  return (
    <div style={wrapper}>

      {/* NAVBAR */}
      <nav style={nav}>
        <div style={containerFlex}>
          <h2 style={{ color: "orange" }}>NOVA TURBO</h2>
          <div style={menu}>
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#contato">Contato</a>
          </div>
          <a href={whatsapp} target="_blank">
            <button style={btn}>Orçamento</button>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="inicio" style={hero}>
        <div style={container}>
          <span style={badge}>Especialistas em turbinas</span>

          <h1 style={title}>
            Potência, confiança e manutenção para o seu veículo.
          </h1>

          <p style={text}>
            Trabalhamos com turbinas novas, recondicionadas e serviços completos.
          </p>

          <div>
            <a href={whatsapp} target="_blank">
              <button style={btn}>WhatsApp</button>
            </a>
            <a href="#servicos">
              <button style={btn2}>Ver Serviços</button>
            </a>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" style={section}>
        <div style={container} className="fade">
          <h2 style={subtitle}>SERVIÇOS</h2>
          <h1 style={title2}>Tudo que seu veículo precisa</h1>

          <div style={grid}>
            {servicos.map((s, i) => (
              <div key={i} style={card}>

                <div style={{ overflow: "hidden", borderRadius: "10px" }}>
                  <img
                    src={s.img}
                    style={img}
                    className="hover-img"
                  />
                </div>

                <h3>{s.nome}</h3>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section style={section}>
        <div style={container} className="fade">
          <h2 style={subtitle}>ORÇAMENTO</h2>

          <form style={form}>
            <input placeholder="Seu nome" style={input} />
            <input placeholder="Telefone" style={input} />
            <textarea placeholder="Descreva o serviço" style={input}></textarea>
            <button style={btn}>Enviar</button>
          </form>
        </div>
      </section>

      {/* MAPA */}
      <section style={section}>
        <div style={container} className="fade">
          <h2 style={subtitle}>LOCALIZAÇÃO</h2>

          <iframe
            src="https://www.google.com/maps?q=Rod.+Pres.+Dutra,+Nova+Iguaçu+-+RJ&output=embed"
            width="100%"
            height="300"
            style={{ border: "none", borderRadius: "10px" }}
          ></iframe>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" style={section}>
        <div style={container}>
          <h2>Contato</h2>
          <p>📞 (21) 97042-2836</p>
          <p>📍 Nova Iguaçu - RJ</p>
        </div>
      </section>

      {/* WHATSAPP FIXO */}
      <a href={whatsapp} target="_blank" style={whats}>
        💬
      </a>

      {/* FOOTER */}
      <footer style={footer}>
        © Nova Turbo Peças e Serviços - Fundada em 2008
      </footer>

      {/* CSS */}
      <style>
        {`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .fade {
          opacity: 0;
          transform: translateY(30px);
          transition: 0.6s;
        }

        .fade.show {
          opacity: 1;
          transform: translateY(0);
        }

        .hover-img {
          transition: transform 0.4s ease;
        }

        .hover-img:hover {
          transform: scale(1.1);
        }

        a {
          text-decoration: none;
          color: white;
        }
        `}
      </style>

    </div>
  )
}

/* ESTILOS */

const wrapper = {
  fontFamily: "Arial",
  background: "#0a0a0a",
  color: "white",
  overflowX: "hidden"
}

const container = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 20px"
}

const containerFlex = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}

const nav = {
  position: "sticky",
  top: 0,
  background: "#000",
  padding: "15px 0",
  zIndex: 10
}

const menu = {
  display: "flex",
  gap: "20px"
}

const hero = {
  padding: "100px 0",
  background: "linear-gradient(to right, #000, #331100)"
}

const section = {
  padding: "60px 0"
}

const title = {
  fontSize: "48px",
  maxWidth: "600px"
}

const title2 = {
  fontSize: "36px"
}

const subtitle = {
  color: "orange"
}

const text = {
  opacity: 0.8,
  maxWidth: "500px"
}

const badge = {
  border: "1px solid orange",
  padding: "5px 10px",
  borderRadius: "20px",
  color: "orange"
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "40px"
}

const card = {
  background: "#1a1a1a",
  padding: "15px",
  borderRadius: "10px"
}

const img = {
  width: "100%",
  height: "160px",
  objectFit: "cover"
}

const form = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  marginTop: "20px"
}

const input = {
  padding: "10px",
  borderRadius: "5px",
  border: "none"
}

const btn = {
  background: "orange",
  border: "none",
  padding: "10px 20px",
  borderRadius: "20px",
  cursor: "pointer"
}

const btn2 = {
  marginLeft: "10px",
  padding: "10px 20px",
  borderRadius: "20px",
  border: "1px solid white",
  background: "transparent",
  color: "white"
}

const whats = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  background: "green",
  padding: "15px",
  borderRadius: "50%"
}

const footer = {
  textAlign: "center",
  padding: "20px",
  background: "#000"
}