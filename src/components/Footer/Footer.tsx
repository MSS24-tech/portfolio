import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <div>
          <h2 className="text-xl font-bold">
            Sharath M S
          </h2>

          <p className="text-gray-400 mt-2">
            Cloud Engineer • Module Lead • Founder
          </p>
        </div>

        <p className="text-gray-400 flex items-center gap-2">
          Built with
          <FaHeart className="text-red-500" />
          using React & Tailwind CSS
        </p>

      </div>
    </footer>
  );
}