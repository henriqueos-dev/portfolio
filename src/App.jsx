import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Habilidades from './components/Habilidades';
import Projetos from './components/Projetos';

function App() {
  return (
    <div className="min-h-screen bg-app text-white">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Habilidades />
        <Projetos />
      </main>
    </div>
  );
}

export default App;