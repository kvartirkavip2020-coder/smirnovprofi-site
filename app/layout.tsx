export const metadata = {
  title: "Сергей Смирнов — недвижимость",
  description: "Частный специалист по недвижимости"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
