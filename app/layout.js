import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import Sidebar from "./components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Abdullah Portfolio",
  description: "My personal portfolio website",
};


export default async function RootLayout({ children }) {
  const headersList = await headers();
  const pathname = headersList.get("x-url-pathname") ?? "";
  const showSiteChrome = pathname !== "/under-construction";

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {showSiteChrome && <Sidebar />}
        {children}
      </body>
    </html>
  );
}
