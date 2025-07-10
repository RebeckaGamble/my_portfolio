import { motion } from "framer-motion";
import { X } from "lucide-react";
import { RefObject } from "react";

interface NavLink {
  name: string;
  href: string;
}

interface MobileNavProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  menuRef: RefObject<HTMLDivElement>;
  navLinks: NavLink[];
}

const MobileNav: React.FC<MobileNavProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  menuRef,
  navLinks,
}) => {
  return (
    <>
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
    </>
  );
};

export default MobileNav;
