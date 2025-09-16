import Header from "@/components/Header";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Hero from "@/components/Hero";
import AboutPage from "./about/page";
import SkillsPage from "./skills/page";
import ProjectsPage from "./projects/page";
import ContactSection from "@/components/ContactSection";
// import SkillsPage from "./skills/page";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Nouf Alghamdi — Portfolio",
  description: "QA Engineer & UI Designer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>

      <body>
        
        <Header />  {/*  👈 shows on every page */}
        <Hero />
        <AboutPage />
        <SkillsPage />
        <ProjectsPage />
        <ContactSection />

        {children}
        </body>
    </html>
  );
}
