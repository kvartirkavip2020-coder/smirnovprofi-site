import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* Фон */}
      <Image
        src="/ekaterinburg.jpg"
        alt="Екатеринбург"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* Затемнение (усилено для читаемости) */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ТЕКСТ */}
          <div>

            {/* бейдж */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-400/30 text-sm">
              Екатеринбург • Работаю по всей России • С 2015 года
            </div>

            {/* главный заголовок */}
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Помогаю безопасно купить,
              продать или сдать недвижимость
            </h1>

            {/* подзаголовок */}
            <p className="mt-6 text-xl text-gray-200 max-w-2xl leading-relaxed">
              Я беру на себя всю сложность сделки:
              проверку объекта, переговоры, ипотеку, документы
              и сопровождение до передачи ключей.
              <br /><br />
              Работаю как частный специалист через систему «Одно окно» с партнёрами в 35+ регионах России.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#contacts"
                className="gold-btn px-8 py-4 rounded-xl font-semibold"
              >
                Получить консультацию
              </a>

              <a
                href="#services"
                className="border border-yellow-400 text-white px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400/10 transition"
              >
                Подобрать объект
              </a>

            </div>

            {/* микро-доверие */}
            <div className="mt-10 space-y-2 text-gray-300 text-sm">

              <p>✓ Полное сопровождение сделки под ключ</p>
              <p>✓ Проверка недвижимости перед покупкой</p>
              <p>✓ Ипотека, страхование, юридическая защита</p>

            </div>

          </div>

          {/* ФОТО */}
          <div className="hidden lg:flex justify-center">

            <div className="relative">

              {/* световой ореол */}
              <div className="absolute inset-0 bg-yellow-500/10 blur-3xl rounded-full scale-110" />

              <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl p-4 rounded-2xl">

                <Image
                  src="/sergey-smirnov.png"
                  alt="Сергей Смирнов"
                  width={360}
                  height={500}
                  priority
                  className="object-contain rounded-xl"
                />

                <div className="mt-4 text-center text-white">

                  <p className="font-semibold">
                    Сергей Смирнов
                  </p>

                  <p className="text-sm text-gray-300">
                    Частный специалист по недвижимости
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
            }
