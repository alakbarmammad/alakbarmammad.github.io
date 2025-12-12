import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Language } from "@/lib/i18n";

export function LanguageSwitcher() {
  const [location] = useLocation();
  
  // Extract current lang from path, default to 'en'
  const currentLang = (location.split('/')[1] as Language) || 'en';
  
  // Function to get path for a target language
  const getPathForLang = (lang: Language) => {
    const segments = location.split('/').filter(Boolean);
    // If we have segments, replace the first one (lang) with new lang
    // If empty (root), just return /lang
    if (segments.length > 0) {
      // Check if first segment is a supported language
      if (['en', 'az', 'ru'].includes(segments[0])) {
        segments[0] = lang;
        return '/' + segments.join('/');
      }
      // If not (maybe some other route), prepend lang
      return `/${lang}/${segments.join('/')}`;
    }
    return `/${lang}`;
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'az', label: 'AZ' },
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' }
  ];

  return (
    <div className="flex items-center bg-secondary/50 backdrop-blur-sm rounded-full p-1 border border-border/50">
      {languages.map((lang) => (
        <Link 
          key={lang.code} 
          href={getPathForLang(lang.code)}
          className={cn(
            "px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200",
            currentLang === lang.code 
              ? "bg-background text-foreground shadow-sm scale-105" 
              : "text-muted-foreground hover:text-foreground hover:bg-background/50"
          )}
        >
          {lang.label}
        </Link>
      ))}
    </div>
  );
}
