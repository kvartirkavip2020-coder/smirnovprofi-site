export default function TrustBlock() {
  const items = [
    "Опыт с 2015 года",
    "35+ регионов России",
    "Безопасные сделки",
    "Ипотека и страхование",
    "Система «Одно окно»",
    "Полное сопровождение",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">

        <h2 className="text-4xl font-bold mb-10 text-center">
          Почему мне доверяют
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              ✓ {i}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
