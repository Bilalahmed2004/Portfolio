import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Figtree({ subsets: ["latin"], variable: "--font-body" });
export const metadata = {
  title: "Bilal Ahmed | MERN Stack Developer, Karachi",
  description: "Full stack developer building responsive React, Node.js and MongoDB web apps. Available for freelance work.",
  openGraph: { title: "Bilal Ahmed | MERN Stack Developer", description: "React, Node.js, Express and MongoDB apps built to client requirements." },
};
const themeInit = `try{document.documentElement.setAttribute('data-theme',localStorage.getItem('bt')||'dark')}catch(e){document.documentElement.setAttribute('data-theme','dark')}`;
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable}`}>
      <head><script dangerouslySetInnerHTML={{ __html: themeInit }} /></head>
      <body>{children}</body>
    </html>
  );
}
