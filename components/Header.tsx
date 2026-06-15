export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-black/5">
      
      <div className="container-custom flex justify-between items-center py-4">

        {/* LOGO */}
        <div className="font-bold text-lg tracking-tight">
          Сергей Смирнов
        </div>

        {/* NAV */}
        <nav className="flex gap-6 text-sm text-gray-700">

          <a
            href="/"
            className="hover:text-black transition relative group"
          >
            Главная
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gold group-hover:w-full transition-all"></span>
          </a>

          <a
            href="#services"
            className="hover:text-black transition relative group"
          >
            Услуги
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gold group-hover:w-full transition-all"></span>
          </a>

          <a
            href="#cases"
            className="hover:text-black transition relative group"
          >
            Кейсы
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gold group-hover:w-full transition-all"></span>
          </a>

          <a
            href="#about"
            className="hover:text-black transition relative group"
          >
            Обо мне
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gold group-hover:w-full transition-all"></span>
          </a>

          <a
            href="#contacts"
            className="px-4 py-2 rounded-xl bg-gold text-white hover:bg-gold-hover transition shadow-gold"
          >
            Консультация
          </a>

        </nav>

      </div>
    </header>
  );
}
