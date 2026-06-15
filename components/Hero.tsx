import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">

      <Image
        src="/ekaterinburg.jpg"
        alt="Екатеринбург"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <div className="text-yellow-300 mb-4">
              Екатеринбург • Россия • С 2015 года
            </div>

            <h1 className="text-5xl font-bold text-white">
              Недвижимость без рисков и стресса
            </h1>

            <p className="text-gray-200 mt-6">
              Полное сопровождение сделок: покупка, продажа, аренда,
              ипотека и юридическая защита.
            </p>

            <div className="mt-8 flex gap-4">

              <a href="#contacts" className="bg-yellow-500 px-6 py-3 rounded">
                Получить консультацию
              </a>

              <a href="#services" className="border border-yellow-400 px-6 py-3 rounded text-white">
                Услуги
              </a>

            </div>

          </div>

          <div className="hidden lg:block">
            <Image
              src="/sergey-smirnov.png"
              alt="Сергей"
              width={380}
              height={500}
            />
          </div>

        </div>

      </div>

    </section>
  );
}
