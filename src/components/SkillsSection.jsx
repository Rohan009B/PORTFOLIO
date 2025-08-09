import { useState } from "react"
import { cn } from "@/lib/utils"

const skills = [
  { name: "HTML/CSS", level: "95", icon: "javascript-icon.png", category: "frontend" },
  { name: "Next.js", level: "80", icon: "javascript-icon.png", category: "frontend" },
  { name: "Javascript", level: "80", icon: "javascript-icon.png", category: "frontend" },
  { name: "React", level: "90", icon: "javascript-icon.png", category: "frontend" },
  { name: "Tailwind CSS", level: "85", icon: "javascript-icon.png", category: "frontend" },

  { name: "Node.js", level: "90", icon: "javascript-icon.png", category: "backend" },
  { name: "MS SQL Server", level: "95", icon: "javascript-icon.png", category: "backend" },
  { name: "MongoDB", level: "85", icon: "javascript-icon.png", category: "backend" },
  { name: "PostGreSQL", level: "80", icon: "javascript-icon.png", category: "backend" },
  { name: "MySQL", level: "85", icon: "javascript-icon.png", category: "backend" },

  { name: "Git/GitHub", level: "90", icon: "javascript-icon.png", category: "tools" },
  { name: "Vs Code", level: "95", icon: "javascript-icon.png", category: "tools" },
  { name: "Figma", level: "66", icon: "javascript-icon.png", category: "tools" },
  { name: "Docket", level: "70", icon: "javascript-icon.png", category: "tools" },
];


const categories = ["all","frontend", "backend", "tools"];    

export const SkillsSection = () => {

  const [activeCategory , setactiveCategory] =useState("all");
  const filteredSkills = skills.filter((skill) => activeCategory==="all" || skill.category === activeCategory);
 

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto mx-w-5xl"> 
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My
                    <span className="text-primary"> skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category,key)=>{
                        return(
                                <button
                                    key={key}
                                    onClick={() => setactiveCategory(category)}
                                    className={cn("px-4 py-2 rounded-full transition-colors duration-300 capitalize",activeCategory === category ? "bg-primary text-white" : "bg-secondary text-muted-foreground hover:bg-primary/10"   )}
                                    >
                                    {category}
                                </button>
                        )
                    })}
                </div>

                <div className="grid grid-cols-1 sm-grid-cols-2 lg:grid-cols-3 gap-6">  
                        {filteredSkills.map((skill,key)=>{
                           return (
                             <div key={key} className="p-6 bg-card rounded-lg shadow-xs card-hover">
                                <div>
                                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                                </div>
                                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                    <div className="bg-primary h-full rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{ width: `${skill.level}%` }}></div>
                                </div>
                                <div className="text-right text-sm text-muted-foreground mt-1">
                                    <span>{skill.level}%</span>
                                </div>
                            </div>
                           )
                        })}
                </div>
            </div>
        </section>
    )
}