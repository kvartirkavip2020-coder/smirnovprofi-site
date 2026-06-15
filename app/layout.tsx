import "../app/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Сергей Смирнов — недвижимость",
  description: "Частный специалист по недвижимости. Покупка, продажа, аренда, сопровождение сделок.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
