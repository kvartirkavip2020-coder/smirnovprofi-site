export default function ContactForm() {
  return (
    <section className="py-20">
      <div className="container-custom max-w-xl">

        <h2 className="text-3xl font-bold mb-6">
          Оставить заявку
        </h2>

        <form className="flex flex-col gap-4">

          <input placeholder="Имя" className="border p-3" />
          <input placeholder="Телефон" className="border p-3" />
          <textarea placeholder="Сообщение" className="border p-3" />

          <button className="bg-yellow-500 py-3 rounded">
            Отправить
          </button>

        </form>

      </div>
    </section>
  );
}
