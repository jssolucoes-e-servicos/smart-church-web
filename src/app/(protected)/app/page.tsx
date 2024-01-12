import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | smartChurch - Gestão de Igrejas",
  description: "Acesso ao sistema de Gestão de Igrejas",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ECommerce />
    </>
  );
}
