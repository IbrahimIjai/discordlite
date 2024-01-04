import { Button } from "@/components/ui/button";
import { DownloadCloud } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// download-mac.svg
// download-ios.svg
// download-desktop.svg
// download-andriod.svg

export default function Devices() {
  return (
    <div className="bg-white w-full p-8 mb-10 flex items-center justify-center">
      <div className="flex flex-col-reverse  lg:flex-row px-2 lg:w-4/5 mt-8 gap-8">
        <div className="flex flex-col gap-8 flex-1">
          {devicesImages1.map((item, i) => {
            return (
              <div
                key={i}
                className="flex flex-col items-center justify-between rounded-xl px-6 pt-8 h-[400px] lg:h-[550px] overflow-hidden bg-[#f6f6f6]"
              >
                <div className="mt-6 flex flex-col items-center gap-8">
                  <h1 className="text-lg font-bold"> {item.device}</h1>
                  {/* <span>{i}</span>
                  <span>{typeof(i)}</span> */}
                  <Link
                    className="bg-black text-white py-3 px-5 rounded-lg"
                    href={item.downloadlink}
                  >
                    Download
                  </Link>
                </div>

                <div
                  className={`overflow-hidden w-full ${
                    i == 0 ? "-mb-[40px] lg:-mb-[200px]" : "bg-red"
                  }`}
                >
                  <div className={`relative w-full h-[200px] lg:h-[450px]`}>
                    <Image
                      src={`/assets/${item.image}`}
                      alt={item.device}
                      fill
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <div className="bg-[#f6f6f6] gap-6 py-10 px-10 justify-center items-center rounded-md flex flex-col">
            <h1 className="font-bold text-xl text-start">Feeling experimental?</h1>
            <p>Try our Public Test Build and test new features before they launch.</p>
            <Button className="p-6 w-full bg-black text-white whitespace-nowrap">
              <DownloadCloud className="w-4 h-4 mr-4" />
              Download for Windows
            </Button>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-8 lg:mt-[180px]">
          {devicesImages2.map((item, i) => {
            return (
              <div
                key={i}
                className="flex flex-col items-center justify-between rounded-xl px-6 pt-8 h-[300px] lg:h-[530px] overflow-hidden bg-[#f6f6f6]"
              >
                <div className="my-4 mt-6 flex flex-col items-center gap-3">
                  <h1 className="text-lg font-bold"> {item.device}</h1>
                  <Link
                    className="bg-black text-white py-3 px-5 rounded-lg"
                    href={item.downloadlink}
                  >
                    Download
                  </Link>
                </div>

                <div
                  className={`overflow-hidden w-full ${
                    i == 0 ? "-mb-[90px] lg:-mb-[120px]" : "bg-red"
                  }`}
                >
                  <div className={`relative w-full h-[190px] lg:h-[380px]`}>
                    <Image
                      src={`/assets/${item.image}`}
                      alt={item.device}
                      fill
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const devicesImages1: {
  device: string;
  image: string;
  downloadlink: string;
}[] = [
  {
    device: "iOS",
    image: "download-ios.svg",
    downloadlink: "/download",
  },
  {
    device: "Mac",
    image: "download-mac.svg",
    downloadlink: "/download",
  },
];

const devicesImages2: {
  device: string;
  image: string;
  downloadlink: string;
}[] = [
  {
    device: "Andriod",
    image: "download-andriod.svg",
    downloadlink: "/download",
  },

  {
    device: "Windows",
    image: "download-desktop.svg",
    downloadlink: "/download",
  },
];
