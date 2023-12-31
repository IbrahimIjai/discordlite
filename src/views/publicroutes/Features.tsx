import React from "react";
import { FeaturesList } from "@/config/site";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DownloadCloud } from "lucide-react";
export default function Features() {
  return (
    <div className="text-black ">
      <div>
        {FeaturesList.map((item, i) => (
          <div
            key={i}
            className={` ${
              item.isGrayBg && "bg-[#f6f6f6] md:flex-row-reverse"
            }  px-6 py-12 md:px-10 md:py-20 md:flex`}
          >
            <div className="relative w-full h-[200px] md:flex-1">
              <Image fill src={item.icons} alt={`image rep ${item.title}`} />
            </div>
            <div className="flex flex-col items-start gap-4 mt-6 text-lg text-left md:flex-1">
              <h1 className="font-bold md:text-4xl">{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#f6f6f6] text-center px-6 py-12 md:px-10 md:py-20 w-full">
        <h1 className="text-xl font-extrabold uppercase lg:text-3xl md:text-4xl ">
          Reliable tech for staying close
        </h1>
        <p className="mt-4 text-lg">
          Low-latency voice and video feels like youre in the same room. Wave
          hello over video, watch friends stream their games, or gather up and
          have a drawing session with screen share.
        </p>
        <div className="relative  w-full h-[198px] md:h-[617px] mt-6">
          <Image
            src="/assets/feature-showcase.svg"
            className="object-contain"
            fill
            alt="Alt showcase"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-8 px-6 py-12 text-center md:px-10 md:py-20">
          <h1 className="text-xl font-extrabold lg:text-3xl md:text-4xl">
            Ready to start your journey?
          </h1>
          <Button className="bg-[#404eed] text-lg text-white lg:w-fit">
            <DownloadCloud className="w-4 h-4 mr-2 font-bold " />
            Download for Windows
          </Button>
          <Button className="h-6 px-3 text-xs rounded-md">
            <DownloadCloud className="w-4 h-4 mr-2 font-bold " />
            Download for Windows
          </Button>
        </div>
    </div>
  );
}
