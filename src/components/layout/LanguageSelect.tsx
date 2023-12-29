import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

import React from "react";

function LanguageSelect() {
  return (
    <Select defaultValue={Language[0].name}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={Language[0].name} />
      </SelectTrigger>
      <SelectContent>
        {Language.map((item, i) => (
          <SelectItem key={i} value={item.name}>
            <div className="flex">
              <p>{item.name}</p>
              <div className="relative w-4 h-4">
                <Image
                  src={item.flag}
                  className="object-contain"
                  fill
                  alt="Alt showcase"
                />
              </div>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default LanguageSelect;

const Language = [
  {
    name: "English, USA",
    flag: "/assets/flags/usa.png",
  },
  {
    name: "Duetsch",
    flag: "/assets/flags/germany.png",
  },
  {
    name: "Espanol",
    flag: "/assets/flags/spain.png",
  },
];
