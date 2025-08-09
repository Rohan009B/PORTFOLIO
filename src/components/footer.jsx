import { ArrowBigUp } from "lucide-react";


export const Footer = () => {
    return (
        <footer className="bg-secondary/30 py-12 bg-card relative border border-t border-border mt-12  pt-8 flex flex-wrap justify-center items-center">
            <div className="container mx-auto text-center">
                <p className="text-muted-foreground text-sm ">© {new Date().getFullYear()} Rohan Prajapati. All rights reserved.</p>
                <p className="text-muted-foreground">Built with ⚡⚡ using React</p>
                <a href="#hero" className="p-2 rouned-full bg-primary/10 hover:bg-primary/20 transition-colors mt-4 inline-flex items-center justify-center">
                    <ArrowBigUp />
                </a>
            </div>
        </footer>
    );
}