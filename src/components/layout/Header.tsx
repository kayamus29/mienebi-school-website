import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, GraduationCap, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Academics", path: "/academics" },
    { label: "Admissions", path: "/admissions" },
    { label: "Faculty", path: "/faculty" },
    { label: "News & Events", path: "/news" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="h-4 w-4" />
              <span>+1 (234) 567-890</span>
            </a>
            <a href="mailto:info@brighthorizon.edu" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="h-4 w-4" />
              <span>info@brighthorizon.edu</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/portal" className="hover:text-secondary transition-colors">
              Student Portal
            </Link>
            <span className="text-primary-foreground/50">|</span>
            <Link to="/portal" className="hover:text-secondary transition-colors">
              Parent Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-card/95 backdrop-blur-md shadow-elegant py-2"
            : "bg-card py-4"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                <GraduationCap className="h-7 w-7 text-secondary" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary rounded-full" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-xl font-bold text-primary leading-tight">
                Bright Horizon
              </h1>
              <p className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
                Academy
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
                  isActive(item.path)
                    ? "text-primary bg-accent"
                    : "text-muted-foreground hover:text-primary hover:bg-accent/50"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              asChild
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold shadow-gold"
            >
              <Link to="/admissions">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-card border-t shadow-lg transition-all duration-300 overflow-hidden",
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 text-sm font-medium rounded-md transition-colors",
                  isActive(item.path)
                    ? "text-primary bg-accent"
                    : "text-muted-foreground hover:text-primary hover:bg-accent/50"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t">
              <Button
                asChild
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
              >
                <Link to="/admissions" onClick={() => setIsMobileMenuOpen(false)}>
                  Apply Now
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
