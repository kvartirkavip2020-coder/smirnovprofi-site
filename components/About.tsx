import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container-custom grid md:grid-cols-2 gap-10">

        <div>
          <h2 className="text-3xl font-bold mb-6">
            Обо мне
          </h2>

          <p>
            Работаю с недвижимостью с 2015 года.
            Сопровождаю сделки от подбора до передачи ключей.
          </p>
        </div>

        <Image
          src="/sergey-smirnov.png"
          alt="Сергей"
          width={400}
          height={500}
        />

      </div>
    </section>
  );
}
