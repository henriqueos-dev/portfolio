function Sobre() {
  return (
    <section id="sobre" className="flex flex-col items-center text-center py-16 px-6 gap-6">
      <h2 className="text-xl md:text-2xl text-primary font-medium">Sobre mim</h2>

      <p className="max-w-xl text-muted leading-relaxed">
        Minha motivação na programação sempre esteve na estrutura que faz o sistema funcionar de verdade: lógica pura, fluxo de dados e integridade de regras. Encaro o desenvolvimento como um exercício de arquitetura, dedicando meu tempo a construir rotas bem definidas, consultas limpas e sistemas que não quebram sob exceções.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full mt-4 text-left">
        <div className="p-5 rounded-lg border border-surface-border bg-slate-900/40">
          <span className="text-primary font-mono text-sm block mb-1">01. Foco</span>
          <p className="text-slate-300 text-sm">
            Desenvolvimento de APIs REST com C# e Java, além de estruturação e consultas em bancos relacionais (SQL).
          </p>
        </div>

        <div className="p-5 rounded-lg border border-surface-border bg-slate-900/40">
          <span className="text-primary font-mono text-sm block mb-1">02. Formação</span>
          <p className="text-slate-300 text-sm">
            Cursando Análise e Desenvolvimento de Sistemas.
          </p>
        </div>

        <div className="p-5 rounded-lg border border-surface-border bg-slate-900/40">
          <span className="text-primary font-mono text-sm block mb-1">03. Princípios</span>
          <p className="text-slate-300 text-sm">
            Código limpo, organização com Git e foco na resolução prática dos problemas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sobre;