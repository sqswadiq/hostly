import { useEffect, useState } from "react";
import { BedDouble, Bed, Clock } from "lucide-react";

const cards = [
  {
    id: 1,
    title: "6-Bed Dormitory",
    icon: <BedDouble size={20} />,
    image: "/pricing/6bed.jpg",
    description: "Hygienic, regularly sanitized rooms for a healthy stay",
    price: "₹5,000 / month / person",
  },
  {
    id: 2,
    title: "4-Bed Dormitory",
    icon: <Bed size={20} />,
    image: "/pricing/4bed.jpg",
    description: "Well-designed dormitories with storage and amenities",
    price: "₹5,500 / month / person",
  },
  {
    id: 3,
    title: "Short-Term Stay",
    icon: <Clock size={20} />,
    image: "/pricing/short.jpg",
    description: "Perfect for travellers, No long term commitment.",
    price: "₹299 / day",
  },
];

export default function Pricing() {
  const [visibleCards, setVisibleCards] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect screen size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return; // Only apply scroll logic on mobile

    const observers = [];

    cards.forEach((card) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => ({ ...prev, [card.id]: true }));
          }
        },
        { threshold: 0.3 }
      );

      const el = document.getElementById(`feature-card-${card.id}`);
      if (el) observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [isMobile]);

  return (
    <section className="bg-hostly-primary py-16 px-4 md:px-10">
      {/* Section Header */}
      <div className="text-start md:text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Your Space <br className="block md:hidden" />{" "}
          <span className="text-hostly-secondary ms-12 md:ms-0">Your Way</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Experience modern living with premium amenities
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.id}
            id={`feature-card-${card.id}`}
            className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer transition-transform duration-300"
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-80 object-cover transition duration-500"
            />

            {/* Semi-transparent dark overlay */}
            <div className="absolute inset-0 bg-hostly-accent opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

            {/* Info Panel */}
            <div
              className={`absolute bottom-0 left-0 w-full h-24 
              ${
                isMobile && visibleCards[card.id]
                  ? "h-[60%]"
                  : !isMobile
                  ? "group-hover:h-[60%]"
                  : ""
              }
              bg-yellow-400/90 backdrop-blur-sm text-hostly-accent p-4 
              flex flex-col items-center justify-start rounded-t-xl 
              transition-all duration-500 ease-in-out overflow-hidden`}
            >
              <div className="bg-hostly-accent text-hostly-primary rounded-full p-3 mb-2 transition-transform duration-500 group-hover:scale-110">
                {card.icon}
              </div>
              <h3 className="font-semibold text-lg text-center">
                {card.title}
              </h3>

              <p
                className={`mt-4 text-sm text-center px-3 transition-opacity duration-500 ${
                  isMobile && visibleCards[card.id]
                    ? "opacity-100"
                    : !isMobile
                    ? "group-hover:opacity-100 opacity-0"
                    : "opacity-0"
                }`}
              >
                {card.description}
              </p>

              <p
                className={`mt-1 text-md font-semibold text-center px-3 transition-opacity duration-500 ${
                  isMobile && visibleCards[card.id]
                    ? "opacity-100"
                    : !isMobile
                    ? "group-hover:opacity-100 opacity-0"
                    : "opacity-0"
                }`}
              >
                {card.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
