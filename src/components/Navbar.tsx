import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { Button } from "../components/ui/button";
import { Sun, Moon, Globe } from "lucide-react";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLanguageChange = () => {
    i18n.changeLanguage(i18n.language === "en" ? "sv" : "en");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[90rem] mx-auto px-4 2xl:px-0">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <a
              href="#"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="text-2xl font-bold gradient-text">RG</div>
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-purple-600 dark:text-gray-200 dark:hover:text-purple-400 px-3 py-2 text-[16px] font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="flex items-center ">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleLanguageChange}
                aria-label="Toggle language"
              >
                <Globe className="h-6 w-6" />
                <span className="ml-0.5">
                  {i18n.language === "en" ? "🇬🇧" : "🇸🇪"}
                </span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <Sun className="h-6 w-6" />
                ) : (
                  <Moon className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLanguageChange}
              className="mr-2"
              aria-label="Toggle language"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-1">
                {i18n.language === "en" ? "🇬🇧" : "🇸🇪"}
              </span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="mr-2"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            {/**hamburger/close menu btn */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 focus:outline-none"
              aria-label="Open menu"
            >
              <div className="flex flex-col space-y-1.5">
                <div
                  className={`w-6 h-0.5 bg-current transition-transform ${
                    mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></div>
                <div
                  className={`w-6 h-0.5 bg-current transition-opacity ${
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></div>
                <div
                  className={`w-6 h-0.5 bg-current transition-transform ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`menu-overlay ${
          mobileMenuOpen ? "menu-overlay-visible" : "menu-overlay-hidden"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      <motion.div
        className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-900 shadow-xl transform ${
          mobileMenuOpen ? "menu-open" : "menu-closed"
        } menu-transition z-50`}
        initial={false}
        animate={mobileMenuOpen ? { x: 0 } : { x: "-100%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-6 space-y-8">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold gradient-text">RG</div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 py-2 text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
