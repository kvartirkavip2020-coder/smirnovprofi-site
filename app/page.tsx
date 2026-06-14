export default function HomePage() {
  return (
    <>
      <section className="py-24">
        <div className="container-custom">

          <h1 className="text-5xl font-bold mb-6">
            Сергей Смирнов
          </h1>

          <h2 className="text-2xl mb-6">
            Частный специалист по недвижимости
          </h2>

          <p className="text-lg max-w-3xl">
            Помогаю безопасно покупать, продавать,
            сдавать и обменивать недвижимость
            в Екатеринбурге и по всей России.
          </p>

        </div>
      </section>

      <section
        id="services"
        className="py-20 bg-gray-50"
      >
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-10">
            Услуги
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 bg-white rounded-xl shadow">
              Продажа недвижимости
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              Покупка недвижимости
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              Новостройки
            </div>

          </div>
        </div>
      </section>

      <section
        id="contacts"
        className="py-20"
      >
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-8">
            Контакты
          </h2>

          <p>
            Телефон: +7 (...)
          </p>
        </div>
      </section>
    </>
  );
}
