import { Inter } from "next/font/google";
import "./globals.css";
import 'leaflet/dist/leaflet.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Broadband Park Navigator",
  description: "City of Oshawa Broadband Park Navigator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <nav></nav>
      </body>
    </html>
  );
}
