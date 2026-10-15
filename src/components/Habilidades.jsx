const categorias = [
  {
    titulo: "Back-end",
    habilidades: ["C#", ".NET", "Java", "APIs REST", "POO"],
  },
  {
    titulo: "Banco de Dados",
    habilidades: ["SQL", "Modelagem Relacional", "SQL Server"],
  },
  {
    titulo: "Front-end & Ferramentas",
    habilidades: ["Git", "GitHub", "React", "JavaScript", "Tailwind CSS"],
  },
];

function Habilidades() {
  return (
    <section id="skills" className="flex flex-col items-center text-center py-16 px-6 gap-6">
      <h2 className="text-xl md:text-2xl text-primary font-medium">Habilidades</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full mt-4 text-left">
        {categorias.map((categoria) => (
          <div
            key={categoria.titulo}
            className="p-5 rounded-lg border border-surface-border bg-slate-900/40 flex flex-col"
          >
            <span className="text-primary font-mono text-sm font-semibold tracking-wider uppercase block mb-4">
              {categoria.titulo}
            </span>

            <div className="flex flex-wrap gap-2">
              {categoria.habilidades.map((habilidade) => (
                <span
                  key={habilidade}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-slate-800/70 border border-surface-border/60 text-slate-300"
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