import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sabin Chacko | Full Stack Engineer",
  description:
    "Full Stack Engineer in UAE, proficient in PHP & Laravel. Strong experience in building and deploying robust and scalable web applications and softwares. Handles software development to deployment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
