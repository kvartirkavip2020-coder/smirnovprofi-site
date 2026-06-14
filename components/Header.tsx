export default function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <div>
          <strong>SMIRNOVPROFI</strong>
        </div>

        <nav className="flex gap-6">
          <a href="/">Главная</a>
          <a href="#services">Услуги</a>
          <a href="#contacts">Контакты</a>
        </nav>
      </div>
    </header>
  );
}
