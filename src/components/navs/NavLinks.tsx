"use client";

import React from "react";
import { SheetClose } from "../ui/sheet";
import { NavItem } from "@/interfaces";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const links: NavItem[] = [
  {
    id: 1,
    label: "Home",
    href: "/",
    icon: "/images/home.svg",
  },
  {
    id: 2,
    label: "Our Blog",
    href: "/our-blog",
    icon: "/images/blog.svg",
  },
];

type NavLinksProps = {
  sideBarMode?: boolean;
};

const convertIconPath = (path: string): string => {
  return path.replace(/\.svg$/, "-black.svg");
};

export default function NavLinks({
  sideBarMode = false,
}: Readonly<NavLinksProps>) {
  const pathname = usePathname();

  return (
    <>
      {links.map((item) => {
        const isActive = item.href === pathname;

        if (!sideBarMode) {
          return (
            <SheetClose key={item.id} asChild>
              <Link
                href={item.href}
                className={cn(
                  "flex gap-3 rounded p-1 text-grey-1 focus:bg-green-2 focus:outline-none focus:ring-2 focus:ring-green-2",
                  isActive && "text-white",
                )}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={24}
                  height={24}
                  className={cn(
                    "object-contain brightness-90 filter",
                    isActive && "brightness-200",
                  )}
                />
                {item.label}
              </Link>
            </SheetClose>
          );
        }

        return (
          <div key={item.id} className="w-full">
            <Link
              href={item.href}
              className="flex gap-3 rounded p-1 text-black hover:text-green-2"
            >
              <Image
                src={convertIconPath(item.icon)}
                alt={item.label}
                width={24}
                height={24}
                className="object-contain"
              />
              {item.label}
            </Link>
          </div>
        );
      })}
    </>
  );
}
