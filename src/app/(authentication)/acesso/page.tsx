import React, { Fragment } from "react";
import { Metadata } from "next";
import SignInForm from "@/components/forms/sign-in-form.component";


export const metadata: Metadata = {
  title: "Acesso | El Bogidon - Premium Barber App",
  description: "",
  // other metadata
};

export default function SignInPage(){
  return  <SignInForm />
};

