"use client";

import NavLinks from "./NavLinks";

export default function AppSideBar() {
  return (
    <div className="fixed top-[60px] hidden flex-col gap-2 px-6 py-10 md:flex">
      <NavLinks sideBarMode />
    </div>
  );
}
