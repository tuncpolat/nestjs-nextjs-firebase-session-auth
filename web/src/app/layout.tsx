import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";
import "@/styles/tailwind.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Title",
  description: "Your Description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={clsx(
        "h-full",
        inter.className
      )}
    >
      <body className="flex flex-col md:h-full">{children}</body>
    </html>
  );
}
