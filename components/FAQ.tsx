"use client";

import { useState } from "react";

const faq = [
  {
    q: "Как проходит сделка?",
    a: "Сделка проходит в несколько этапов: анализ объекта, проверка документов, подбор условий, сопровождение сделки до передачи ключей.",
  },
  {
    q: "Какие документы нужны?",
    a: "Паспорт, документы на объект недвижимости и при необходимости — дополнительные справки по конкретной ситуации.",
  },
  {
    q: "Сколько стоит сопровождение?",
    a: "Стоимость зависит от типа сделки и объекта. Обсуждается индивидуально после первичной консультации.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section bg-gray-50">

      <div className="container-custom">

        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          FAQ
        </h2>

        <div className="space-y-4">

          {faq.map((item, index) => (
            <div
              key={item.q}
              className="card cursor-pointer"
              onClick={() =>
                setOpen(open === index ? null : index)
              }
            >

              {/* QUESTION */}
              <div className="flex justify-between items-center">

                <div className="font-semibold">
                  {item.q}
                </div>

                <div className="text-gold text-xl">
                  {open === index ? "−" : "+"}
                </div>

              </div>

              {/* ANSWER */}
              {open === index && (
                <div className="mt-3 text-sm text-gray-600 leading-relaxed animate-fadeIn">
                  {item.a}
                </div>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
