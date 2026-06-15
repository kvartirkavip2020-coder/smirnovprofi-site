import Link from "next/link";

const services = [
  {
    title: "Продажа недвижимости",
    desc: "Профессиональная оценка, подготовка объекта и поиск покупателя.",
    link: "/sale",
  },
  {
    title: "Покупка недвижимости",
    desc: "Подбор объекта, проверка документов и сопровождение сделки.",
    link: "/buy",
  },
  {
    title: "Новостройки",
    desc: "Подбор квартир от застройщиков без переплат и скрытых комиссий.",
    link: "/newbuildings",
  },
  {
    title: "Аренда",
    desc: "Помощь арендодателям и арендаторам. Безопасное оформление.",
    link: "/rent",
  },
  {
    title: "Загородная недвижимость",
    desc: "Дома, коттеджи, участки и дачи в Екатеринбурге и области.",
    link: "/country",
  },
  {
    title: "Коммерческая недвижимость",
    desc: "Помещения для бизнеса, инвестиций и развития компаний.",
    link: "/commercial",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-graphite">
            Услуги
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Помогаю безопасно купить, продать, обменять или сдать недвижимость.
            Полное сопровождение сделки через сеть проверенных партнёров.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <Link
              key={service.title}
              href={service.link}
              className="
                bg-white
                p-8
                rounded-2xl
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
                border
                border-gray-100
                hover:border-yellow-400
                group
              "
            >
              <h3 className="text-2xl font-semibold text-graphite group-hover:text-yellow-600 transition">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {service.desc}
              </p>

              <div className="mt-6 text-yellow-600 font-medium">
                Подробнее →
              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}
