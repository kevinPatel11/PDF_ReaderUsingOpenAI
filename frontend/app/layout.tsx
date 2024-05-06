import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./components/SideBar";
import { getServerSession } from "next-auth";
import { SessionProvider } from "./api/auth/session"
import { options } from "./api/auth/[...nextauth]/options";
import Login from "./components/Login";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Q&A with us",
  description: "Your question we give possible answer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(options)
  console.log(session);
  return (
    <html lang="en">
      <head/>
      <body>
        <SessionProvider session={session}>
{!session ? (<Login/>):
         ( <div className="flex">

            <div className="bg-[#181e1e] max-w-xs h-screen overflow-y-auto md:min-w-[15rem]">
              <SideBar/>
            </div>
            <div className="bg-[#2c3636] flex-1">{children}</div>
          </div>)}
        </SessionProvider>
      </body>
      {/* <Toaster/> */}
    </html>
  );
}
