import { Footer } from "@trex/components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import StyledComponentsRegistry from "../../lib/AntdRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "T-REX",
  description: "T-Rex Marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="trex">
      <body className={inter.className}>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <div className="max-w-[500px] mx-auto min-h-screen bg-white">
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          <Footer />
        </div>
      </body>
    </html>
  );
}
