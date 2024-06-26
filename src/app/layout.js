import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";
import TokenHandler from "@/components/TokenHandler";
import MainProvider from "@/NoSSRProvider/MainProvider";
import Footer from "@/components/Footer";
// import TokenRequester from "@/components/Auth/tokenRequest";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FameWheels Auto Store",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ToastContainer />
        <div className="mx-auto">
          <MainProvider>
            <Navbar />
            {/* <TokenRequester /> */}
            <TokenHandler />
            {children}
          </MainProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
