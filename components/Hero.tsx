import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      <Image
        src="/ekaterinburg.jpg"
        alt="Екатеринбург"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Левая колонка */}
          <div>

            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-400/30">
              Екатеринбург • Россия • Работаю по всей стране
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Помогаю безопасно покупать,
              продавать и сдавать недвижимость
            </h1>

            <p className="mt-6 text-xl text-gray-200 max-w-2xl">
              Сергей Смирнов — частный специалист по недвижимости.
              Полное сопровождение сделок, проверка объектов,
              ипотека, страхование и система «Одно окно».
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button className="gold-btn px-8 py-4 rounded-xl">
                Получить консультацию
              </button>

              <button className="border border-yellow-400 text-white px-8 py-4 rounded-xl">
                Подобрать объект
              </button>

            </div>

            {/* Цифры доверия */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">

              <div className="bg-white/10 backdrop-blur p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-yellow-400">
                  2015
                </div>
                <div className="text-sm text-gray-200">
                  начало практики
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-yellow-400">
                  35+
                </div>
                <div className="text-sm text-gray-200">
                  регионов РФ
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-yellow-400">
                  Под ключ
                </div>
                <div className="text-sm text-gray-200">
                  сопровождение
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-yellow-400">
                  Одно окно
                </div>
                <div className="text-sm text-gray-200">
                  9 услуг
                </div>
              </div>

            </div>

          </div>

          {/* Правая колонка */}

          <div className="hidden lg:flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 bg-yellow-500/10 blur-3xl rounded-full" />

              <Image
                src="/sergey-smirnov.png"
                alt="Сергей Смирнов"
                width={380}
                height={520}
                priority
                className="relative z-10 object-contain"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
