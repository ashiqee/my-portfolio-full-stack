import PortfolioFooter from "../(frontend)/_components/Footer";

import { Navbar } from "@/components/navbar";

export default function FrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="relative  flex flex-col justify-between min-h-screen bg-gradient-to-bl dark:from-sky-900/45 dark:to-slate-900/25 z-10">
        <div className="bg-gradient-to-b  dark:from-pink-300/5 dark:to-slate-900/5">
          <Navbar />
          <div className="container  mx-auto max-w-7xl flex-grow">
            {children}
          </div>
        </div>
        <PortfolioFooter />
      </div>
    </>
  );
}
