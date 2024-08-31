import { Inter } from "next/font/google";
import "./globals.css";
import SocketsProvider from "../../context/socket.context"; // Ensure the import path is correct

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RealtimeChatApp",
  description: "A real time chatApp for communication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SocketsProvider>{children}</SocketsProvider>
      </body>
    </html>
  );
}
