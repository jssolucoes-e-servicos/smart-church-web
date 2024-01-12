import React, { Fragment } from "react";
import { Metadata } from "next";
import SignInForm from "@/components/forms/sign-in-form.component";

export const metadata: Metadata = {
  title: "Acesso | smartChurch - Gestão de Igrejas",
  description: "Acesso ao sistema de Gestão de Igrejas",
  // other metadata
};

export default function SignInPage(){
  
  return (
    <Fragment>
      <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
        <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
          <span className="mb-1.5 block font-medium">Acesso ao</span>
          <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
            smartChurch - Gestão de Igrejas
          </h2>
          <SignInForm />
        </div>
      </div>
    </Fragment>
  );
};