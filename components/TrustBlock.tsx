export default function TrustBlock() {
  const items = [
    "Опыт работы с 2015 года",
    "Партнёрская сеть в 35+ регионах России",
    "Безопасное сопровождение сделок",
    "Помощь в ипотеке и страховании",
    "Система услуг «Одно окно»",
    "Индивидуальный подход к каждому клиенту",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">

        <h2 className="text-4xl font-bold text-center mb-12">
          Почему мне доверяют
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {items.map((item) => (
            <div
              key={item}
              className="bg-gray-50 p-8 rounded-2xl shadow"
            >
              ✓ {item}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
