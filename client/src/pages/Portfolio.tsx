import { Layout } from "@/components/Layout";
import { content, Language } from "@/lib/i18n";
import { useRoute } from "wouter";
import { ExternalLink, Layers, Globe, Cpu } from "lucide-react";
import projectImage from "@assets/generated_images/modern_abstract_geometric_pattern_for_project_thumbnails.png";
import { 
  FaWordpress, FaElementor, FaPhp, FaReact, FaNodeJs, FaDocker, FaAws, FaHtml5, FaCss3Alt, FaBootstrap, FaMicrosoft 
} from "react-icons/fa";
import { 
  SiMysql, SiWoocommerce, SiLaravel, SiCodeigniter, SiNuxtdotjs, SiDotnet, SiNextdotjs, SiTypescript, SiPostgresql 
} from "react-icons/si";
import { IconType } from "react-icons";

// Map technology names to icons and colors
const techMap: Record<string, { icon: IconType, color: string, bg: string }> = {
  "WordPress": { icon: FaWordpress, color: "text-[#21759b]", bg: "bg-[#21759b]/10" },
  "Elementor": { icon: FaElementor, color: "text-[#92003B]", bg: "bg-[#92003B]/10" },
  "PHP": { icon: FaPhp, color: "text-[#777BB4]", bg: "bg-[#777BB4]/10" },
  "MySQL": { icon: SiMysql, color: "text-[#4479A1]", bg: "bg-[#4479A1]/10" },
  "WooCommerce": { icon: SiWoocommerce, color: "text-[#96588a]", bg: "bg-[#96588a]/10" },
  "Laravel": { icon: SiLaravel, color: "text-[#FF2D20]", bg: "bg-[#FF2D20]/10" },
  "CodeIgniter": { icon: SiCodeigniter, color: "text-[#EF4223]", bg: "bg-[#EF4223]/10" },
  "HTML": { icon: FaHtml5, color: "text-[#E34F26]", bg: "bg-[#E34F26]/10" },
  "CSS": { icon: FaCss3Alt, color: "text-[#1572B6]", bg: "bg-[#1572B6]/10" },
  "Bootstrap": { icon: FaBootstrap, color: "text-[#7952B3]", bg: "bg-[#7952B3]/10" },
  "Nuxt.js": { icon: SiNuxtdotjs, color: "text-[#00C58E]", bg: "bg-[#00C58E]/10" },
  "ASP.NET Core": { icon: SiDotnet, color: "text-[#512BD4]", bg: "bg-[#512BD4]/10" },
  "MSSQL": { icon: FaMicrosoft, color: "text-[#CC2927]", bg: "bg-[#CC2927]/10" },
  "React": { icon: FaReact, color: "text-[#61DAFB]", bg: "bg-[#61DAFB]/10" },
  "Node.js": { icon: FaNodeJs, color: "text-[#339933]", bg: "bg-[#339933]/10" },
  "TypeScript": { icon: SiTypescript, color: "text-[#3178C6]", bg: "bg-[#3178C6]/10" },
  "Next.js": { icon: SiNextdotjs, color: "text-foreground", bg: "bg-foreground/10" },
  "PostgreSQL": { icon: SiPostgresql, color: "text-[#4169E1]", bg: "bg-[#4169E1]/10" },
  "AWS": { icon: FaAws, color: "text-[#FF9900]", bg: "bg-[#FF9900]/10" },
  "Docker": { icon: FaDocker, color: "text-[#2496ED]", bg: "bg-[#2496ED]/10" },
  "C#": { icon: SiDotnet, color: "text-[#239120]", bg: "bg-[#239120]/10" }, // Fallback for C#
  "C# (ASP.NET Core)": { icon: SiDotnet, color: "text-[#512BD4]", bg: "bg-[#512BD4]/10" },
};

const TechBadge = ({ name }: { name: string }) => {
  const cleanName = name.trim();
  // Find key that includes the name or equals it
  const key = Object.keys(techMap).find(k => cleanName.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase() === cleanName.toLowerCase());
  const tech = key ? techMap[key] : null;

  if (tech) {
    const Icon = tech.icon;
    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border border-transparent ${tech.bg} ${tech.color} transition-colors hover:border-current/20`}>
        <Icon className="w-3.5 h-3.5" />
        {cleanName}
      </span>
    );
  }

  // Default fallback style
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground border border-border/50">
      {cleanName}
    </span>
  );
};

export default function Portfolio() {
  const [match, params] = useRoute("/:lang/portfolio");
  const lang = (params?.lang as Language) || 'en';
  const t = content[lang]?.portfolio || content.en.portfolio;

  return (
    <Layout>
      <div className="space-y-12 py-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">{t.title}</h1>
          <p className="text-muted-foreground text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-card hover:bg-card/50 border border-border/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors z-10" />
                <img 
                  src={projectImage} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20">
                   <a 
                     href={project.url} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="p-2 bg-background/80 backdrop-blur-sm rounded-full text-primary shadow-sm block hover:bg-background transition-colors"
                   >
                      <ExternalLink className="w-4 h-4" />
                   </a>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                
                <div className="space-y-4 mb-6 flex-1">
                  <div className="flex items-start gap-2 text-sm">
                    <Layers className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                    <div>
                      <span className="text-muted-foreground mr-1">{t.labels.sector}:</span>
                      <span className="font-medium">{project.sector}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 text-sm">
                    <Globe className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                    <div>
                      <span className="text-muted-foreground mr-1">{t.labels.market}:</span>
                      <span className="font-medium">{project.market}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Cpu className="w-4 h-4" />
                      <span>{t.labels.tech}:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.split(',').map((tech, i) => (
                        <TechBadge key={i} name={tech} />
                      ))}
                    </div>
                  </div>
                </div>
                
                <a 
                  href={project.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-2 rounded-lg border border-border font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center gap-2"
                >
                  {t.viewDetails}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
