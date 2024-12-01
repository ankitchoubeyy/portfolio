import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ankit Choubey",
  description: "Showcasing my journey as a full stack developer with expertise in MERN, Python, and Django.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={ `bg-black text-white`}>
        <div>
        <NavBar />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}
