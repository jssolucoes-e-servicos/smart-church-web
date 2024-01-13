
import ECommerce from "@/components/Dashboard/E-commerce";
import jsonParams from '@/configs/params.json';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: jsonParams.pages.protected.ava.dashboard.title,
  description: jsonParams.pages.protected.ava.dashboard.description,
  // other metadata
};

export default async function Home() {

  return (
    <>
<ECommerce />
    </>
  );
}
