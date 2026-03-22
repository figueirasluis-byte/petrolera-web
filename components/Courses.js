"use client";

export default function Courses() {
  return (
    <section className="py-20 px-6 bg-white text-black">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Cursos Disponibles
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <div className="border p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2">
            Seguridad Industrial
          </h3>
          <p className="text-gray-600 mb-4">
            Aprende normas y protocolos para trabajar en plataformas petroleras.
          </p>
          <a
            href="https://wa.me/529933979863"
            target="_blank"
            className="text-green-600 font-semibold"
          >
            Solicitar información →
          </a>
        </div>

        <div className="border p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2">
            Trabajos en Altura
          </h3>
          <p className="text-gray-600 mb-4">
            Certifícate para realizar trabajos seguros en estructuras elevadas.
          </p>
          <a
            href="https://wa.me/529933979863"
            target="_blank"
            className="text-green-600 font-semibold"
          >
            Solicitar información →
          </a>
        </div>

        <div className="border p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2">
            Espacios Confinados
          </h3>
          <p className="text-gray-600 mb-4">
            Capacitación para ingresar y trabajar en áreas de alto riesgo.
          </p>
          <a
            href="https://wa.me/529933979863"
            target="_blank"
            className="text-green-600 font-semibold"
          >
            Solicitar información →
          </a>
        </div>

      </div>

    </section>
  );
}