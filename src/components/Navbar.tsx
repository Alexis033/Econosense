export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#hero">
            <div className="flex items-center space-x-2">
              <img
                src="\logo.jpg"
                alt="Econosense Logo"
                className="h-12 w-12 rounded-full"
              />
              <span className="text-xl font-bold text-purple-dark">
                Econosense
              </span>
            </div>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-purple-dark"
            >
              Características
            </a>
            <a href="#contact" className="text-gray-600 hover:text-purple-dark">
              Contacto
            </a>
            <button className="bg-purple-light text-white px-4 py-2 rounded-lg hover:bg-purple-dark transition">
              Solicitar Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
