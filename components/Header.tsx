import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="container-custom flex items-center justify-between py-4">

        {/* Логотип */}
        <a href="/" className="flex items-center gap-3">

          <Image
            src="/logo.jpeg"
            alt="Сергей Смирнов"
            width={50}
            height={50}
            className="rounded-full"
          />

          <div>
            <div className="font-bold text-lg text-gray-900">
              Сергей Смирнов
            </div>

            <div className="text-sm text-gray-500">
              Частный специалист по недвижимости
            </div>
          </div>

        </a>

        {/* Меню */}
        <nav className="hidden md:flex items-center gap-8 font-medium">

          <a
            href="/"
            className="hover:text-yellow-600 transition"
          >
            Главная
          </a>

          <a
            href="#services"
            className="hover:text-yellow-600 transition"
          >
            Услуги
          </a>

          <a
            href="#one-window"
            className="hover:text-yellow-600 transition"
          >
            Одно окно
          </a>

          <a
            href="#about"
            className="hover:text-yellow-600 transition"
          >
            Обо мне
          </a>

          <a
            href="#contacts"
            className="hover:text-yellow-600 transition"
          >
            Контакты
          </a>

        </nav>

      </div>
    </header>
  );
}
