import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Habilidades from './components/Habilidades';

function App() {
  return (
    <div className="min-h-screen bg-app text-white">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Habilidades />
      </main>
    </div>
  );
}

export default App;