const services = [
  "Продажа недвижимости",
  "Покупка недвижимости",
  "Новостройки",
  "Аренда",
  "Загородная недвижимость",
  "Коммерческая недвижимость",
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-10">Услуги</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
