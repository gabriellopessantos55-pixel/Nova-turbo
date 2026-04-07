export default function App() {
  const services = [
    {
      title: 'Turbinas Novas e Recondicionadas',
      description:
        'Venda e recuperação de turbinas automotivas para carros, caminhões e utilitários.',
      icon: '⚙️',
    },
    {
      title: 'Caixa de Direção Hidráulica',
      description:
        'Reparo e manutenção com peças de alta qualidade e testes completos.',
      icon: '🚗',
    },
    {
      title: 'Freios e Compressores',
      description:
        'Serviços especializados em freios a ar, válvulas e compressores.',
      icon: '🛠️',
    },
    {
      title: 'Cardans e Embreagens',
      description:
        'Balanceamento, troca de componentes e recondicionamento.',
      icon: '🔩',
    },
  ]

  const products = [
    'Turbo Sprinter CDI 311/313',
    'Turbina Renault Master 2.5',
    'Bi-Turbo Sprinter CDI 415/515',
    'Kit de Embreagem Pesada',
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-black tracking-wide text-orange-500">
              NOVA TURBO
            </h1>
            <p className="text-xs text-zinc-400">Peças e Serviços</p>
          </div>

          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#inicio" className="transition hover:text-orange-500">
              Início
            </a>
            <a href="#servicos" className="transition hover:text-orange-500">
              Serviços
            </a>
            <a href="#produtos" className="transition hover:text-orange-500">
              Produtos
            </a>
            <a href="#sobre" className="transition hover:text-orange-500">
              Quem Somos
            </a>
            <a href="#contato" className="transition hover:text-orange-500">
              Contato
            </a>
          </nav>

          <button className="rounded-2xl bg-orange-500 px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-orange-500/20 transition hover:scale-105 hover:bg-orange-400">
            Solicitar Orçamento
          </button>
        </div>
      </header>

      <section
        id="inicio"
        className="relative overflow-hidden border-b border-zinc-800"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.25),transparent_40%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="mb-4 inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-sm text-orange-300">
              Especialistas em turbinas automotivas
            </span>

            <h2 className="max-w-2xl text-4xl font-black leading-tight md:text-6xl">
              Potência, confiança e manutenção para o seu veículo.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              Trabalhamos com turbinas novas, recondicionadas e serviços
              completos em freios, direção hidráulica, compressores,
              cardans e embreagens.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-black transition hover:bg-orange-400">
                Fale no WhatsApp
              </button>
              <button className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold transition hover:border-orange-500 hover:text-orange-400">
                Ver Serviços
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900 p-6 shadow-2xl shadow-orange-500/10">
              <img
                src="/Turbina.jpeg"
                alt="Turbo automotivo"
                className="h-[420px] w-full rounded-3xl object-cover"
              />

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-zinc-950 p-4 text-center">
                  <p className="text-3xl font-black text-orange-500">15+</p>
                  <p className="mt-1 text-sm text-zinc-400">Anos de experiência</p>
                </div>
                <div className="rounded-2xl bg-zinc-950 p-4 text-center">
                  <p className="text-3xl font-black text-orange-500">100%</p>
                  <p className="mt-1 text-sm text-zinc-400">Peças testadas</p>
                </div>
                <div className="rounded-2xl bg-zinc-950 p-4 text-center">
                  <p className="text-3xl font-black text-orange-500">24h</p>
                  <p className="mt-1 text-sm text-zinc-400">Resposta rápida</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
            Nossos Serviços
          </p>
          <h3 className="text-4xl font-black">Tudo o que seu veículo precisa</h3>
          <p className="mt-4 text-zinc-400">
            Atendimento técnico especializado com peças de qualidade e
            garantia em todos os serviços.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-zinc-800 bg-zinc-900 p-6 transition hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              <div className="mb-5 text-4xl">{service.icon}</div>
              <h4 className="text-xl font-bold">{service.title}</h4>
              <p className="mt-3 leading-7 text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="produtos" className="border-y border-zinc-800 bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
                Produtos em Destaque
              </p>
              <h3 className="text-4xl font-black">As peças mais procuradas</h3>
            </div>

            <button className="w-fit rounded-2xl border border-zinc-700 px-5 py-3 font-semibold transition hover:border-orange-500 hover:text-orange-400">
              Ver catálogo completo
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product, index) => (
              <div
                key={product}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-5"
              >
                <div className="mb-5 flex h-48 items-center justify-center rounded-2xl bg-zinc-900 text-6xl">
                  ⚙️
                </div>
                <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-400">
                  Destaque #{index + 1}
                </span>
                <h4 className="mt-4 text-xl font-bold">{product}</h4>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  Produto com excelente desempenho, qualidade e garantia.
                </p>
                <button className="mt-6 w-full rounded-2xl bg-orange-500 py-3 font-semibold text-black transition hover:bg-orange-400">
                  Solicitar orçamento
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
              Quem Somos
            </p>
            <h3 className="text-4xl font-black">
              Tradição e qualidade em peças automotivas
            </h3>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Somos especialistas em peças e serviços automotivos, oferecendo
              atendimento rápido, produtos de qualidade e soluções sob medida
              para clientes de veículos leves e pesados.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-800 p-5">
                <p className="text-3xl font-black text-orange-500">500+</p>
                <p className="mt-1 text-zinc-400">Clientes atendidos</p>
              </div>
              <div className="rounded-2xl border border-zinc-800 p-5">
                <p className="text-3xl font-black text-orange-500">98%</p>
                <p className="mt-1 text-zinc-400">Satisfação garantida</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900 p-4">
            <img
              src="https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1200&q=80"
              alt="Oficina automotiva"
              className="h-[500px] w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      <section id="contato" className="border-t border-zinc-800 bg-zinc-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
              Contato
            </p>
            <h3 className="text-4xl font-black">Fale com nossa equipe</h3>
            <p className="mt-4 max-w-lg text-zinc-400">
              Solicite um orçamento ou tire suas dúvidas. Nossa equipe responde
              rapidamente.
            </p>

            <div className="mt-8 space-y-4 text-zinc-300">
              <p>📞 (21) 97042-2836</p>
              <p>📍 Rod. Pres. Dutra - Comendador Soares, Nova Iguaçu - RJ, 26280-490</p>
              <p>✉️ contato@novaturbo.com.br</p>
            </div>
          </div>

          <form className="space-y-4 rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8">
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-4 outline-none transition focus:border-orange-500"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-4 outline-none transition focus:border-orange-500"
            />
            <textarea
              rows={5}
              placeholder="Digite sua mensagem"
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-4 outline-none transition focus:border-orange-500"
            />
            <button className="w-full rounded-2xl bg-orange-500 py-4 font-bold text-black transition hover:bg-orange-400">
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-zinc-800 bg-black px-6 py-8 text-center text-sm text-zinc-500">
        Nova Turbo Peças e Serviços • Empresa fundada em 2008
      </footer>
    </div>
  )
}
