import { Facebook, FacebookIcon, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react"
import { cn } from "@/lib/utils";
import { use } from "react";
// import { useToast } from "@/components/ui/use-toast";

export const ContectSection = () => {

//    const { toast } = useToast();
    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {

        }, 1500)
    }

    return (
        <section id="contact" className="py-24 px-24 bg-secondary/30 relative">
            <div className="container mx-auto max-w-5xl">
                     <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-primary"> Touch</span></h2>
                     <p className="text-center text-muted-foreground mb-12 mx-w-2xl mx-auto">
                        If you have any questions, feedback, or just want to say hello, feel free to reach out! I'm always open to new opportunities and collaborations.
                     </p>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold mb-6">Contect Information</h3>
                                  <div className="space-y-6 justify-center">
                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 rounded-full bg-primary/10">
                                            <Mail className="h-6 w-6 text-primary"/>
                                        </div>
                                        <div>
                                            <h4 className=""> Email</h4>
                                            <a href="mailto:hello@gmail.com" className="text-muted-foregroud hover:text-primary transition-colors">hello@gmail.com</a>
                                        </div>
                                    </div>
                                     <div className="flex items-start space-x-4">
                                        <div className="p-3 rounded-full bg-primary/10">
                                            <Phone className="h-6 w-6 text-primary"/>
                                        </div>
                                        <div>
                                            <h4 className=""> Phone No.</h4>
                                            <a href="tel:+91 8160163409" className="text-muted-foregroud hover:text-primary transition-colors">+91 8160163409</a>
                                        </div>
                                    </div>
                                     <div className="flex items-start space-x-4">
                                        <div className="p-3 rounded-full bg-primary/10">
                                            <MapPin className="h-6 w-6 text-primary"/>
                                        </div>
                                        <div>
                                            <h4 className=""> Location</h4>
                                            <a href="mailto:hello@gmail.com" className="text-muted-foregroud hover:text-primary transition-colors">India, Gujarat, Anand</a>
                                        </div>
                                    </div>
                                  </div>
                                  <div className="pt-8">
                                    <h4 className="font-medium mb-4">Connect With Me</h4>
                                    <div className="flex space-x-4 justify-center">
                                        <a href="https://www.linkedin.com/in/rohan-prajapati24/" target="_blank">
                                            <Linkedin />
                                        </a>
                                           <a href="#" target="_blank">
                                            <Instagram />
                                        </a>
                                           <a href="#" target="_blank">
                                            <Twitter />
                                        </a>
                                           <a href="#" target="_blank">
                                            <Facebook />
                                        </a>
                                    </div>
                                  </div>
                            </div>
                            <div className="bg-card p-8 rounded-lg shodow-xs">
                                <h3 className="text-2xl font-semibold mb-6"></h3>
                                <form action="" className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-3">Your Name</label>
                                        <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-b-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Name Yours"/>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-3">Your Email</label>
                                        <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-b-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Exaple.456@gmail.com"/>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-3">Your Message</label>
                                        <textarea id="message" name="message" required className="w-full px-4 py-3 rounded-b-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Hello,I'd like talk about"/>
                                    </div>

                                    <button type="submit" className={cn("cosmic-button w-full flex item-center justify-center gap-1")} >
                                        Send Message
                                        <Send size={16} className="m-2"/>
                                    </button>
                                </form>

                            </div>
                     </div>
            </div>
        </section>
    )
}