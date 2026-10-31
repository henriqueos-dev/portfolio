import CardProjeto from "./CardProjeto";
import { listaProjetos } from "../data/dadosPortfolio";

function Projetos() {
  return (
    <section id="projetos" className="flex flex-col items-center text-center py-16 px-6 gap-6">
      <h2 className="text-xl md:text-2xl text-primary font-medium">Projetos em Destaque</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full text-left">
        {listaProjetos.map((projeto) => (
          <CardProjeto key={projeto.titulo} projeto={projeto} />
        ))}
      </div>
    </section>
  );
}

export default Projetos;