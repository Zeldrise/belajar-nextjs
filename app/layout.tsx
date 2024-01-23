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
  const menuItem=(url:string,title:string)=>(
<li className="px-2">
  <Link
    href={url}
    className="p-2 bg-transparent rounded-full border-4 border-blue-900 transition-colors hover:bg-blue-900 text-white "
  >
    {title}
  </Link>
</li>
  )
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex w-full h-20 bg-gray-500 item-center">
          <ul className="flex mx-auto my-auto">
            {menuItem("/", "Home")}
            {menuItem("/dashboard", "Dashboard")}
            {menuItem("/settings", "Settings")}
            {menuItem("/calculator", "Calculator")}
            {menuItem("/cari", "Cari orang")}
          </ul>
        </div>
        {children}
        <div className="flex mt-auto w-full h-20 bg-gray-500 item-center">
          <p className="bg-blue-900 rounded-full text-white mx-auto my-auto p-3 transition-colors hover:bg-blue-800">
            footer example
          </p>
        </div>
      </body>
    </html>
  );
}
