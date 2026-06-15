const cases = [
  {
    title: "Продажа квартиры за 18 дней",
    desc: "Объект был выведен на рынок с точной ценовой стратегией и продан без затяжки сделки.",
    result: "18 дней",
  },
  {
    title: "Снижение цены покупки на 7%",
    desc: "Переговоры с продавцом позволили существенно снизить итоговую стоимость объекта.",
    result: "-7%",
  },
  {
    title: "Ипотека одобрена за 2 дня",
    desc: "Подготовка документов и подача через банки-партнёры ускорили процесс одобрения.",
    result: "2 дня",
  },
  {
    title: "Продажа без торга",
    desc: "Грамотная упаковка объекта позволила продать недвижимость по заявленной цене.",
    result: "0 торга",
  },
];

export default function Cases() {
  return (
    <section id="cases" className="section bg-gray-50">

      <div className="container-custom">

        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Кейсы
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {cases.map((c) => (
            <div
              key={c.title}
              className="card hover:shadow-gold group"
            >

              {/* RESULT BADGE */}
              <div className="inline-block mb-3 px-3 py-1 text-sm rounded-full bg-gold text-white">
                {c.result}
              </div>

              {/* TITLE */}
              <div className="text-lg font-semibold mb-2 group-hover:text-gold transition">
                {c.title}
              </div>

              {/* DESC */}
              <div className="text-sm text-gray-600 leading-relaxed">
                {c.desc}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
