import { ArrowBigRight, ExternalLinkIcon, Github } from "lucide-react";

const projects =[
    {
        id:1,
        title:"Flipkart Clone",
        description:"A clone of the popular e-commerce platform Flipkart, built using React and Node.js.",
        image:"../projects/FC_UI.jpeg",
        tag:["React", "Node.js", "E-commerce"],
        demoUrl:"#",
        githubUrl:"#"
    },
        {
        id:2,
        title:"Hotel Management System",
        description:"A comprehensive hotel management system that allows users to book rooms, manage reservations, and more.",
        image:"../projects/HMS.jpeg",
        tag:["C#", "MS SQL SERVER", "CSS", "HTML", "JavaScript"],
        demoUrl:"#",
        githubUrl:"#"
    },
        {
        id:3,
        title:"Jarvis",
        description:"A personal assistant application helps users manage tasks, set reminders, and control smart home devices.",
        image:"../projects/jarvis.jpeg",
        tag:["Python"],
        demoUrl:"#",
        githubUrl:"#"
    },
]

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-24 relative">
            <div className="container mx-auto mx-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Fetured <span className="text-primary"> Project </span></h2>
                <p className="text-lg text-muted-foregound text-center mb-12">Here are some of my recent projects that showcase my skills and creativity.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project,key)=>(
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full -full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tag.map((tag, index) => (
                                        <span key={index} className="text-xs bg-secondary border-2 font-bold text-secondary-foreground bg-primary/30 px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            
                            <h3 className="text-xl font-semibold text-foreground px-6 mb-2">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground px-6 mb-4">
                                {project.description}
                            </p>

                            <div className="flex justify-between item-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLinkIcon size={24}/></a>
                                        <a href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={24}/></a>
                                    </div>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="https://github.com/Rohan009B" className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank">
                        Check My Github <ArrowBigRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
}