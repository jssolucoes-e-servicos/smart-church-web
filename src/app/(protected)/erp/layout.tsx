"use client"
import "@/styles/data-tables-css.css";
import "@/styles/globals.css";
import "@/styles/satoshi.css";
import 'react-loading-skeleton/dist/skeleton.css'
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SliderRight from "@/components/SliderbarRigth";
import Loader from "@/components/common/Loader";

import { Suspense, useState } from "react";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarRigthOpen, setSidebarRigthOpen] = useState(false);

  return (
    <html lang="pt_BR">
      <body suppressHydrationWarning={true}>
          <div className="dark:bg-boxdark-2 dark:text-bodydark">
            <Suspense fallback={<Loader/>}>
              <div className="flex h-screen overflow-hidden">
                <Sidebar
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                  <Header
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                    sidebarRigthOpen={sidebarRigthOpen}
                    setSidebarRigthOpen={setSidebarRigthOpen}
                  />
                  <main>
                    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                      {children}
                    </div>
                  </main>
                </div>
                <SliderRight 
                  sidebarRigthOpen={sidebarRigthOpen}
                  setSidebarRigthOpen={setSidebarRigthOpen}
                />
              </div>
            </Suspense>
          </div>
      </body>
    </html>
  );
}
