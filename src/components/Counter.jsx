import React, { useEffect, useState, useRef } from "react";
import { FaUsers, FaMapMarkedAlt, FaHome, FaDoorOpen } from "react-icons/fa"; // Example icons

export default function Counter() {
  const [counts, setCounts] = useState({
    rooms: 0,
    cities: 0,
    buildings: 0,
    tenants: 0,
  });

  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCounter();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounter = () => {
    const targetCounts = {
      rooms: 1200,
      cities: 18,
      buildings: 75,
      tenants: 980,
    };
    const duration = 2000;
    const interval = 50;

    Object.keys(targetCounts).forEach((key) => {
      let start = 0;
      const increment = targetCounts[key] / (duration / interval);

      const counter = setInterval(() => {
        start += increment;
        if (start >= targetCounts[key]) {
          start = targetCounts[key];
          clearInterval(counter);
        }
        setCounts((prev) => ({ ...prev, [key]: Math.floor(start) }));
      }, interval);
    });
  };

  return (
    <div
      ref={sectionRef}
      className="bg-yellow-50 text-hostly-accent py-16 px-4 md:px-20"
    >
      <div className="w-64 md:w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <StatCard icon={<FaDoorOpen size={40} />} number={counts.rooms} label="Rooms" />
        <StatCard icon={<FaMapMarkedAlt size={40} />} number={counts.cities} label="Cities" />
        <StatCard icon={<FaHome size={40} />} number={counts.buildings} label="Buildings" />
        <StatCard icon={<FaUsers size={40} />} number={counts.tenants} label="Happy Tenants" />
      </div>
    </div>
  );
}

function StatCard({ icon, number, label }) {
  return (
    <div className="bg-yellow-400 rounded-xl shadow-xl p-6 flex flex-col items-center space-y-4">
      <div className="text-hostly-accent">{icon}</div>
      <div className="text-3xl font-bold text-hostly-primary">{number}</div>
      <div className="text-lg font-medium text-hostly-accent">{label}</div>
    </div>
  );
}
