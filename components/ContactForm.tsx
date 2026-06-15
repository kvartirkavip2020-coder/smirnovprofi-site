export default function ContactForm() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom max-w-xl">

        <h2 className="text-3xl font-bold mb-6">
          Оставить заявку
        </h2>

        <form className="flex flex-col gap-4">

          <input className="border p-3 rounded" placeholder="Имя" />
          <input className="border p-3 rounded" placeholder="Телефон" />
          <textarea className="border p-3 rounded" placeholder="Комментарий" />

          <button className="gold-btn py-3 rounded">
            Отправить
          </button>

        </form>

      </div>
    </section>
  );
}
