
import { BrickWall, Briefcase, Code ,User } from 'lucide-react'; // or wherever your icon comes from
export const AboueMe = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 utem-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">IT Professional & Web Devloper</h3>
                        <p className="text-muted-foreground text-left leading-relaxed">
                            I am a passionate web developer with a strong foundation in both front-end and back-end technologies. I enjoy creating dynamic and responsive web applications that provide a seamless user experience. My goal is to build innovative solutions that make a difference in the digital world.
                        </p>
                        <p className="text-muted-foreground text-left leading-relaxed">
                            With a keen eye for detail and a commitment to quality, I strive to deliver projects that not only meet but exceed client expectations. I am always eager to learn new technologies and improve my skills to stay ahead in the ever-evolving field of web development.
                        </p>

                        <div className="flex flex-col sm:flex-row  gap-4 pt-4 justify-center">
                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                            <a href="#contact" className="cosmic-button">
                                Contact Me
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex item-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className='text-left'>
                                    <h4 className="text-lg font-semibold">Web Development</h4>
                                    <p className="text-muted-foreground">I specialize in creating responsive and dynamic web applications using modern technologies.</p>   
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div>
                                 <div className="flex item-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                 <div className='text-left'>
                                    <h4 className="text-lg font-semibold">Website Deaign Font-End</h4>
                                    <p className="text-muted-foreground">I Creating The website Using siple languages and New Technologi</p>   
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div>
                             <div className="flex item-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                 <div className='text-left'>
                                    <h4 className="text-lg font-semibold">Project Managemant</h4>
                                    <p className="text-muted-foreground">I  have crewate a project and Then manage the Projects</p>   
                                </div>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}