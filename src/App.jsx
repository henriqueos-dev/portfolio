import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Habilidades from './components/Habilidades';
import Projetos from './components/Projetos';
import Contato from './components/Contato';

function App() {
  return (
    <div className="min-h-screen bg-app text-white">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Habilidades />
        <Projetos />
        <Contato />
      </main>
    </div>
  );
}

export default App;