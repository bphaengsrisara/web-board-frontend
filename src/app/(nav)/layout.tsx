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
      <SidebarProvider>
        <AppSideBar />
        <main className="mt-[72px] flex w-full justify-center md:mt-[60px]">
          <div className="px-4 py-8 font-inter md:w-[70%] md:p-10">
            {children}
          </div>
        </main>
      </SidebarProvider>
    </>
  );
}
