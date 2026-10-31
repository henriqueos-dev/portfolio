function CardProjeto({ projeto }) {
  return (
    <div className="rounded-lg border border-surface-border bg-surface-card flex flex-col justify-between overflow-hidden group hover:border-surface-border-hover transition-colors">
      <div>
        {projeto.imagem && (
          <div className="w-full h-48 overflow-hidden border-b border-surface-border bg-app flex items-center justify-center">
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
          <p className="text-text-body text-sm mb-4 leading-relaxed min-h-[4rem]">
            {projeto.descricao}
          </p>

          <div className="flex flex-wrap gap-2 mb-2">
            {projeto.tecnologias.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono rounded bg-surface-pill border border-surface-border/60 text-text-body"
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
  );
}

export default CardProjeto;