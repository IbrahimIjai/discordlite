"use client";

import * as React from "react";
import Link from "next/link";
import {
  useSelectedLayoutSegment,
  useRouter,
  usePathname,
} from "next/navigation";
import { NavLinks } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "@/components/Icons";
import { DoorClosed, Menu } from "lucide-react";
import { Separator } from "../ui/separator";

export function MobileNav() {
  const segment = useSelectedLayoutSegment();
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 rounded-tl-lg overflow-hidden px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Icons.menu className="h-8 w-8 font-bold" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="px-8  bg-white text-black border-none overflow-hidden rounded-tl-[10px]"
      >
        <div className="">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Icons.logo className=" h-8 w-[8rem] text-black " />
          </Link>
        </div>

        <ScrollArea className="my-2 h-[calc(100vh-16rem)] pb-2 ">
          <Separator className="bg-gray-300" />
          <div className="mt-4 w-full">
            {NavLinks?.map((item, index) => (
              <MobileLink
                key={index}
                setIsOpen={setIsOpen}
                segment={String(segment)}
                href={item.href}
              >
                {item.title}
              </MobileLink>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps {
  children?: React.ReactNode;
  href: string;
  disabled?: boolean;
  segment: string;
  isButton?: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileLink({
  children,
  href,
  disabled,
  segment,
  setIsOpen,
  isButton,
}: MobileLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Button
      //   href={href}
      className={cn(
        "w-full p-6 text-lg bg-transparent text-left  justify-start",
        pathname && pathname == href && "text-[#00b0f4] bg-gray-300/90",
        disabled && "pointer-events-none opacity-60",
      )}
      onClick={() => {
        setIsOpen(false);
        router.push(href);
      }}
    >
      {children}
    </Button>
  );
}
