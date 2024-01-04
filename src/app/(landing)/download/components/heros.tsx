"use client";
import { DownloadCloud } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HerosDownloadPage() {
  return (
    <div className="px-3 lg:px-20 bg-[#23272a] text-white flex items-center justify-center pt-12 lg:pt-[80px] w-full  min-h-[600px] md:min-h-[70vh]  lg:min-h-[60vh]">
      <div className="flex flex-col lg:flex-row w-full">
        <div className="flex-1 z-40 flex flex-col items-start w-full gap-8">
          <h1 className="font-[900] text-4xl lg:text-6xl uppercase">
            GET DISCORD
            <br /> FOR ANY DEVICE
          </h1>
          <p className="text-lg lg:w-3/5 text-start">
            An adventure awaits. Hang out with your friends on our desktop app
            and keep the conversation going on mobile.
          </p>
          <div className="flex flex-col justify-start w-full gap-5 items-center lg:flex-row">
            <Button className="p-6 bg-[#404eee] text-white whitespace-nowrap">
              <DownloadCloud className="w-4 h-4 mr-4" />
              Download for Windows
            </Button>
            <span>Windows 7 or higher</span>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative w-full h-[326px]">
            <Image
              src="/assets/herospage-download.svg"
              alt="discord snipper"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
}
