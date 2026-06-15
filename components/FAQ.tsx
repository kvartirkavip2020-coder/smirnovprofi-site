const faq = [
  "Как проходит сделка?",
  "Какие документы нужны?",
  "Сколько стоит сопровождение?",
];

export default function FAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">

        <h2 className="text-3xl font-bold mb-8">
          FAQ
        </h2>

        {faq.map((f) => (
          <div key={f} className="border p-4 mb-3 rounded">
            {f}
          </div>
        ))}

      </div>
    </section>
  );
}
