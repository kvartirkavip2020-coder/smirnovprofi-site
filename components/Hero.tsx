import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      
      {/* фон */}
      <Image
        src="/ekaterinburg.jpg"
        alt="Екатеринбург"
        fill
        className="object-cover opacity-30"
      />

      <div className="absolute inset-0 bg-white/70" />

      <div className="relative container-custom">
        <h1 className="text-5xl font-bold text-graphite">
          Сергей Смирнов
        </h1>

        <p className="mt-4 text-xl text-gray-700 max-w-2xl">
          Частный специалист по недвижимости. Покупка, продажа, аренда
          и сопровождение сделок под ключ.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="gold-btn px-6 py-3 rounded-lg">
            Получить консультацию
          </button>

          <button className="border border-gold px-6 py-3 rounded-lg">
            Подобрать объект
          </button>
        </div>
      </div>
    </section>
  );
}
