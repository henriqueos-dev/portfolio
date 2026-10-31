import { textosSobre } from "../data/dadosPortfolio";

function Sobre() {
  return (
    <section id="sobre" className="flex flex-col items-center text-center py-16 px-6 gap-6">
      <h2 className="text-xl md:text-2xl text-primary font-medium">Sobre mim</h2>

      <p className="max-w-xl text-muted leading-relaxed">
        Minha motivação na programação sempre esteve na estrutura que faz o sistema funcionar de verdade: lógica pura, fluxo de dados e integridade de regras. Encaro o desenvolvimento como um exercício de arquitetura, dedicando meu tempo a construir rotas bem definidas, consultas limpas e sistemas que não quebram sob exceções.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full mt-4 text-left">
        {textosSobre.map((item) => (
          <div key={item.id} className="p-5 rounded-lg border border-surface-border bg-surface-card">
            <span className="text-primary font-mono text-sm block mb-1">
              {item.id}. {item.titulo}
            </span>
            <p className="text-text-body text-sm">
              {item.descricao}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sobre;