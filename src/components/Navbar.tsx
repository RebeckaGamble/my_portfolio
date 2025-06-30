import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { Button } from "../components/ui/button";
import { Sun, Moon, Globe, X } from "lucide-react";

interface NavbarProps {
  active: string;
  setActive: (value: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ active, setActive }) => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const handleLanguageChange = () => {
    i18n.changeLanguage(i18n.language === "en" ? "sv" : "en");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setMobileMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      const sectionOffsets = navLinks
        .map((link) => {
          const id = link.href.replace("#", "");
          const el = document.getElementById(id);
          return el
            ? { name: link.name, top: el.offsetTop, height: el.offsetHeight }
            : null;
        })
        .filter(Boolean) as { name: string; top: number; height: number }[];

      const heroEl = document.getElementById("hero");
      if (heroEl) {
        sectionOffsets.unshift({
          name: "hero",
          top: heroEl.offsetTop,
          height: heroEl.offsetHeight,
        });
      }

      let current = active;

      for (let i = 0; i < sectionOffsets.length; i++) {
        const section = sectionOffsets[i];
        if (
          scrollPos >= section.top &&
          scrollPos < section.top + section.height
        ) {
          current = section.name;
          break;
        }
      }

      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 10
      ) {
        current = t("nav.contact");
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [navLinks, setActive]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !(menuRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-secondary/90 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[90rem] mx-auto relative px-4 2xl:px-0">
        <div className="flex justify-between h-[60px] items-center">
          <div
            className={`${
              active === "hero"
                ? "text-purple"
                : "text-purple-foreground rounded-full"
            } px-2 py-1.5 bg-purple-200 dark:bg-slate-200 rounded-full hover:scale-105 transition-transform duration-500`}
          >
            <a
              href="#"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-[18px] font-bold"
            >
              RG
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center mx-auto md:space-x-4">
            <ul className="list-none flex flex-row gap-x-2 h-full pr-12">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    onClick={() => {
                      setActive(link.name);
                    }}
                    href={link.href}
                    className={`${
                      active === link.name
                        ? "text-purple dark:text-purple-400"
                        : "text-primary-foreground"
                    } px-3 py-2 text-lg hover:text-purple font-medium transition-colors`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center space-x-2 absolute top-0 right-0 dark:text-white">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleLanguageChange}
                aria-label="Toggle language"
                className="cursor-pointer mx-2"
              >
                <Globe className="h-[20px] w-[20px]" />
                <span>{i18n.language === "en" ? "SE" : "EN"}</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="cursor-pointer p-2"
              >
                {theme === "light" ? (
                  <Moon className="h-[20px] w-[20px]" />
                ) : (
                  <Sun className="h-[20px] w-[20px]" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile menu btns */}
          <div className="md:hidden flex items-center space-x-4 dark:text-white">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLanguageChange}
              className="cursor-pointer mx-2"
              aria-label="Toggle language"
            >
              <Globe className="h-[20px] w-[20px]" />
              <span className="">{i18n.language === "en" ? "SE" : "EN"}</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="cursor-pointer mx-2"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Sun className="h-[20px] w-[20px]" />
              ) : (
                <Moon className="h-[20px] w-[20px]" />
              )}
            </Button>
            {/**hamburger/close menu btn */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 cursor-pointer rounded-md text-slate-900 dark:text-slate-200 focus:outline-none"
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

      {/* Mobile menu - overlay */}
      <div
        className={`fixed inset-0 h-screen bg-black/50 transiton-opacity duration-300 z-[9998] ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>
      {/* Mobile menu content */}
      <div
        ref={menuRef}
        className={`fixed inset-y-0 h-screen z-[9999] left-0 w-64 shadow-xl transform ${
          mobileMenuOpen ? "menu-open" : "menu-closed"
        } bg-white dark:bg-[#050816] menu-transition`}
      >
        <motion.div
          initial={false}
          animate={mobileMenuOpen ? { x: 0 } : { x: "-100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <div className="purple-gradient p-[3px] rounded-full">
                <div className="bg-white rounded-full py-1 px-1.5">
                  <a
                    href="#"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    <div className="text-[18px] font-bold purple-text-gradient">
                      RG
                    </div>
                  </a>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="absolute right-4 text-slate-900 dark:text-slate-200 top-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <X className="h-[24px] w-[24px] cursor-pointer" />
              </button>
            </div>

            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-900 dark:text-slate-200 text-lg hover:text-[#6a11cb] hover:dark:text-[#9b51e0] py-3 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
