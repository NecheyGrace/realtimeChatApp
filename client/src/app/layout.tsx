import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SocketsProvider from "../../context/socket.context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RealtimeChatApp",
  description: "A real time chatApp for communication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SocketsProvider>{children}</SocketsProvider>
      </body>
    </html>
  );
}
