import imgEventup from "../assets/eventup-preview.png";
import imgMercado from "../assets/mercado-preview.png";

const listaProjetos = [
  {
    titulo: "EventUp",
    descricao:
      "Interface para busca e listagem de shows em tempo real via API da Ticketmaster, com autenticação simulada e persistência local de favoritos.",
    tecnologias: ["React", "Context API", "CSS Modules", "Ticketmaster API"],
    imagem: imgEventup,
    repositorio: "https://github.com/henriqueos-dev/eventup",
    deploy: "https://eventup-henriqueos.vercel.app",
  },
  {
    titulo: "Sistema de Caixa de Supermercado",
    descricao:
      "Aplicação de console para simulação de caixa, fluxo de compras e controle de estoque. Utiliza web scraping para catalogar produtos e SQLAlchemy com SQLite para persistência.",
    tecnologias: ["Python", "SQLAlchemy", "SQLite", "BeautifulSoup"],
    imagem: imgMercado,
    repositorio: "https://github.com/henriqueos-dev/sistema-mercado-scraping",
    deploy: null,
  },
];

function Projetos() {
  return (
    <section id="projetos" className="flex flex-col items-center text-center py-16 px-6 gap-6">
      <h2 className="text-xl md:text-2xl text-primary font-medium">Projetos em Destaque</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full text-left">
        {listaProjetos.map((projeto) => (
          <div
            key={projeto.titulo}
            className="rounded-lg border border-surface-border bg-slate-900/40 flex flex-col justify-between overflow-hidden group hover:border-slate-600 transition-colors"
          >
            <div>
              {projeto.imagem && (
                <div className="w-full h-48 overflow-hidden border-b border-surface-border bg-slate-950 flex items-center justify-center">
                  <img
                    src={projeto.imagem}
                    alt={`Prévia do projeto ${projeto.titulo}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <div className="p-5">
                <h3 className="text-primary font-mono text-sm font-semibold tracking-wider block mb-2">
                  {projeto.titulo}
                </h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed min-h-[4rem]">
                  {projeto.descricao}
                </p>

                <div className="flex flex-wrap gap-2 mb-2">
                  {projeto.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-slate-800/70 border border-surface-border/60 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 border-t border-surface-border/50 p-5 pt-4">
              <a
                href={projeto.repositorio}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-muted hover:text-primary transition-colors flex items-center gap-1"
              >
                <span>{">"}</span> repositório
              </a>
              {projeto.deploy && (
                <a
                  href={projeto.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-muted hover:text-primary transition-colors flex items-center gap-1"
                >
                  <span>{">"}</span> deploy
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;