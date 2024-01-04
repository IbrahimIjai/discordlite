import React from "react";
import HerosDownloadPage from "./components/heros";
import Header from "@/components/layout/Header";
import Devices from "./components/downloads";
import Footer from "@/components/layout/Footer";
export default function DownloadPage() {
  return (
    <div className="bg-white text-black">
      <Header bg="#23272a" />
      <HerosDownloadPage />
      <Devices />
      <Footer/>
    </div>
  );
}
