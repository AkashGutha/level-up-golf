import React from "react";
import Footer from "../components/Footer/page";
import Header from "../components/Header/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
