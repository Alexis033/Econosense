import { LineChart, Shield, Clock, Zap } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Potencia tu estrategia empresarial
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestra plataforma integra los indicadores económicos más relevantes
            para tu industria
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex items-start space-x-4">
            <div className="bg-purple-contrast p-3 rounded-lg">
              <LineChart className="h-6 w-6 text-purple-light" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Análisis en Tiempo Real
              </h3>
              <p className="text-gray-600">
                Monitoreo continuo de indicadores clave para mantener tu empresa
                al día con las tendencias del mercado.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-purple-contrast p-3 rounded-lg">
              <Shield className="h-6 w-6 text-purple-light" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Datos Confiables</h3>
              <p className="text-gray-600">
                Información verificada de fuentes oficiales y organismos
                internacionales reconocidos.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-purple-contrast p-3 rounded-lg">
              <Clock className="h-6 w-6 text-purple-light" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Histórico Completo</h3>
              <p className="text-gray-600">
                Acceso a datos históricos para análisis de tendencias y
                proyecciones futuras.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-purple-contrast p-3 rounded-lg">
              <Zap className="h-6 w-6 text-purple-light" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Alertas Personalizadas
              </h3>
              <p className="text-gray-600">
                Configuración de alertas para mantenerte informado sobre cambios
                significativos en los indicadores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
