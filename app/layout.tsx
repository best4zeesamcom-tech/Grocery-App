import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Nectar Grocery",
  description: "Online Grocery Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F9FAFB] text-gray-800">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}