export default function TrustBlock() {
  const items = [
    "Опыт с 2015 года",
    "35+ регионов",
    "Система «Одно окно»",
    "Полное сопровождение",
    "Безопасные сделки",
    "Проверка объектов",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom grid md:grid-cols-3 gap-6">

        {items.map((i) => (
          <div key={i} className="bg-white p-6 rounded shadow">
            {i}
          </div>
        ))}

      </div>
    </section>
  );
}
