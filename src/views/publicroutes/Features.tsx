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
            <div className="flex flex-col gap-4 text-lg items-start text-left mt-6 md:flex-1">
              <h1 className="font-bold md:text-4xl">{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#f6f6f6] text-center px-6 py-12 md:px-10 md:py-20 w-full">
        <h1 className="font-extrabold text-xl lg:text-3xl md:text-4xl uppercase ">
          Reliable tech for staying close
        </h1>
        <p className="text-lg mt-4">
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
      <div className="w-full px-6 pb-12 md:px-10 md:pb-20 flex item-center justify-center flex-col gap-8">
          <h1 className="font-extrabold text-xl lg:text-3xl md:text-4xl">
            Ready to start your journey?
          </h1>
          <Button className="bg-[#404eed] text-lg text-white">
            <DownloadCloud className="w-4 h-4 mr-2 font-bold" />
            Download for Windows
          </Button>
        </div>
    </div>
  );
}
