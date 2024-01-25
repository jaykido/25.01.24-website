import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>This is the Presumed Header 😁</h1>
        {children}
        <h1>This is the main Layout</h1>
      </body>
    </html>
  );
}
