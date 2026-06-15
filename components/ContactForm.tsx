export default function ContactForm() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom max-w-3xl">

        <div className="text-center mb-10">

          <h2 className="text-4xl font-bold text-graphite">
            Получить консультацию
          </h2>

          <p className="mt-4 text-gray-600">
            Оставьте заявку и я свяжусь с вами для бесплатной консультации.
            Помогу разобраться в ситуации и предложу оптимальное решение.
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">

          <form className="flex flex-col gap-5">

            <input
              type="text"
              placeholder="Ваше имя"
              className="border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-yellow-500"
            />

            <input
              type="tel"
              placeholder="Телефон"
              className="border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-yellow-500"
            />

            <textarea
              rows={5}
              placeholder="Комментарий (необязательно)"
              className="border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-yellow-500"
            />

            <button
              type="submit"
              className="
                gold-btn
                py-4
                rounded-xl
                text-lg
                font-semibold
              "
            >
              Получить консультацию
            </button>

          </form>

          <p className="text-sm text-gray-500 mt-6 text-center">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            и обработкой персональных данных.
          </p>

        </div>

      </div>
    </section>
  );
}
