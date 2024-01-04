import React from "react";
import { MobileNav } from "./MobileNav";
import { Icons } from "../Icons";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavLinks } from "@/config/site";
import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import { useRouter } from "next/navigation";
async function Header({ bg }: { bg: "#404eed" | "#000" | "#23272a" }) {
  // const router = useRouter();
  // const profile = await initialProfile();

  // const server = await db.server.findFirst({
  //   where: {
  //     members: {
  //       some: {
  //         profileId: profile.id,
  //       },
  //     },
  //   },
  // });
  // console.log("this is server", server);
  return (
    <div
      className={`h-[90px] z-50 bg-[${bg}] w-full px-8 md:px-20 flex items-center justify-center`}
    >
      <div className="flex items-center justify-between w-full">
        <Icons.logo className=" h-8 w-[8rem] lg:w-[10rem]  lg:h-12 text-white" />
        <div className="items-center hidden lg:flex">
          {NavLinks.map(
            (item, i) =>
              i > 0 && (
                <DesktopLink href={item.href} key={i}>
                  {item.title}
                </DesktopLink>
              ),
          )}
        </div>
        <div className="flex items-center gap-3">
          <Button
            className="whitespace-nowrap"
            // onClick={()=>{
            //   server? router.push(`/servers/${server.id}`) : router.push("/sign-up")
            // }}
          >
            Open Discord
          </Button>
          <MobileNav />
        </div>
      </div>
    </div>
  );
}

export default Header;

interface DesktopLinkProps {
  children?: React.ReactNode;
  href: string;
  disabled?: boolean;
}
function DesktopLink({ children, href, disabled }: DesktopLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "w-full p-3 text-lg bg-transparent text-left font-semibold  text-white justify-start",
        disabled && "pointer-events-none opacity-60",
      )}
    >
      {children}
    </Link>
  );
}
