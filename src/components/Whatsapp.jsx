import { FaWhatsapp } from "react-icons/fa";
import "./animation.css";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/919048582702"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed flex items-center bottom-6 right-6 z-50 group bg-green-500 text-white rounded-full transition-all duration-300 overflow-hidden w-14 h-14 hover:w-48 shadow-xl round-jump"
    >
      <div className="flex items-center justify-center w-14 h-14 ms-4">
        <FaWhatsapp size={25} />
      </div>
      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap me-3">
        Chat on WhatsApp
      </span>
    </a>
  );
}
