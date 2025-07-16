export default function HeroSection() {
  return (
    <section className="relative h-96 md:h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="/landingbg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Black faded overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-start px-8 md:px-20 z-10">
        <div className="text-hostly-primary max-w-xl ">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Where Comfort Meets Community
          </h1>
          <p className="text-lg text-hostly-primary md:text-xl">
            We're more than a place to stay we're a vibrant co-living community where people come together
          </p>
        </div>
      </div>
    </section>
  );
}
