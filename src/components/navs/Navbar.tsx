"use client";

import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";
import Image from "next/image";
import SignInButton from "../forms/SignInButton";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <div className="fixed top-0 z-10 flex h-[72px] w-full items-center justify-between bg-green-1 px-4 text-white md:h-[60px] md:px-8">
      <span className="font-castoro text-[1.25rem] italic">a Board</span>
      <SignInButton />
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Image
            src="/images/hamberger.svg"
            alt="Toggle Menu"
            width={24}
            height={24}
          />
        </SheetTrigger>
        <SheetContent className="border-none bg-green-1 text-white">
          <SheetTitle className="pb-6 pt-2">
            <Image
              src="/images/arrow-right.svg"
              alt="back arrow"
              width={16}
              height={12}
            />
          </SheetTitle>
          <SheetDescription />
          <nav className="mt-8 flex flex-col space-y-4">
            <NavLinks />
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
