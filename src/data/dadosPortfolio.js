import imgEventup from "../assets/eventup-preview.png";
import imgMercado from "../assets/mercado-preview.png";

export const textosSobre = [
  {
    id: "01",
    titulo: "Foco",
    descricao: "Desenvolvimento de APIs REST com C# e Java, além de estruturação e consultas em bancos relacionais (SQL)."
  },
  {
    id: "02",
    titulo: "Formação",
    descricao: "Cursando Análise e Desenvolvimento de Sistemas."
  },
  {
    id: "03",
    titulo: "Princípios",
    descricao: "Código limpo, organização com Git e foco na resolução prática dos problemas."
  }
];

export const categoriasHabilidades = [
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

export const listaProjetos = [
  {
    titulo: "EventUp",
    descricao: "Interface para busca e listagem de shows em tempo real via API da Ticketmaster, com autenticação simulada e persistência local de favoritos.",
    tecnologias: ["React", "Context API", "CSS Modules", "Ticketmaster API"],
    imagem: imgEventup,
    repositorio: "https://github.com/henriqueos-dev/eventup",
    deploy: "https://eventup-henriqueos.vercel.app",
  },
  {
    titulo: "Sistema de Caixa de Supermercado",
    descricao: "Aplicação de console para simulação de caixa, fluxo de compras e controle de estoque. Utiliza web scraping para catalogar produtos e SQLAlchemy com SQLite para persistência.",
    tecnologias: ["Python", "SQLAlchemy", "SQLite", "BeautifulSoup"],
    imagem: imgMercado,
    repositorio: "https://github.com/henriqueos-dev/sistema-mercado-scraping",
    deploy: null,
  },
];