import { Navbar } from "@/components/navbar";


export default function BackendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
           
          <div className="relative flex flex-col h-screen bg-gradient-to-bl dark:from-sky-900/45 dark:to-slate-900/25">
           
            <main className=" pt-16 px-1 flex-grow bg-gradient-to-b dark:from-sky-900/5 dark:to-slate-900/5">
              {children}
            </main>
           
          </div>
       
    
  );
}
