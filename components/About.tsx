import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section">

      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Обо мне
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Работаю в сфере недвижимости с 2015 года.
            Специализируюсь на сопровождении сделок,
            переговорах и безопасной покупке и продаже объектов.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            За это время выстроена система работы через партнёров:
            ипотека, юристы, оценка, ремонт и полное сопровождение
            сделки “под ключ”.
          </p>

          {/* HIGHLIGHTS */}
          <div className="grid grid-cols-2 gap-4 mt-8">

            <div className="card">
              <div className="text-xl font-bold text-gold">2015</div>
              <div className="text-sm text-gray-600">начало практики</div>
            </div>

            <div className="card">
              <div className="text-xl font-bold text-gold">35+</div>
              <div className="text-sm text-gray-600">регионов работы</div>
            </div>

            <div className="card">
              <div className="text-xl font-bold text-gold">100+</div>
              <div className="text-sm text-gray-600">успешных сделок</div>
            </div>

            <div className="card">
              <div className="text-xl font-bold text-gold">9</div>
              <div className="text-sm text-gray-600">сервисов в системе</div>
            </div>

          </div>

        </div>

        {/* IMAGE */}
        <div className="relative">

          {/* glow background */}
          <div className="absolute -inset-6 bg-gold/20 blur-3xl rounded-full" />

          <div className="relative card overflow-hidden">

            <Image
              src="/sergey-smirnov.png"
              alt="Сергей Смирнов"
              width={500}
              height={650}
              className="w-full h-auto object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}
