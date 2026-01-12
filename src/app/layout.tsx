import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ticket Bounty",
  description: "For learning purpose. Learn React and Nextjs Framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider>
          <Header />
          <main
            className="
          min-h-screen flex-1 
          overflow-y-auto 
          overflow-x-hidden 
          py-24 px-8 
          bg-secondary/20 
          flex flex-col"
          >
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
