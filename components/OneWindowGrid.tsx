const items = [
  "Ипотека",
  "Страхование",
  "Оценка недвижимости",
  "Юридическое сопровождение",
  "Кадастровые услуги",
  "Ремонт",
  "Клининг",
  "Переезд",
  "Дизайн интерьера",
];

export default function OneWindowGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">

        <h2 className="text-4xl font-bold mb-10">
          Система «Одно окно»
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i} className="border p-5 rounded-xl">
              {i}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
