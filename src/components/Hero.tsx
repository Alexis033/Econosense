import { TrendingUp, PieChart, Globe2 } from "lucide-react";

export default function Hero() {
  return (
    <div
      id="hero"
      className="pt-24 pb-16 bg-gradient-to-br from-purple-contrast to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Anticipa la demanda, ajusta tu estrategia y lidera en Salud y
            Belleza
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transformamos indicadores económicos complejos en insights
            accionables para impulsar el crecimiento de tu empresa
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-purple-light text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-dark transition">
              Comenzar ahora
            </button>
            <button className="border-2 border-purple-light text-purple-light px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition">
              Ver demo
            </button>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
            <TrendingUp className="h-12 w-12 text-purple-light mb-4" />
            <h3 className="text-xl font-semibold mb-2">Análisis Predictivo</h3>
            <p className="text-gray-600">
              Anticipate tendencias del mercado con modelos predictivos
              avanzados
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
            <PieChart className="h-12 w-12 text-purple-light mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Visualización de Datos
            </h3>
            <p className="text-gray-600">
              Dashboards interactivos que simplifican la toma de decisiones
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
            <Globe2 className="h-12 w-12 text-purple-light mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cobertura Nacional</h3>
            <p className="text-gray-600">
              Indicadores económicos del mercado nacional
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
