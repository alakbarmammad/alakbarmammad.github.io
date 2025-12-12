import { Link, useRoute } from "wouter";
import { Layout } from "@/components/Layout";
import { content, Language } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";
import avatarImage from "@assets/generated_images/professional_minimalist_avatar_portrait_of_a_developer.png";

export default function Home() {
  const [match, params] = useRoute("/:lang");
  const lang = (params?.lang as Language) || 'en';
  const t = content[lang]?.home || content.en.home;

  return (
    <Layout>
      <section className="flex flex-col-reverse md:flex-row items-center gap-12 py-12 md:py-24">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <h2 className="text-xl text-muted-foreground font-medium">{t.greeting}</h2>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
              {t.name}
            </h1>
            <p className="text-xl md:text-2xl text-secondary-foreground font-medium">
              {t.title}
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto md:mx-0">
            {t.description}
          </p>
          
          <div className="pt-4">
            <Link 
              href={`/${lang}/portfolio`}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
            >
              {t.cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        
        <div className="flex-shrink-0 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-3xl transform scale-110" />
          <img 
            src={avatarImage} 
            alt={t.name}
            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-background"
          />
        </div>
      </section>
    </Layout>
  );
}
