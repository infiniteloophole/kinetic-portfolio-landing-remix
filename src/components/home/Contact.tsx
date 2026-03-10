import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-48 px-6 lg:px-12 bg-foreground text-background relative overflow-hidden">
      <div className="bg-number top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] text-background">06</div>
      
      <div className="container mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <h2 className="text-kinetic leading-none text-primary">
            Have a<br />project?
          </h2>
          
          <a
            href="mailto:hello@example.com"
            className="group inline-flex items-center gap-6 text-2xl md:text-5xl font-bold uppercase tracking-tighter hover:text-primary transition-colors border-b-2 border-primary pb-2"
          >
            Let's Talk
            <ArrowRight size={48} className="group-hover:translate-x-4 transition-transform" />
          </a>
        </motion.div>

        <div className="w-full mt-32 grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-background/20 text-xs font-bold uppercase tracking-[0.2em]">
          <div className="flex flex-col gap-4">
            <span className="opacity-50">Social</span>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          </div>
          
          <div className="flex flex-col gap-4">
            <span className="opacity-50">Legal</span>
            <span>© 2024</span>
            <span>All Rights Reserved</span>
          </div>
          
          <div className="col-span-2 flex flex-col items-end justify-end gap-2 text-right">
            <span className="text-primary">DESIGN × CODE × SHIP</span>
            <span className="opacity-50">Made with love in London</span>
          </div>
        </div>
      </div>
    </section>
  );
}
