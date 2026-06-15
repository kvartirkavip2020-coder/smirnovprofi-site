import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* Фоновое изображение */}
      <Image
        src="/ekaterinburg.jpg"
        alt="Екатеринбург"
        fill
        priority
        className="object-cover"
      />

      {/* Затемнение */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Текст */}
          <div>

            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-400/30">
              Опыт с 2015 года • 35+ регионов России
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Помогаю безопасно покупать,
              продавать и сдавать недвижимость
            </h1>

            <p className="mt-6 text-xl text-gray-200 max-w-2xl">
              Частный специалист по недвижимости.
              Сопровождение сделок под ключ,
              проверка объектов и система
              «Одно окно» через сеть проверенных партнёров.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button className="gold-btn px-8 py-4 rounded-xl">
                Получить консультацию
              </button>

              <button className="border border-yellow-400 text-white px-8 py-4 rounded-xl">
                Подобрать объект
              </button>

            </div>

            {/* Преимущества */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl">
                <div className="text-2xl font-bold text-yellow-400">
                  10+
                </div>
                <div className="text-sm text-gray-200">
                  лет опыта
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl">
                <div className="text-2xl font-bold text-yellow-400">
                  35+
                </div>
                <div className="text-sm text-gray-200">
                  регионов
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl">
                <div className="text-2xl font-bold text-yellow-400">
                  100+
                </div>
                <div className="text-sm text-gray-200">
                  сделок
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl">
                <div className="text-2xl font-bold text-yellow-400">
                  9
                </div>
                <div className="text-sm text-gray-200">
                  услуг в одном окне
                </div>
              </div>

            </div>

          </div>

          {/* Фото */}
          <div className="hidden lg:flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full" />

              <Image
                src="/sergey-smirnov.png"
                alt="Сергей Смирнов"
                width={500}
                height={650}
                className="relative z-10"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
