import { categoriasHabilidades } from "../data/dadosPortfolio";

function Habilidades() {
  return (
    <section id="skills" className="flex flex-col items-center text-center py-16 px-6 gap-6">
      <h2 className="text-xl md:text-2xl text-primary font-medium">Habilidades</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full mt-4 text-left">
        {categoriasHabilidades.map((categoria) => (
          <div
            key={categoria.titulo}
            className="p-5 rounded-lg border border-surface-border bg-surface-card flex flex-col"
          >
            <span className="text-primary font-mono text-sm font-semibold tracking-wider uppercase block mb-4">
              {categoria.titulo}
            </span>

            <div className="flex flex-wrap gap-2">
              {categoria.habilidades.map((habilidade) => (
                <span
                  key={habilidade}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-surface-pill border border-surface-border/60 text-text-body"
                >
                  {habilidade}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Habilidades;