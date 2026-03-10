import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-6 lg:px-12">
      <div className="bg-number top-0 left-0 -translate-x-1/4 -translate-y-1/4 text-primary">01</div>
      
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="flex flex-col"
        >
          <h1 className="text-kinetic leading-none flex flex-col">
            <span>Creative</span>
            <span className="text-right">Developer</span>
          </h1>
          
          <div className="mt-8 flex flex-col md:flex-row justify-between items-end gap-8">
            <p className="max-w-md text-lg md:text-xl font-body text-muted-foreground">
              Pushing the boundaries of digital experiences through bold typography and kinetic motion.
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-[1px] bg-foreground"></div>
              <span className="uppercase tracking-widest text-sm font-bold">Based in London</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="uppercase tracking-widest text-[10px] font-bold opacity-50 rotate-90">Scroll</span>
        <div className="w-[1px] h-12 bg-foreground/30 overflow-hidden">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-full h-1/2 bg-foreground"
          />
        </div>
      </div>
    </section>
  );
}
