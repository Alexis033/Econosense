import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para optimizar tus decisiones?
          </h2>
          <p className="text-xl text-gray-600">
            Contacta con nuestro equipo de expertos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-light focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:purple-light focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:purple-light focus:border-transparent"
                ></textarea>
              </div>
              <button
                className="w-full bg-purple-light text-white py-3 rounded-lg font-semibold hover:bg-purple-dark transition"
                onClick={(event) => event.preventDefault()}
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-contrast p-3 rounded-lg">
                <Mail className="h-6 w-6 text-purple-light" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-gray-600">contacto@econosense.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-contrast p-3 rounded-lg">
                <Phone className="h-6 w-6 text-purple-light" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Teléfono</h3>
                <p className="text-gray-600">+57 (xxx) xxx-xxxx</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-contrast p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-purple-light" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Ubicación</h3>
                <p className="text-gray-600">
                  C--------, Piso --
                  <br />
                  Bogotá, Colombia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
