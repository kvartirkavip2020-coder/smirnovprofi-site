const items = [
  {
    title: "Ипотека",
    desc: "Подбор лучших условий и одобрение через банки-партнёры",
  },
  {
    title: "Страхование",
    desc: "Обязательные и добровольные программы под сделку",
  },
  {
    title: "Оценка недвижимости",
    desc: "Рыночная оценка для покупки, продажи и ипотеки",
  },
  {
    title: "Юридическое сопровождение",
    desc: "Проверка документов и безопасность сделки",
  },
  {
    title: "Кадастровые услуги",
    desc: "Оформление и корректировка объектов недвижимости",
  },
  {
    title: "Ремонт",
    desc: "Подготовка объекта к продаже или заселению",
  },
  {
    title: "Клининг",
    desc: "Профессиональная подготовка недвижимости",
  },
  {
    title: "Переезд",
    desc: "Организация перевозки и логистики",
  },
  {
    title: "Дизайн интерьера",
    desc: "Проектирование и визуализация пространства",
  },
];

export default function OneWindowGrid() {
  return (
    <section className="section">

      <div className="container-custom">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Система “Одно окно”
        </h2>

        <p className="text-gray-600 max-w-2xl mb-10">
          Полный цикл услуг через проверенных партнёров —
          от покупки квартиры до ремонта и заселения.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {items.map((i) => (
            <div
              key={i.title}
              className="card group hover:shadow-gold"
            >

              <div className="text-lg font-semibold mb-2 group-hover:text-gold transition">
                {i.title}
              </div>

              <div className="text-sm text-gray-600 leading-relaxed">
                {i.desc}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
