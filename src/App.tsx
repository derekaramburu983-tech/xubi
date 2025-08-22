import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <header className="bg-[#14213D] text-white py-16 text-center">
        <h1 className="text-4xl font-bold">
          Inspira, moviliza y transforma en una sola noche
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Únete a líderes y donantes visionarios para impulsar nuestra causa con
          impacto medible. Haz tu donación hoy y sé parte del cambio.
        </p>
        <a
          href="#donar"
          className="mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-black"
          style={{ background: "#FCA311" }}
        >
          Donar ahora
        </a>
      </header>

      {/* PROPUESTA DE VALOR */}
      <section id="valor" className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Convierte tu generosidad en impacto real
        </h2>
        <ul className="space-y-4 text-lg">
          <li>✔ Historias de transformación respaldadas con datos</li>
          <li>✔ Experiencia premium diseñada para quienes donan con propósito</li>
          <li>✔ Procesos de donación transparentes y seguros</li>
        </ul>
      </section>

      {/* TESTIMONIOS */}
      <section
        id="testimonios"
        className="py-16 bg-gray-50 px-6 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Testimonios</h2>
        <blockquote className="mb-6">
          <p className="italic">
            "Nunca había visto un evento explicar tan claramente cómo mi donación
            se traduce en resultados reales."
          </p>
          <footer className="mt-2">– María G., Donante recurrente</footer>
        </blockquote>
        <blockquote>
          <p className="italic">
            "La experiencia fue impecable y profundamente humana. Sentí que cada
            peso aportado cuenta."
          </p>
          <footer className="mt-2">– Luis R., Aliado corporativo</footer>
        </blockquote>
      </section>

      {/* CTA FINAL */}
      <footer className="py-16 text-center bg-[#14213D] text-white">
        <h2 className="text-2xl font-bold mb-4">
          Tu apoyo puede transformar vidas
        </h2>
        <a
          href="#donar"
          className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-black"
          style={{ background: "#FCA311" }}
        >
          Donar ahora
        </a>
      </footer>
    </div>
  );
}
