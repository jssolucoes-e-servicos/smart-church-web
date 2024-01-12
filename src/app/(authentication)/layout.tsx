"use client";
import "@/styles/globals.css";
//import "@/styles/satoshi.css";
import { Fragment, useState, useEffect } from "react";
import Loader from "@/components/common/Loader";
import Link from "next/link";
import Image from "next/image";
import { Toaster } from 'react-hot-toast';
import { Suspense } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="pt_BR">
      <body suppressHydrationWarning={true}>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <Suspense>
              <Toaster position="top-right"/>
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="flex flex-wrap items-center">
                  <div className="hidden w-full xl:block xl:w-1/2">
                    <div className="px-26 py-17.5 text-center">
                      <Link className="mb-5.5 inline-block" href="/acesso">
                        <h1 className="text-2xl font-semibold text-white">
                          smartChurh
                        </h1>
                        <Image
                          className="dark:hidden"
                          src={"/images/logo/logo-dark.svg"}
                          alt="Logo"
                          width={176}
                          height={32}
                        />
                      </Link>

                      <p className="2xl:px-20">
                        Plataforma para administração e gestão de Igrejas e Células
                      </p>
                    </div>
                  </div>
                  {children}
                </div>
              </div>
            </Suspense>
          </Fragment>
        )}
      </body>
    </html>
  );
}
