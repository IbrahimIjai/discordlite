import React from "react";
import LanguageSelect from "./LanguageSelect";
import { socialLinks, type SocialLink, footerLinks } from "@/config/site";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { Icons } from "../Icons";
import { Button } from "../ui/button";
function Footer() {
  return (
    <div className="bg-[#23272a] text-white w-full  px-8 py-20">
      <div className="grid w-full md:grid-cols-8">
        <div className="gap-6 pt-3 md:col-span-3">
          <LanguageSelect />
          <div className="flex items-center gap-6 my-12">
            {socialLinks.map((items, i) => (
              <SocialLink
                key={i}
                href={items.href}
                title={items.title}
                icon={items.icon}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:gap-20 md:col-span-4 lg:grid-cols-4">
          {footerLinks.map((item, i) => (
            <div key={i}>
              <h1 className="text-[#5865f2] font-semibold">{item.section}</h1>
              <div className="flex flex-col items-start mt-2 leading-9 text-left">
                {item.items.map((item, i) => (
                  <Link href={item.item} key={i} className="">
                    {item.item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Separator className="bg-[#5865f2] my-12" />

      <div className="flex items-center justify-between w-full ">
        <Icons.logo className=" h-8 w-[8rem] lg:w-[10rem]  lg:h-12 text-white" />
        <Button className="bg-[#5865f2] text-white">Open Discord</Button>
      </div>
    </div>
  );
}

export default Footer;

const SocialLink = ({ href, title, icon }: SocialLink) => {
  const MainIcon = icon ? icon : null;
  return (
    <Link href={href}>{MainIcon && <MainIcon className="w-6 h-6" />}</Link>
  );
};
