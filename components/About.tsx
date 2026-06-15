import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-4xl font-bold mb-6">
            Обо мне
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Я частный специалист по недвижимости с 2015 года.
            Работаю по Екатеринбургу и всей России через партнёрскую сеть.
            <br /><br />
            Моя задача — полностью снять с клиента стресс сделки:
            от подбора объекта до передачи ключей.
          </p>

          <div className="mt-6 space-y-2 text-gray-700">
            <p>✔ 10+ лет практики</p>
            <p>✔ 35+ регионов</p>
            <p>✔ Система «Одно окно»</p>
            <p>✔ Юридическое сопровождение</p>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/sergey-smirnov.png"
            alt="Сергей Смирнов"
            width={420}
            height={560}
            className="rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
}
