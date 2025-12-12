import { Link, useLocation } from "wouter";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { content, Language } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu, X, Mail, Phone } from "lucide-react";
import { useState } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentLang = (location.split('/')[1] as Language) || 'en';
  const t = content[currentLang]?.nav || content.en.nav;
  const contactInfo = content[currentLang]?.cv?.personal || content.en.cv.personal;

  const navItems = [
    { label: t.home, href: `/${currentLang}` },
    { label: t.portfolio, href: `/${currentLang}/portfolio` },
    { label: t.seo, href: `/${currentLang}/seo` },
    { label: t.cv, href: `/${currentLang}/cv` },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary/10">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = item.href === `/${currentLang}` 
                  ? location === item.href || location === item.href + '/'
                  : location.startsWith(item.href);
                  
                return (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md",
                      isActive 
                        ? "text-primary bg-secondary/60" 
                        : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-muted-foreground hover:text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
          
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden sm:flex items-center gap-4 text-xs text-muted-foreground border-r border-border/40 pr-6 mr-2">
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Mail className="w-3.5 h-3.5" />
                <span>{contactInfo.email}</span>
              </a>
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Phone className="w-3.5 h-3.5" />
                <span>{contactInfo.phone}</span>
              </a>
            </div>
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border p-4 shadow-lg"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = item.href === `/${currentLang}` 
                  ? location === item.href || location === item.href + '/'
                  : location.startsWith(item.href);
                  
                return (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-sm font-medium px-4 py-3 rounded-md transition-colors",
                      isActive 
                        ? "bg-secondary/60 text-primary" 
                        : "text-muted-foreground hover:bg-secondary/30 hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              
              <div className="mt-4 pt-4 border-t border-border space-y-3 px-4">
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground">
                  <Mail className="w-4 h-4" />
                  <span>{contactInfo.email}</span>
                </a>
                <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground">
                  <Phone className="w-4 h-4" />
                  <span>{contactInfo.phone}</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </header>

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={location}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </div>
      </main>

      <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm mt-auto">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Alakbar Mammad.</p>
        </div>
      </footer>
    </div>
  );
}
