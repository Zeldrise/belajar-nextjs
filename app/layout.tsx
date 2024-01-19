'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "ini home",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const klik = (url: string) => {
    router.push(url);
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex w-full h-20 bg-green-500 item-center">
          <ul className="flex mx-auto m-2">
            <li className="px-2">
              <Link href="/" className="bg-red-200 rounded border">
                Home
              </Link>
            </li>
            <li className="px-2">
              <Link href="/dashboard" className="bg-red-200 rounded border">
                Dashboard
              </Link>
            </li>
            <li className="px-2">
              <Link href="/settings" className="bg-red-200 rounded border">
                Settings
              </Link>
            </li>
            <li className="px-2">
              <Link href="/calculator" className="bg-red-200 rounded border">
                Calculator
              </Link>
            </li>
            <li className="px-2">
              <Link href="/cari" className="bg-red-200 rounded border">
                Cari orang
              </Link>
            </li>
          </ul>
        </div>
        {children}
        <div className="flex w-full h-36 bg-green-500 item-center">
          <p className="w-30 h-10 bg-red-500 rounded-md m-2 transition-colors hover:bg-gray-400">
            footer example
          </p>
        </div>
      </body>
    </html>
  );
}
