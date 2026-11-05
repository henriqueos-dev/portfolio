import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Habilidades from './components/Habilidades';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Footer from './components/Footer';

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
      <Footer />
    </div>
  );
}

export default App;