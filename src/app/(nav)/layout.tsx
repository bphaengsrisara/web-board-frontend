import AppSideBar from "@/components/navs/AppSideBar";
import Navbar from "@/components/navs/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default async function NavLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Navbar />
      <SidebarProvider className="mt-[72px] md:mt-[60px]">
        <AppSideBar />
        <main className="flex w-full justify-center">
          <div className="px-4 py-8 font-inter md:w-[70%] md:p-10">
            {children}
          </div>
        </main>
      </SidebarProvider>
    </>
  );
}
