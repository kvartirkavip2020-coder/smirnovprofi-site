const items = [
  "Ипотека",
  "Страхование",
  "Оценка недвижимости",
  "Юридическое сопровождение",
  "Ремонт",
  "Переезд",
  "Клининг",
  "Дизайн",
  "Кадастр",
];

export default function OneWindowGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">

        <h2 className="text-3xl font-bold mb-8">
          Система «Одно окно»
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {items.map((i) => (
            <div key={i} className="bg-white p-4 border rounded">
              {i}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
