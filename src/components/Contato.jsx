import { useState } from "react";
import iconeLinkedin from "../assets/linkedin.svg";
import iconeGithub from "../assets/github.svg";

function Contato() {
  const [copiado, setCopiado] = useState(false);
  const email = "henrique.olvslv@gmail.com";

  const copiarEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  const estiloStatus = copiado
    ? "border-emerald-500/80 text-emerald-400 bg-emerald-500/10"
    : "border-primary/60 text-primary hover:bg-primary/10";

  return (
    <section id="contato" className="flex flex-col items-center text-center py-16 px-6 gap-6">
      <h2 className="text-xl md:text-2xl text-primary font-medium">Vamos conversar?</h2>

      <p className="max-w-md text-text-body leading-relaxed">
        Estou disponível para oportunidades de estágio com foco em back-end e aberto a projetos sob demanda. Se você tem uma vaga aberta ou quer tirar uma solução do papel, mande um e-mail.
      </p>

      <div className="flex flex-col items-center gap-8 mt-2">
        <button
          type="button"
          onClick={copiarEmail}
          title="Clique para copiar o e-mail"
          className={`group inline-flex items-center gap-2 font-mono text-sm px-6 py-3 border rounded transition-all duration-200 cursor-pointer ${estiloStatus}`}
        >
          <span>{">"}</span>
          <span>{copiado ? "e-mail copiado!" : email}</span>
        </button>

        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/henriqueos"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted hover:text-white transition-colors"
            aria-label="Perfil no LinkedIn"
          >
            <img src={iconeLinkedin} alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/henriqueos-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted hover:text-white transition-colors"
            aria-label="Perfil no GitHub"
          >
            <img src={iconeGithub} alt="GitHub" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contato;