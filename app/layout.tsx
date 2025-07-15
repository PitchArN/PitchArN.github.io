import type { Metadata } from "next";
import './globals.css'

export const metadata: Metadata = {
  title: "HBD Ms.🔆",
  description: "Happy Birthday to Beam!!!!!!!",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body >
        {children}
      </body>
    </html>
  );
}