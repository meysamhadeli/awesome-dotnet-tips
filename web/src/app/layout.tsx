import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Awesome .NET Tips",
  description: "Curated .NET, architecture, DevOps, cloud, testing, and AI resources.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
