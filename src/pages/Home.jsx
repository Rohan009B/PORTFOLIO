import { ThemeToggle } from "../components/ThemeTpggle";
import { StarBackground } from "../components/StarBackGround";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboueMe } from "../components/AboutMe";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContectSection } from "../components/ContectSection";
import { Footer } from "../components/footer";

export const Home1 = () => {

    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
        
        <ThemeToggle />

        <StarBackground />

        <Navbar />


        <main>
            <HeroSection />
            <AboueMe />
            <SkillsSection />
            <ProjectSection />
            <ContectSection />
        </main>
        
        <Footer />
    </div>;
};