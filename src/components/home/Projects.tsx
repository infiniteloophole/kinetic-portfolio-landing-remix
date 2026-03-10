import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Quantum Vision",
    category: "Product Design",
    year: "2024",
    number: "02"
  },
  {
    id: "02",
    title: "Kinetic UI",
    category: "Web Development",
    year: "2024",
    number: "03"
  },
  {
    id: "03",
    title: "Neural Network",
    category: "Brand Identity",
    year: "2023",
    number: "04"
  },
  {
    id: "04",
    title: "Cyber Flow",
    category: "Motion Design",
    year: "2023",
    number: "05"
  }
];

export default function Projects() {
  return (
    <section id="work" className="py-32 px-6 lg:px-12 relative">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-24">
          <h2 className="text-kinetic">Selected<br />Works</h2>
          <div className="hidden md:block max-w-xs text-right text-muted-foreground uppercase tracking-widest text-xs font-bold">
            A curation of projects focused on meaningful interactions and technical excellence.
          </div>
        </div>

        <div className="flex flex-col border-t border-foreground">
          {projects.map((project) => (
            <ProjectItem key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectItem({ title, category, year, number }: { title: string; category: string; year: string; number: string }) {
  return (
    <motion.a
      href="#"
      className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 px-4 border-b border-foreground invert-on-hover overflow-hidden"
    >
      <div className="bg-number right-0 bottom-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
        {number}
      </div>
      
      <div className="flex flex-col gap-2 relative z-10">
        <span className="text-xs uppercase tracking-widest font-bold opacity-50">{year}</span>
        <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">{title}</h3>
      </div>
      
      <div className="flex items-center justify-between md:justify-end gap-12 mt-6 md:mt-0 relative z-10">
        <span className="text-sm uppercase tracking-widest font-bold">{category}</span>
        <motion.div
          whileHover={{ x: 5, y: -5 }}
          className="p-4 border border-current rounded-full"
        >
          <ArrowUpRight size={24} />
        </motion.div>
      </div>
    </motion.a>
  );
}
