const amenities = [
  { icon: "/icons/bed.png", label: "Mattress, Pillow & Sheet" },
  { icon: "/icons/housekeeping.png", label: "Housekeeping" },
  { icon: "/icons/wifi.png", label: "High-Speed Wi-Fi" },
  { icon: "/icons/cctv.png", label: "CCTV Security" },
  { icon: "/icons/refrigerator.png", label: "Refrigerator" },
  { icon: "/icons/power.png", label: "Bedside Power Points" },
  { icon: "/icons/locker.png", label: "Locker" },
  { icon: "/icons/drinking.png", label: "Drinking Water" },
  { icon: "/icons/wardrobe.png", label: "Wardrobe" },
  { icon: "/icons/laundry.png", label: "Self Laundry" },
  { icon: "/icons/ac.png", label: "AC (on request)" },
  { icon: "/icons/travelhelp.png", label: "Travel Help" }
];

export default function Facilities() {
  return (
    <section className="bg-yellow-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl text-center md:text-start md:text-4xl font-bold text-hostly-secondary mb-4">
          Facilities
        </h2>
        <p className="text-hostly-accent text-center md:text-start text-lg mb-10">
          We have all you need for a comfortable co-living stay
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {amenities.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={item.icon}
                alt={item.label}
                className="w-14 h-14 mb-2 object-contain"
              />
              <p className="text-sm text-hostly-accent text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
