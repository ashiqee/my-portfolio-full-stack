import PortfolioFooter from "./_components/Footer";

import { Navbar } from "@/components/navbar";

export default function FrontLayout({
  banner,
  about,
  work,
  blogs,
  contact,
}: {
  banner: React.ReactNode;
  about: React.ReactNode;
  work: React.ReactNode;
  blogs: React.ReactNode;
  contact: React.ReactNode;
}) {
  return (
    <>
      <div className="relative  flex flex-col bg-gradient-to-bl dark:from-sky-900/45 dark:to-slate-900/25 z-10">
        <div className="bg-gradient-to-b  dark:from-pink-300/5 dark:to-slate-900/5">
          <Navbar />
          <div className="container  mx-auto max-w-7xl flex-grow">
            <section>{banner}</section>

            <section id="about">{about}</section>
            <section className=" pt-14 " id="projects">
              {work}
            </section>
            <section className=" pt-14 " id="blogs">
              {blogs}
            </section>
            <section className="" id="contact">
              {contact}
            </section>
          </div>
        </div>
        <PortfolioFooter />
      </div>
    </>
  );
}
