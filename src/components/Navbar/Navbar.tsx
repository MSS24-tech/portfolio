import { useEffect, useState } from "react";
import { Menu, X } from "react-feather";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Contact",
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-black/50 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">
          <h1 className="text-xl font-bold tracking-wider">
            Sharath<span className="text-cyan-400">.</span>
          </h1>

          {/* Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-cyan-400"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed inset-0 z-[99] bg-[#07101d] pt-20 md:hidden"
          >
            <div className="flex flex-col">
              {links.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-white/10 px-6 py-5 text-lg hover:bg-white/5"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}