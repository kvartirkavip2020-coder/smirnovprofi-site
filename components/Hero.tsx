import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/ekaterinburg.jpg"
        alt="Город"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/55" />

      {/* CONTENT */}
      <div className="relative z-10 container-custom animate-fadeIn">

        <div className="max-w-3xl">

          {/* BADGE */}
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur">
            Работаю с недвижимостью с 2015 года • 35+ регионов
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Безопасные сделки с недвижимостью под ключ
          </h1>

          {/* SUBTITLE */}
          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
            Покупка, продажа и аренда недвижимости.
            Полное сопровождение сделок, проверка объектов,
            ипотека и система «Одно окно» через партнёрскую сеть.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a href="#contacts" className="gold-btn">
              Получить консультацию
            </a>

            <a
              href="#services"
              className="px-6 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition"
            >
              Подобрать объект
            </a>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">

            <div className="card bg-white/10 text-white backdrop-blur border border-white/10">
              <div className="text-2xl font-bold text-yellow-400">10+</div>
              <div className="text-sm text-gray-200">лет опыта</div>
            </div>

            <div className="card bg-white/10 text-white backdrop-blur border border-white/10">
              <div className="text-2xl font-bold text-yellow-400">35+</div>
              <div className="text-sm text-gray-200">регионов</div>
            </div>

            <div className="card bg-white/10 text-white backdrop-blur border border-white/10">
              <div className="text-2xl font-bold text-yellow-400">100+</div>
              <div className="text-sm text-gray-200">сделок</div>
            </div>

            <div className="card bg-white/10 text-white backdrop-blur border border-white/10">
              <div className="text-2xl font-bold text-yellow-400">9</div>
              <div className="text-sm text-gray-200">услуг</div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
