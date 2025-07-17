import { motion as Motion } from "framer-motion";

// Individual image animation
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // easeOutCubic
    },
  },
};

// Parent container animation to stagger children
const container = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function WhyHostly() {
  return (
    <section className="py-20 px-4 md:px-20 bg-hostly-primary text-hostly-accent font-poppins mb-[-50px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-hostly-secondary mb-2">
            Why Hostly?
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Live Comfortably, Together
          </h1>
          <p className="text-lg leading-relaxed">
            Discover a new way of living with Hostly’s curated co-living spaces.
            From fully furnished homes to a vibrant community, we make shared
            living stress-free and comfortable.
          </p>
        </div>

        {/* Right Image Cards */}
        <div className="flex-1">
          {/* Mobile: Horizontal Scroll Slider */}
          <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth custom-scrollbar">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <img
                key={num}
                src={`/whyimg/whyimg${num}.jpg`}
                alt={`Card ${num}`}
                loading="lazy"
                className="min-w-[70%] h-52 object-cover rounded-xl snap-center mb-2"
              />
            ))}
          </div>

          {/* Desktop: Grid with Animations */}
          <Motion.div
            className="hidden md:grid grid-cols-2 gap-4"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <Motion.img
                src="/whyimg/whyimg1.jpg"
                alt="Card 1"
                loading="lazy"
                className="rounded-xl w-full h-52 object-cover will-change-transform"
                variants={fadeInUp}
              />
              <Motion.img
                src="/whyimg/whyimg2.jpg"
                alt="Card 2"
                loading="lazy"
                className="rounded-xl w-full h-52 object-cover mt-4 will-change-transform"
                variants={fadeInUp}
              />
            </div>
            <div className="mt-10">
              <Motion.img
                src="/whyimg/whyimg3.jpg"
                alt="Card 3"
                loading="lazy"
                className="rounded-xl w-full h-52 object-cover will-change-transform"
                variants={fadeInUp}
              />
              <Motion.img
                src="/whyimg/whyimg4.jpg"
                alt="Card 4"
                loading="lazy"
                className="rounded-xl w-full h-52 object-cover mt-4 will-change-transform"
                variants={fadeInUp}
              />
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
