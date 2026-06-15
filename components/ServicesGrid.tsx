const services = [
  "Продажа недвижимости",
  "Покупка недвижимости",
  "Новостройки",
  "Аренда",
  "Коммерческая недвижимость",
  "Загородная недвижимость",
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20">
      <div className="container-custom">

        <h2 className="text-3xl font-bold mb-8">
          Услуги
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s} className="border p-5 rounded">
              {s}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
