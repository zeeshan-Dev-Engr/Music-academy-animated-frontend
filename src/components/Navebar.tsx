"use client";


import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navebar_manu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navebar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
         <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Home">
            </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Our coures">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">All coures</HoveredLink>
            <HoveredLink href="/interface-design">Basic Music theory</HoveredLink>
            <HoveredLink href="/seo">Advanced Compozetion</HoveredLink>
            <HoveredLink href="/branding">Songwriting</HoveredLink>
            <HoveredLink href="/branding">Music Production</HoveredLink>
          </div>
          </MenuItem>
           <link href="Contact"/>
           <MenuItem setActive={setActive} active={active} item="Contact Us">
            </MenuItem>
          </Menu>
    </div>
   )
}

export default Navebar