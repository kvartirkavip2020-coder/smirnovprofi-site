const cases = [
  "Продажа квартиры за 18 дней",
  "Снижение цены покупки на 7%",
  "Ипотека одобрена за 2 дня",
  "Продажа без торга",
];

export default function Cases() {
  return (
    <section id="cases" className="py-20">
      <div className="container-custom">

        <h2 className="text-3xl font-bold mb-8">
          Кейсы
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <div key={c} className="border p-6 rounded">
              {c}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
