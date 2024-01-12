"use client";
import Loader from "@/components/common/Loader";
import "@/styles/data-tables-css.css";
import "@/styles/globals.css";
import "@/styles/satoshi.css";
import { Suspense, useEffect, useState } from "react";

import Header from "@/components/Header";
import Sidebar from "@/components/sidebar";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-black dark:text-bodydark">
          {loading ? (
            <Loader />
          ) : (
            <div className="flex h-screen overflow-hidden">
              <Suspense>
              <Toaster position="top-right"/>
              {/* <!-- ===== Sidebar Start ===== --> */}
              <Sidebar />
              {/* <!-- ===== Sidebar End ===== --> */}

              {/* <!-- ===== Content Area Start ===== --> */}
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                {/* <!-- ===== Header Start ===== --> */}
                <Header
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />
                {/* <!-- ===== Header End ===== --> */}

                {/* <!-- ===== Main Content Start ===== --> */}
                <main>
                  <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                    {children}
                  </div>
                </main>
                {/* <!-- ===== Main Content End ===== --> */}
              </div>
              {/* <!-- ===== Content Area End ===== --> */}
              </Suspense>
            </div>
          )}
        </div>
      </body>
    </html>
  );
}
