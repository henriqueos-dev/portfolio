import iconeLinkedin from "../assets/linkedin.svg";
import iconeGithub from "../assets/github.svg";

function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-app border-b border-surface-border text-white">
      <div className="font-bold text-lg">Henrique Silva</div>

      <nav className="hidden md:flex gap-6">
        <a href="#hero" className="text-muted hover:text-primary transition-colors">Início</a>
        <a href="#sobre" className="text-muted hover:text-primary transition-colors">Sobre mim</a>
        <a href="#skills" className="text-muted hover:text-primary transition-colors">Habilidades</a>
        <a href="#projetos" className="text-muted hover:text-primary transition-colors">Projetos</a>
        <a href="#contato" className="text-muted hover:text-primary transition-colors">Contato</a>
      </nav>

      <nav className="flex items-center gap-4">
        <a 
          href="https://www.linkedin.com/in/henriqueos" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Perfil no LinkedIn"
          className="opacity-70 hover:opacity-100 transition-opacity"
        >
          <img src={iconeLinkedin} alt="LinkedIn" className="w-7 h-7" />
        </a>
        <a 
          href="https://github.com/henriqueos-dev" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Perfil no GitHub"
          className="opacity-70 hover:opacity-100 transition-opacity"
        >
          <img src={iconeGithub} alt="GitHub" className="w-7 h-7" />
        </a>
      </nav>
    </header>
  );
}

export default Navbar;