import { ArrowBigDown, ArrowDown } from "lucide-react"


export const HeroSection =() =>{
    return (
    
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container mx-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl tracking-tight font-bold ">
                    <span className="opacity-0 animate-fade-in">Hi ,I'am</span>
                    <span className="text-primary ml-2 opacity-0 animate-fade-in">Rohan</span>
                    <span className="text-gradiant ml-2 opacity-0 animate-fade-in">Prajapati</span>
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 opacity-0 animate-fade-in">
                    I create beautiful and functional web applications. IT is my passion to build things that make a difference.
                </p>
                <p className="text-foreground/80">
                    I am a Web Developer with a passion for creating dynamic and responsive web applications. I have experience in both front-end and back-end development, and I enjoy working with the latest technologies to build innovative solutions.
                </p>
                
                <div className="p-4 opacity-0 animate-fade-in">
                    <a href="#projects" className="cosmic-button ">
                        View Projects
                        </a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">
                Scroll
            </span>
            <ArrowDown className="text-primary mt-2 h-5 w-5"/>
        </div>
    </section>
    )
}