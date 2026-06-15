const items = [
  {
    title: "Ипотека",
    desc: "Помощь в подборе ипотечной программы через банки-партнёры.",
  },
  {
    title: "Страхование",
    desc: "Страхование недвижимости, ипотеки и сделок.",
  },
  {
    title: "Оценка недвижимости",
    desc: "Профессиональная оценка для продажи, ипотеки и суда.",
  },
  {
    title: "Юридическое сопровождение",
    desc: "Проверка документов и безопасность сделки.",
  },
  {
    title: "Кадастровые услуги",
    desc: "Подготовка технической документации и сопровождение.",
  },
  {
    title: "Ремонт",
    desc: "Партнёрские бригады для ремонта квартир и домов.",
  },
  {
    title: "Клининг",
    desc: "Подготовка объекта к продаже, аренде или заселению.",
  },
  {
    title: "Переезд",
    desc: "Организация перевозки имущества через проверенных подрядчиков.",
  },
  {
    title: "Дизайн интерьера",
    desc: "Создание современных интерьерных решений.",
  },
];

export default function OneWindowGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-graphite">
            Система «Одно окно»
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Все сопутствующие услуги доступны через одного специалиста.
            Вам не нужно искать отдельных подрядчиков —
            организационные вопросы берём на себя через сеть проверенных партнёров.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {items.map((item) => (
            <div
              key={item.title}
              className="
                bg-white
                rounded-2xl
                p-8
                border
                border-gray-100
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
                hover:border-yellow-400
              "
            >
              <h3 className="text-xl font-semibold text-graphite">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
