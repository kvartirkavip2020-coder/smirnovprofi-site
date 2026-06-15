import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="contacts"
      className="bg-gray-900 text-white mt-20"
    >
      <div className="container-custom py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Бренд */}
          <div>

            <div className="flex items-center gap-3 mb-4">

              <Image
                src="/logo.jpeg"
                alt="Сергей Смирнов"
                width={50}
                height={50}
                className="rounded-full"
              />

              <div>
                <div className="font-bold">
                  Сергей Смирнов
                </div>

                <div className="text-sm text-gray-400">
                  Частный специалист по недвижимости
                </div>
              </div>

            </div>

            <p className="text-gray-400 text-sm">
              Помогаю безопасно покупать, продавать,
              сдавать и сопровождать сделки
              с недвижимостью в Екатеринбурге
              и по всей России через партнёрскую сеть.
            </p>

          </div>

          {/* Услуги */}
          <div>

            <h3 className="font-semibold mb-4">
              Услуги
            </h3>

            <ul className="space-y-2 text-gray-400">

              <li>Продажа недвижимости</li>

              <li>Покупка недвижимости</li>

              <li>Новостройки</li>

              <li>Аренда</li>

              <li>Коммерческая недвижимость</li>

              <li>Загородная недвижимость</li>

            </ul>

          </div>

          {/* Контакты */}
          <div>

            <h3 className="font-semibold mb-4">
              Контакты
            </h3>

            <div className="space-y-2 text-gray-400">

              <p>Екатеринбург</p>

              <p>Работа по всей России</p>

              <p>ВКонтакте</p>

              <p>Telegram</p>

              <p>TenChat</p>

            </div>

          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} Сергей Смирнов.
            Все права защищены.
          </p>

          <p className="mt-2">
            Самозанятый (НПД).
          </p>

          <p className="mt-2">
            Информация на сайте не является публичной офертой.
          </p>

        </div>

      </div>
    </footer>
  );
}
