import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { WhatsAppFab } from "../ui/ContactChannels";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
