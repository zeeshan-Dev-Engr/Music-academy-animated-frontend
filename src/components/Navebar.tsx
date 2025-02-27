"use client";


import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navebar_manu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navebar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-white shadow-md rounded-lg", className)}>
            <Menu setActive={setActive} className="flex justify-around p-4">
                <MenuItem setActive={setActive} active={active} item="Home" className="hover:text-gray-300 transition-colors duration-300">
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Our coures" className="hover:text-gray-300 transition-colors duration-300">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/web-dev" className="hover:underline">All coures</HoveredLink>
                        <HoveredLink href="/interface-design" className="hover:underline">Basic Music theory</HoveredLink>
                        <HoveredLink href="/seo" className="hover:underline">Advanced Compozetion</HoveredLink>
                        <HoveredLink href="/branding" className="hover:underline">Songwriting</HoveredLink>
                        <HoveredLink href="/branding" className="hover:underline">Music Production</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Contact Us" className="hover:text-gray-300 transition-colors duration-300">
                </MenuItem>
            </Menu>
        </div>
    )
}

export default Navebar