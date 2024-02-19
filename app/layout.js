import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Visits | Shortlink pemendek tautan URL",
  description:
    "Perpendek tautan panjang dengan cepat dan mudah menggunakan Website Visits.id. Tingkatkan berbagi tautan dan lacak statistik pengunjung.",
  keywords:
    "Short URL, pemendek URL, URL pendek, pendekkan tautan, pengalihan URL, pelacakan tautan",
  openGraph: {
    images: "/image/logo.jpg",
  },
  verification: {
    google: "M7smp6GOF5tNu2OC4jm7WhbeuzyeL2GQM-_tcjOe_xo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
