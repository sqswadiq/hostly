export default function FloatingCard() {
  return (
    <div className="-mt-16 md:-mt-20 z-30 relative w-full flex justify-center px-4">
      <div className="bg-gray-100  shadow-xl rounded-lg p-6 flex flex-col items-center text-center max-w-md w-full">
        <p className="text-lg font-semibold text-black mb-4">
          Book your free visit today!
        </p>
        <a
          href="https://wa.me/919048582702?text=Hello%2C%20I%20want%20to%20book%20a%20free%20visit"
          target="_blank"
          rel="noopener noreferrer"
          className="pulse-zoom bg-hostly-secondary hover:bg-yellow-500 text-hostly-accent px-6 py-2 rounded-full font-medium transition"
        >
          Book a Free Visit
        </a>
      </div>
    </div>
  );
}
