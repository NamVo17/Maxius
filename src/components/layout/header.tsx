"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigationItems } from "@/lib/constants";
import { scrollToSection } from "@/utils/navigation";

interface HeaderProps {
  isScrolled: boolean;
  activeSection: string;
}

export function Header({ isScrolled, activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick("home")}
              className="text-xl sm:text-2xl font-bold text-white hover:text-orange-400 transition-colors"
            >
              MAXIUS
            </button>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`capitalize transition-colors hover:text-orange-400 ${
                  activeSection === item.id
                    ? "text-orange-400"
                    : "text-white/90"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-white hover:bg-white/20 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-sm border-t border-white/10">
          <div className="px-3 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-3 py-2 text-white/90 hover:text-orange-400 hover:bg-white/10 rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
