"use client";
import { DownloadCloud } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Icons } from "@/components/Icons";

export default function Heros() {
  return (
    <div className="px-8  bg-[#404eed] pt-[150px] w-full relative min-h-[800px] md:min-h-[70vh]  lg:min-h-[90vh]">
      <div className="w-full md:grid grid-cols-7 lg:flex">
        <div className="flex flex-col items-center w-full gap-8 z-40  md:items-start lg:items-center col-span-4">
          <h1 className="font-[900] text-4xl lg:text-6xl uppercase">
            Imagine a place...
          </h1>
          <p className="text-lg lg:w-3/5 lg:text-center">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
          <div className="flex flex-col  gap-5 lg:flex-row">
            <Button className="p-6 whitespace-nowrap">
              <DownloadCloud className="w-4 h-4 mr-4" />
              Download for Windows
            </Button>
            <Button className="p-6 text-white bg-black w-ful hover:bg-black/70 whitespace-nowrap">
              Open Discord in your browser <span className="h-4" />
            </Button>
          </div>
        </div>

        <div className="absolute h-full w-full inset-0 z-0">
          <div className="w-full h-full relative overflow-hidden">
            <Icons.herosbgSm className="w-[350px] lg:w-[600px] absolute  bottom-0 lg:left-[-280px] z-10 md:hidden lg:inline-flex" />
            <Icons.herosbgMd className="w-[600px] absolute bottom-0 -right-[280px] z-10 hidden md:inline-flex" />
            <Icons.herosbgLg className="h-1/2 absolute bottom-0 inset-x-0 z-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
