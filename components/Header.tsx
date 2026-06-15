export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container-custom flex justify-between items-center py-4">

        <div className="font-bold">
          Сергей Смирнов
        </div>

        <nav className="flex gap-6 text-sm">
          <a href="/">Главная</a>
          <a href="#services">Услуги</a>
          <a href="#cases">Кейсы</a>
          <a href="#about">Обо мне</a>
          <a href="#contacts">Контакты</a>
        </nav>

      </div>
    </header>
  );
}
