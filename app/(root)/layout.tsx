import type { Metadata } from "next";
import LeftSidebar from "@/components/ui/leftSidebar"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div><main>
    <LeftSidebar/>
    {children} 
   <p className="text-white-1">right sidebar</p></main>
   </div>
  );
}
