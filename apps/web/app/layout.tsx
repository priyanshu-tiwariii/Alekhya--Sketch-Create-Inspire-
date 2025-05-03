import "../globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionProvider from "../Providers/SessionProvider";
import ClientWrapper from "./ClientWrapper"; 
import ReduxProvider from "../Providers/ReduxProvider";
const inter = Inter({ subsets: ["latin"] });
<meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <ReduxProvider>
        <SessionProvider>
          <ClientWrapper>{children}</ClientWrapper>
        </SessionProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
