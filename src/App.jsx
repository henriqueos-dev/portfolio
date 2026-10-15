import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';

function App() {
  return (
    <div className="min-h-screen bg-app text-white">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
      </main>
    </div>
  );
}

export default App;