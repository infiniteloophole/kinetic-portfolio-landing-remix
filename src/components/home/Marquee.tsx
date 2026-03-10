import Marquee from "react-fast-marquee";

export default function MarqueeSection() {
  return (
    <section className="py-24 border-y border-foreground/10 overflow-hidden">
      <div className="flex flex-col gap-8 md:gap-12">
        <Marquee speed={100} gradient={false} className="overflow-hidden">
          <div className="flex items-center gap-12 px-6">
            {[1, 2, 3, 4].map((i) => (
              <span key={i} className="text-8xl md:text-[12rem] font-bold uppercase tracking-tighter flex items-center gap-12">
                Design <span className="text-primary">×</span> Code <span className="text-primary">×</span> Ship
              </span>
            ))}
          </div>
        </Marquee>
        
        <Marquee speed={80} direction="right" gradient={false} className="overflow-hidden">
          <div className="flex items-center gap-12 px-6 opacity-30">
            {[1, 2, 3, 4].map((i) => (
              <span key={i} className="text-8xl md:text-[12rem] font-bold uppercase tracking-tighter flex items-center gap-12">
                Strategy <span className="text-primary">×</span> Identity <span className="text-primary">×</span> Motion
              </span>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
