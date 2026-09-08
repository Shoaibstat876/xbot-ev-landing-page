import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"XBOT EV | Move Beyond",description:"Discover XBOT EV and request a test ride.",icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
