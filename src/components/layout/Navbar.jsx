import { useState } from "react";
import { FaMusic } from "react-icons/fa";
import { scrollToSection } from "../../utils/helpers";
import {
  Navbar as NavbarContainer,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarLogoText,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  MobileNavItem,
} from "../ui/ResizableNavbar";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "music", label: "Music" },
    { id: "playlists", label: "Playlists" },
    { id: "awards", label: "Awards" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <NavbarContainer className="bg-transparent rounded-full border border-pink-200/50">
      {/* Desktop Navigation */}
      <NavBody className="bg-transparent rounded-full border border-pink-200/50">
        <NavbarLogo onClick={() => handleNavClick("home")}>
          <div className="w-9 h-9 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/25">
            <FaMusic className="text-white text-sm" />
          </div>
          <NavbarLogoText>
            <h1 className="text-lg font-display font-bold text-gradient-pink leading-tight whitespace-nowrap">
              Rajeshwari Pawar
            </h1>
          </NavbarLogoText>
        </NavbarLogo>

        <NavItems items={navItems} onItemClick={handleNavClick} />
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo onClick={() => handleNavClick("home")}>
            <div className="w-9 h-9 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/25">
              <FaMusic className="text-white text-sm" />
            </div>
            <div>
              <h1 className="text-base font-display font-bold text-gradient-pink leading-tight">
                Rajeshwari Pawar
              </h1>
            </div>
          </NavbarLogo>

          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item) => (
            <MobileNavItem
              key={item.id}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </MobileNavItem>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </NavbarContainer>
  );
};

export default Navbar;
