"use client";

import * as React from "react";
import Link from "next/link";
import { NavLinks } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "@/components/Icons";
import { ArrowLeft, ArrowDown, ChevronDown } from "lucide-react";
import { Separator } from "../ui/separator";
import {
  useSelectedLayoutSegment,
  useRouter,
  usePathname,
} from "next/navigation";

export function SafetyNav({
  href,
  disabled,
}: {
  href?: string;
  disabled?: boolean;
}) {
  const segment = useSelectedLayoutSegment();
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "w-full p-6 text-lg bg-transparent text-left  justify-start",
            pathname && pathname == href && "text-[#00b0f4] bg-gray-300/90",
            disabled && "pointer-events-none opacity-60",
          )}
        >
          <span>Safety</span>
          <ChevronDown className="w-4 h-4 ml-3 text-black" />
        </Button>
      </SheetTrigger>
      <SheetContent
        showOverlay={false}
        side="right"
        className="px-8   bg-white text-black border-none overflow-hidden rounded-tl-[6px]"
      >
        <div
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-4"
        >
          <ArrowLeft className="w-8 h-8 text-black " />
          <span>Back</span>
        </div>

        <ScrollArea className="my-2 h-[calc(100vh-8rem)] text-lg pb-16">
          <Separator className="bg-gray-300" />
          <h1 className="mb-4 text-2xl">Safety Center</h1>
          <p>Overview</p>
          <Separator className="my-6" />

          <div className="mb-4">
            <h1 className="mb-4 text-2xl">Controlling Your Experience</h1>
            <ul className="flex flex-col gap-3 pl-2">
              {saftyCautions.map((item, i) => (
                <li key={i}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h1 className="mb-4 text-3xl">Controlling Your Experience</h1>
            <ul className="flex flex-col gap-3 pl-2">
              {saftyCautions.map((item, i) => (
                <li key={i}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h1 className="mb-4 text-3xl">Controlling Your Experience</h1>
            <ul className="flex flex-col gap-3 pl-2">
              {saftyCautions.map((item, i) => (
                <li key={i}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h1 className="mb-4 text-3xl">Controlling Your Experience</h1>
            <ul className="flex flex-col gap-3 pl-2">
              {saftyCautions.map((item, i) => (
                <li key={i}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </ScrollArea>
        <div className="border border-green-500 ">
          <Button className="bg-[#5865f2] w-full text-white">
            Download now
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface SafetyCaution {
  title: string;
  link: string;
}

const saftyCautions: SafetyCaution[] = [
  {
    title: "Four steps to a super safe account",
    link: "/safety/360043857751-Four-steps-to-a-super-safe-account",
  },
  {
    title: "Four steps to a super safe server",
    link: "/safety/360043653152-Four-steps-to-a-super-safe-server",
  },
  {
    title: "Role of administrators and moderators on Discord",
    link: "/safety/360044103531-Role-of-administrators-and-moderators-on-Discord",
  },
  {
    title: "Reporting problems to Discord",
    link: "/safety/360044103651-Reporting-problems-to-Discord",
  },
  {
    title: "Mental health on Discord",
    link: "/safety/360044103771-Mental-health-on-Discord",
  },
  {
    title: "Age-Restricted Content on Discord",
    link: "/safety/360043653552-Age-Restricted-Content-on-Discord",
  },
  {
    title: "Tips against spam and hacking",
    link: "/safety/360044104071-Tips-against-spam-and-hacking",
  },
];
