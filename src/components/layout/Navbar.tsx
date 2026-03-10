import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-6 lg:px-12 lg:py-8 flex justify-between items-center text-white">
      <motion.a
        href="#"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-2xl font-bold uppercase tracking-tighter"
      >
        Portfolio
      </motion.a>

      <div className="hidden md:flex gap-8">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors"
          >
            {link.name}
          </motion.a>
        ))}
      </div>

      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { x: 0 } : { x: "100%" }}
        className="fixed inset-0 bg-background text-foreground z-40 md:hidden flex flex-col items-center justify-center gap-12"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-5xl font-bold uppercase tracking-tighter hover:text-primary transition-colors"
          >
            {link.name}
          </a>
        ))}
      </motion.div>
    </nav>
  );
}
