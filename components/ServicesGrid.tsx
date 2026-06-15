const services = [
  {
    title: "Продажа недвижимости",
    desc: "Быстрая и безопасная продажа объектов по рыночной цене",
  },
  {
    title: "Покупка недвижимости",
    desc: "Подбор объектов с проверкой юридической чистоты",
  },
  {
    title: "Новостройки",
    desc: "Сопровождение покупки у застройщиков и подбор лучших условий",
  },
  {
    title: "Аренда",
    desc: "Помощь в сдаче и поиске аренды без рисков",
  },
  {
    title: "Загородная недвижимость",
    desc: "Дома, участки, коттеджи — проверка и сопровождение",
  },
  {
    title: "Коммерческая недвижимость",
    desc: "Объекты под бизнес: офисы, помещения, инвестиции",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="section bg-gray-50">

      <div className="container-custom">

        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Услуги
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {services.map((s) => (
            <div
              key={s.title}
              className="card group cursor-pointer hover:shadow-gold"
            >

              <div className="text-lg font-semibold mb-2 group-hover:text-gold transition">
                {s.title}
              </div>

              <div className="text-sm text-gray-600 leading-relaxed">
                {s.desc}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
