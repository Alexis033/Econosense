import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Features from "./components/Features.tsx";
import Contact from "./components/Contact.tsx";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Contact />
      </main>
      <footer className="bg-purple-dark text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 Econosense. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
