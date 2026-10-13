import fotoPerfil from "../assets/fotoperfil.jpg";

function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center text-center py-16 px-6 gap-4">
      <img
        src={fotoPerfil}
        alt="Foto de perfil"
        className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-2 border-primary ring-4 ring-primary/20 shadow-xl transition-transform hover:scale-105 duration-300"
      />
      <p className="text-muted text-lg">Olá, eu sou</p>
      <h1 className="text-4xl font-bold text-white">Henrique</h1>
      <h2 className="text-xl md:text-2xl text-primary font-medium">
        Desenvolvedor de Software | Foco em Back-end
      </h2>
      <p className="max-w-xl text-muted">
        Focado no desenvolvimento de APIs com C# e Java, modelagem de bancos relacionais com SQL e interfaces dinâmicas em React.
      </p>

      <div className="flex gap-4">
        <a
          href="#projetos"
          className="group inline-flex items-center gap-2 font-mono text-sm px-4 py-2 border border-primary/60 text-primary hover:bg-primary/10 transition-all duration-200 rounded"
        >
          <span>{">"}</span>
          <span>projetos.listar()</span>
        </a>

        <a
          href="#contato"
          className="group inline-flex items-center gap-2 font-mono text-sm px-4 py-2 border border-surface-border hover:border-slate-400 text-slate-300 hover:text-white transition-all duration-200 rounded"
        >
          <span className="text-muted group-hover:text-white transition-colors">{">"}</span>
          <span>contato.abrir()</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;