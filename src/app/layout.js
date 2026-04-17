import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import Provider from "@/lib/provider/Provider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/Components/Scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Keep Keeper",
  description: "Keep Keeper is a relationship management app designed to help you nurture and maintain your connections. With Keep Keeper, you can easily track important dates, set relationship goals, and stay connected with your friends and loved ones. Whether it's remembering birthdays, anniversaries, or simply staying in touch, Keep Keeper is your go-to app for keeping your relationships strong and thriving.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Provider>
          <ScrollToTop/>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
