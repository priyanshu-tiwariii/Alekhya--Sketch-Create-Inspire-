import "../globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionProvider from "../Providers/SessionProvider";
import ClientWrapper from "./ClientWrapper"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chitran - Sketch. Create. Inspire.",
  description: "Sketch-Create-Inspire",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <ClientWrapper>{children}</ClientWrapper>
        </SessionProvider>
      </body>
    </html>
  );
}
