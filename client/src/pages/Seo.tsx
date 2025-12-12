import { Layout } from "@/components/Layout";
import { content, Language } from "@/lib/i18n";
import { useRoute } from "wouter";
import { ExternalLink, Search, Tag, TrendingUp, CheckCircle2 } from "lucide-react";
import projectImage from "@assets/generated_images/modern_abstract_geometric_pattern_for_project_thumbnails.png";

export default function Seo() {
  const [match, params] = useRoute("/:lang/seo");
  const lang = (params?.lang as Language) || 'en';
  const t = content[lang]?.seo || content.en.seo;

  return (
    <Layout>
      <div className="space-y-12 py-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">{t.title}</h1>
          <p className="text-muted-foreground text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.projectsList.map((project, index) => (
              <div 
                key={index}
                className="group bg-card hover:bg-card/50 border border-border/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="h-40 overflow-hidden relative">
                  <div className="absolute inset-0 bg-green-900/10 group-hover:bg-green-900/0 transition-colors z-10" />
                  <img 
                    src={projectImage} 
                    alt={project.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 z-20">
                     <a 
                       href={project.url} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="p-2 bg-background/80 backdrop-blur-sm rounded-full text-green-600 shadow-sm block hover:bg-background transition-colors"
                     >
                        <ExternalLink className="w-4 h-4" />
                     </a>
                  </div>
                </div>
                
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                  
                  <div className="space-y-3 mb-6 flex-1">
                    <div className="flex items-start gap-2 text-sm">
                      <Tag className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                      <div>
                        <span className="text-muted-foreground mr-1">{t.labels.keywords}:</span>
                        <span className="font-medium block mt-0.5">{project.keywords}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="w-4 h-4 text-muted-foreground shrink-0" />
                      <div>
                        <span className="text-muted-foreground mr-1">{t.labels.position}:</span>
                        <span className="font-bold text-green-600">{project.position}</span>
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href={project.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-2 rounded-lg border border-green-200 dark:border-green-900 text-green-700 dark:text-green-400 font-medium text-sm hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors flex items-center justify-center gap-2"
                  >
                    {t.viewDetails}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-secondary/30 border border-border/50 rounded-xl p-6 sticky top-24">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Search className="w-5 h-5 text-primary" />
                {t.tasksLabel}
              </h3>
              <ul className="space-y-3">
                {t.commonTasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
