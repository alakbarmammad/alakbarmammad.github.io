export type Language = 'en' | 'az' | 'ru';

export interface Project {
  title: string;
  description?: string;
  sector: string;
  market: string;
  technologies: string;
  url?: string;
}

export interface SeoProject {
  name: string;
  keywords: string;
  position: string;
  url: string;
}

export const content = {
  en: {
    nav: {
      home: "Home",
      portfolio: "Software",
      seo: "SEO",
      cv: "CV"
    },
    home: {
      greeting: "Hello, I'm",
      name: "Alakbar Mammad",
      title: "Senior Software Developer, Business Developer",
      description: "With nearly a decade of professional experience in software engineering, I have also played an active role in founding and contributing to multiple startups across various industries in both the Azerbaijani and Canadian markets. Problem-solving and business development are not only central to my career - they are also my personal passions. In short, I am a senior software developer, a business developer, and a relentless problem-solver committed to turning complex challenges into innovative, scalable products.",
      cta: "Works"
    },
    portfolio: {
      title: "Selected Works",
      subtitle: "A collection of projects I've worked on recently.",
      viewDetails: "View Project",
      labels: {
        sector: "Sector",
        market: "Market",
        tech: "Technologies"
      },
      projects: [
        { title: "A-Nur", sector: "Construction", market: "Azerbaijan", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "Azimut Audit", sector: "Finance", market: "Azerbaijan", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "Bizim Show", sector: "Media", market: "Azerbaijan", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "Iceberg Aqua", sector: "E-commerce (Home Goods)", market: "Azerbaijan", technologies: "WordPress, Elementor, PHP, MySQL, WooCommerce, Payment Integration, Internal CRM", url: "https://google.com" },
        { title: "IMMdoc", sector: "Legal", market: "Canada", technologies: "PHP (CodeIgniter), MySQL, HTML, CSS, Bootstrap, Payment Integration", url: "https://google.com" },
        { title: "First Step Tourism", sector: "Tourism", market: "Azerbaijan", technologies: "WordPress, Elementor, PHP (Laravel), MySQL, Payment Integration", url: "https://google.com" },
        { title: "Konan Immigration Law Firm", sector: "Legal", market: "Canada", technologies: "WordPress, Elementor, PHP, MySQL, Payment Integration, Custom Booking & Assessment Systems", url: "https://google.com" },
        { title: "Macis Consulting", sector: "Finance", market: "Azerbaijan", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "Missiya Təhsil Şirkəti", sector: "Education", market: "Azerbaijan", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "ShowAz News", sector: "Media", market: "Azerbaijan", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "Sivu", sector: "Construction", market: "Azerbaijan", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "Waterfall", sector: "E-commerce (Home Goods)", market: "Turkey", technologies: "WordPress, Elementor, PHP, MySQL, WooCommerce, Payment Integration, Internal CRM", url: "https://google.com" },
        { title: "All-Canada Notary", sector: "Legal", market: "Canada", technologies: "WordPress, Elementor, PHP (Laravel), MySQL, Payment Integration, Internal CRM", url: "https://google.com" },
        { title: "B2B Group", sector: "IT", market: "Azerbaijan", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "KorpON", sector: "IT & FinTech", market: "Azerbaijan", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "Indigo Printing House", sector: "Printing", market: "Azerbaijan", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "Provincial Pest Control", sector: "Service", market: "Canada", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "Azərbaycan Kapoeyra Federasiyası", sector: "Sports", market: "Azerbaijan", technologies: "Nuxt.js, C# (ASP.NET Core), MSSQL", url: "https://google.com" },
        { title: "SuFiltri.az", sector: "E-commerce (Home Goods)", market: "Azerbaijan", technologies: "PHP, MySQL, WooCommerce, Payment Integration, Internal CRM", url: "https://google.com" },
        { title: "Smart Steel", sector: "Construction", market: "Russia", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" }
      ]
    },
    seo: {
      title: "SEO Projects",
      subtitle: "Comprehensive SEO strategies and implementation for diverse clients.",
      tasksLabel: "Main Tasks",
      viewDetails: "View Project",
      labels: {
        name: "Name",
        keywords: "Keywords",
        position: "Position"
      },
      projectsList: [
        { name: "Iceberg Aqua", keywords: "Water Filters, Delivery", position: "Top 3", url: "https://google.com" },
        { name: "IMMdoc", keywords: "Immigration Canada, Lawyer", position: "Top 5", url: "https://google.com" },
        { name: "First Step Tourism", keywords: "Baku Tours, Travel", position: "Top 3", url: "https://google.com" },
        { name: "Konan Immigration Law Firm", keywords: "Legal Services, Canada", position: "Top 10", url: "https://google.com" },
        { name: "Macis Consulting", keywords: "Accounting, Tax Audit", position: "Top 5", url: "https://google.com" },
        { name: "All-Canada Notary", keywords: "Notary Public, Legal", position: "Top 3", url: "https://google.com" },
        { name: "B2B Group", keywords: "IT Services, Networking", position: "Top 10", url: "https://google.com" },
        { name: "KorpON", keywords: "Fintech, Corporate", position: "Top 5", url: "https://google.com" },
        { name: "Indigo Printing House", keywords: "Printing, Polygraphy", position: "Top 3", url: "https://google.com" },
        { name: "Provincial Pest Control", keywords: "Pest Control Canada", position: "Top 1", url: "https://google.com" },
        { name: "SuFiltri.az", keywords: "Water Filters Baku", position: "Top 3", url: "https://google.com" }
      ],
      commonTasks: [
        "Keyword Research",
        "On-page Optimization",
        "Content Strategy",
        "Backlink Building",
        "Technical SEO Audit",
        "Performance Tracking & Reporting"
      ]
    },
    cv: {
      sections: {
        personal: "Personal Info",
        summary: "Professional Summary",
        experience: "Work Experience",
        skills: "Skills",
        languages: "Languages",
        education: "Education"
      },
      personal: {
        name: "Alakbar Mammad",
        phone: "+994 70 331 33 07",
        email: "elekbermammad@gmail.com",
        linkedin: "linkedin.com/in/alakbarmammad",
        location: "Baku, Azerbaijan",
        availability: "Open to work"
      },
      socialMedia: {
        facebook: "https://www.facebook.com/alakbarmammad",
        instagram: "https://www.instagram.com/alakbarmammad",
        linkedin: "https://www.linkedin.com/in/alakbarmammad",
        tiktok: "https://www.tiktok.com/@alakbarmammad",
        blog: "https://elekbermammad.wordpress.com"
      },
      summary: "With nearly a decade of professional experience in software engineering, I have also played an active role in founding and contributing to multiple startups across various industries in both the Azerbaijani and Canadian markets.",
      experience: [
        { role: "Founder", company: "First Step Tourism", period: "2024 - present", location: "Bakı, Azərbaycan", description: "“First Step Tourism” şirkəti olaraq məqsədimiz insanlara “ilk addımlarını at” devizi ilə turistik səfərlərini asanlaşdıracaq həllər təqdim etmək, səfərin hər anını dəqiq və şəffaf şəkildə planlayaraq sadəcə səyahətin zövqünü yaşatmaqdır. " },
        { role: "Chief Technology Officer", company: "All-Canada Notary", period: "2021 - present", location: "Toronto, Canada", description: "All-Canada Notary performs both electronic/online and in-person notarization services with ease. We offer our clients affordable, fast, easy and secure notarization services." },
        { role: "Chief Technology Officer", company: "Lavish Yields Inc.", period: "2020 - 2023", location: "Toronto, Canada", description: "We specialize in providing cutting-edge data-driven legal solutions for the modern legal landscape. With the rapid advancements in technology and the increasing complexity of legal matters, we understand the critical need for innovative approaches to support legal professionals in delivering exceptional outcomes for their clients." },
        { role: "Senior Project Manager", company: "Lytech Россия", period: "2022 - 2023", location: "Москва, Россия", description: "Компания Lytech, запущенная в Азербайджане в 2019 году, специализируется на создании бизнес-решений, цифровом консалтинге и трансформации предприятий любого размера, а также аудите ИКТ." },
        { role: "Senior Project Manager", company: "Lytech Azərbaycan", period: "2019 - 2023", location: "Bakı, Azərbaycan", description: "2019-cu ildə Azərbaycanda fəaliyyətə başlayan Lytech şirkəti biznes və data həllərinin yaradılması, istənilən həcmli müəssisələrə rəqəmsal konsaltinq və transformasiya və İKT audit sahəsində ixtisaslaşmışdır." },
        { role: "Software Developer", company: "Dinamik Ocean", period: "2015 - 2020", location: "Bakı, Azərbaycan", description: "" },
        { role: "Software Developer", company: "Konan Immigration Law Firm", period: "2018 - 2019", location: "Toronto, Canada", description: "" },
        { role: "Software Developer", company: "Mikro Yazılım A.Ş.", period: "2011 - 2012", location: "İstanbul, Türkiye", description: "" }
      ],
      education: [
        {
          degree: "Physics",
          school: "Middle East Technical University",
          period: "2015 - 2016 (left)"
        }
      ],
      languages: [
        { name: "English", level: "B2" },
        { name: "Turkish", level: "B2" },
        { name: "Arabic", level: "A1" },
        { name: "Russian", level: "A1" }
      ],
      skillsList: [
        "C/C++", "PHP", "JavaScript", "Laravel", "CodeIgniter", "HTML/CSS", 
        "CodeIgniter", "Laravel", "Node.js", "Vue.js", "Nuxt.js", "Bootstrap", 
        "WordPress", "Elementor", "WooCommerce", "Payment Integration", "Yoast SEO",
        "MySQL", "MSSQL", "PostgreSQL", "MongoDB", "SQLite",
        "SEO Strategy", "Technical SEO", "Problem Solving", "Leadership", 
        "Business Development", "Client Relations", "Time Management", "Innovation", "Adaptability", "Data Analysis"
      ]
    }
  },
  az: {
    nav: {
      home: "Əsas",
      portfolio: "Proqramlaşdırma",
      seo: "SEO",
      cv: "CV"
    },
    home: {
      greeting: "Salam, mən",
      name: "Ələkbər Məmməd",
      title: "Aparıcı Proqramçı, Biznes İnkişafı Mütəxəssisi",
      description: "Təxminən on illik proqram mühəndisliyi təcrübəmə paralel olaraq, Azərbaycan və Kanada bazarlarında müxtəlif sahələr üzrə bir neçə startapın qurulmasında və inkişafında fəal iştirak etmişəm. Problem həll etmə və biznes inkişafı isə təkcə peşəkar fəaliyyətimin deyil, şəxsi maraqlarımın da əsas hissəsini təşkil edir. Qısaca mən kompleks çağırışları innovativ və miqyaslana bilən məhsullara çevirən, yüksək ixtisaslı proqramçı, biznes inkişaf mütəxəssisi və daim irəliyə baxan problem həll edənəm.",
      cta: "İşlərim"
    },
    portfolio: {
      title: "İşlərim",
      subtitle: "Son zamanlar üzərində işlədiyim layihələr toplusu.",
      viewDetails: "Layihəyə Bax",
      labels: {
        sector: "Sektor",
        market: "Bazar",
        tech: "Texnologiyalar"
      },
      projects: [
        { title: "A-Nur", sector: "Tikinti", market: "Azərbaycan", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "Azimut Audit", sector: "Maliyyə", market: "Azərbaycan", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "Bizim Show", sector: "Media", market: "Azərbaycan", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "Iceberg Aqua", sector: "Onlayn ticarət, ev əşyaları", market: "Azərbaycan", technologies: "WordPress, Elementor, PHP, MySQL, WooCommerce, ödəniş inteqrasiyası, daxili CRM", url: "https://google.com" },
        { title: "IMMdoc", sector: "Hüquq", market: "Kanada", technologies: "PHP (CodeIgniter), MySQL, HTML, CSS, Bootstrap, ödəniş inteqrasiyası", url: "https://google.com" },
        { title: "First Step Tourism", sector: "Turizm", market: "Azərbaycan", technologies: "WordPress, Elementor, PHP (Laravel), MySQL, ödəniş inteqrasiyası", url: "https://google.com" },
        { title: "Konan Immigration Law Firm", sector: "Hüquq", market: "Kanada", technologies: "WordPress, Elementor, PHP, MySQL, ödəniş inteqrasiyası, xüsusi rezervasiya və profil dəyərləndirmə sistemləri", url: "https://google.com" },
        { title: "Macis Consulting", sector: "Maliyyə", market: "Azərbaycan", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "Missiya Təhsil Şirkəti", sector: "Təhsil", market: "Azərbaycan", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "ShowAz News", sector: "Media", market: "Azərbaycan", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "Sivu", sector: "Tikinti", market: "Azərbaycan", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "Waterfall", sector: "Onlayn ticarət, ev əşyaları", market: "Türkiyə", technologies: "WordPress, Elementor, PHP, MySQL, WooCommerce, ödəniş inteqrasiyası, daxili CRM", url: "https://google.com" },
        { title: "All-Canada Notary", sector: "Hüquq", market: "Kanada", technologies: "WordPress, Elementor, PHP (Laravel), MySQL, ödəniş inteqrasiyası, daxili CRM", url: "https://google.com" },
        { title: "B2B Group", sector: "İT", market: "Azərbaycan", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "KorpON", sector: "İT və maliyyə texnologiyaları", market: "Azərbaycan", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "Indigo Printing House", sector: "Çap və poliqrafiya", market: "Azərbaycan", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "Provincial Pest Control", sector: "Xidmət", market: "Kanada", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "Azərbaycan Kapoeyra Federasiyası", sector: "İdman", market: "Azərbaycan", technologies: "Nuxt.js, C# (ASP.NET Core), MSSQL", url: "https://google.com" },
        { title: "SuFiltri.az", sector: "Onlayn ticarət, ev əşyaları", market: "Azərbaycan", technologies: "PHP, MySQL, WooCommerce, ödəniş inteqrasiyası, daxili CRM", url: "https://google.com" },
        { title: "Smart Steel", sector: "Tikinti", market: "Rusiya", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" }
      ]
    },
    seo: {
      title: "SEO Layihələr",
      subtitle: "Müxtəlif müştərilər üçün kompleks SEO strategiyaları və tətbiqi.",
      tasksLabel: "Görülən İşlər",
      viewDetails: "Layihəyə Bax",
      labels: {
        name: "Ad",
        keywords: "Açar Sözlər",
        position: "Mövqe"
      },
      projectsList: [
        { name: "Iceberg Aqua", keywords: "Su Filtrləri, Çatdırılma", position: "Top 3", url: "https://google.com" },
        { name: "IMMdoc", keywords: "İmmiqrasiya Kanada, Vəkil", position: "Top 5", url: "https://google.com" },
        { name: "First Step Tourism", keywords: "Bakı Turları, Səyahət", position: "Top 3", url: "https://google.com" },
        { name: "Konan Immigration Law Firm", keywords: "Hüquq Xidmətləri, Kanada", position: "Top 10", url: "https://google.com" },
        { name: "Macis Consulting", keywords: "Mühasibat, Vergi Auditi", position: "Top 5", url: "https://google.com" },
        { name: "All-Canada Notary", keywords: "Notarius, Hüquq", position: "Top 3", url: "https://google.com" },
        { name: "B2B Group", keywords: "İT Xidmətləri, Şəbəkə", position: "Top 10", url: "https://google.com" },
        { name: "KorpON", keywords: "Fintex, Korporativ", position: "Top 5", url: "https://google.com" },
        { name: "Indigo Printing House", keywords: "Çap, Poliqrafiya", position: "Top 3", url: "https://google.com" },
        { name: "Provincial Pest Control", keywords: "Zərərvericilərə Qarşı Mübarizə", position: "Top 1", url: "https://google.com" },
        { name: "SuFiltri.az", keywords: "Su Filtrləri Bakı", position: "Top 3", url: "https://google.com" }
      ],
      commonTasks: [
        "Açar söz tədqiqatı",
        "Sayt daxili optimizasiya",
        "Məzmun strategiyası",
        "Geri bağlantı qurulması",
        "Texniki SEO auditi",
        "Performans izlənməsi və hesabatlandırma"
      ]
    },
    cv: {
      sections: {
        personal: "Şəxsi Məlumat",
        summary: "Peşəkar Xülasə",
        experience: "İş Təcrübəsi",
        skills: "BACARIQLAR",
        languages: "DİLLƏR",
        education: "TƏHSİL"
      },
      personal: {
        name: "Ələkbər Məmməd",
        phone: "+994 70 331 33 07",
        email: "elekbermammad@gmail.com",
        linkedin: "linkedin.com/in/alakbarmammad",
        location: "Bakı, Azərbaycan",
        availability: "İşə açıqdır"
      },
      socialMedia: {
        facebook: "https://www.facebook.com/alakbarmammad",
        instagram: "https://www.instagram.com/alakbarmammad",
        linkedin: "https://www.linkedin.com/in/alakbarmammad",
        tiktok: "https://www.tiktok.com/@alakbarmammad",
        blog: "https://elekbermammad.wordpress.com"
      },
      summary: "Təxminən on illik proqram mühəndisliyi təcrübəmə paralel olaraq, Azərbaycan və Kanada bazarlarında müxtəlif sahələr üzrə bir neçə startapın qurulmasında və inkişafında fəal iştirak etmişəm.",
      experience: [
        { role: "Founder", company: "First Step Tourism", period: "2024 - present", location: "Bakı, Azərbaycan", description: "“First Step Tourism” şirkəti olaraq məqsədimiz insanlara “ilk addımlarını at” devizi ilə turistik səfərlərini asanlaşdıracaq həllər təqdim etmək, səfərin hər anını dəqiq və şəffaf şəkildə planlayaraq sadəcə səyahətin zövqünü yaşatmaqdır. " },
        { role: "Chief Technology Officer", company: "All-Canada Notary", period: "2021 - present", location: "Toronto, Canada", description: "All-Canada Notary performs both electronic/online and in-person notarization services with ease. We offer our clients affordable, fast, easy and secure notarization services." },
        { role: "Chief Technology Officer", company: "Lavish Yields Inc.", period: "2020 - 2023", location: "Toronto, Canada", description: "We specialize in providing cutting-edge data-driven legal solutions for the modern legal landscape. With the rapid advancements in technology and the increasing complexity of legal matters, we understand the critical need for innovative approaches to support legal professionals in delivering exceptional outcomes for their clients." },
        { role: "Senior Project Manager", company: "Lytech Россия", period: "2022 - 2023", location: "Москва, Россия", description: "Компания Lytech, запущенная в Азербайджане в 2019 году, специализируется на создании бизнес-решений, цифровом консалтинге и трансформации предприятий любого размера, а также аудите ИКТ." },
        { role: "Senior Project Manager", company: "Lytech Azərbaycan", period: "2019 - 2023", location: "Bakı, Azərbaycan", description: "2019-cu ildə Azərbaycanda fəaliyyətə başlayan Lytech şirkəti biznes və data həllərinin yaradılması, istənilən həcmli müəssisələrə rəqəmsal konsaltinq və transformasiya və İKT audit sahəsində ixtisaslaşmışdır." },
        { role: "Software Developer", company: "Dinamik Ocean", period: "2015 - 2020", location: "Bakı, Azərbaycan", description: "" },
        { role: "Software Developer", company: "Konan Immigration Law Firm", period: "2018 - 2019", location: "Toronto, Canada", description: "" },
        { role: "Software Developer", company: "Mikro Yazılım A.Ş.", period: "2011 - 2012", location: "İstanbul, Türkiye", description: "" }
      ],
      education: [
        {
          degree: "Fizika",
          school: "Orta Doğu Teknik Üniversitesi",
          period: "2015 - 2016 (tərk edib)"
        }
      ],
      languages: [
        { name: "İngilis", level: "B2" },
        { name: "Türk", level: "B2" },
        { name: "Ərəb", level: "A1" },
        { name: "Rus", level: "A1" }
      ],
      skillsList: [
        "C/C++", "PHP", "JavaScript", "Laravel", "CodeIgniter", "HTML/CSS", 
        "CodeIgniter", "Laravel", "Node.js", "Vue.js", "Nuxt.js", "Bootstrap", 
        "WordPress", "Elementor", "WooCommerce", "Payment Integration", "Yoast SEO",
        "MySQL", "MSSQL", "PostgreSQL", "MongoDB", "SQLite",
        "SEO Strategy", "Technical SEO", "Problem Solving", "Leadership", 
        "Business Development", "Client Relations", "Time Management", "Innovation", "Adaptability", "Data Analysis"
      ]
    }
  },
  ru: {
    nav: {
      home: "Главная",
      portfolio: "Софт",
      seo: "SEO",
      cv: "CV"
    },
    home: {
      greeting: "Привет, я",
      name: "Алакбар Маммад",
      title: "Старший разработчик, бизнес-девелопер",
      description: "Помимо почти десятилетнего опыта работы в сфере программной инженерии, я активно участвовал в создании и развитии нескольких стартапов в различных отраслях как на азербайджанском, так и на канадском рынках. Решение сложных задач и бизнес-развитие являются не только частью моей профессиональной деятельности, но и моими личными увлечениями. Вкратце: я — старший разработчик, бизнес-девелопер и человек, который стремится превращать сложные вызовы в инновационные и масштабируемые продукты.",
      cta: "Работы"
    },
    portfolio: {
      title: "Избранные Работы",
      subtitle: "Коллекция проектов, над которыми я недавно работал.",
      viewDetails: "Смотреть Проект",
      labels: {
        sector: "Сектор",
        market: "Рынок",
        tech: "Технологии"
      },
      projects: [
        { title: "A-Nur", sector: "Строительство", market: "Азербайджан", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "Azimut Audit", sector: "Финансы", market: "Азербайджан", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "Bizim Show", sector: "Медиа", market: "Азербайджан", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "Iceberg Aqua", sector: "Электронная коммерция", market: "Азербайджан", technologies: "WordPress, Elementor, PHP, MySQL, WooCommerce, Payment Integration, Internal CRM", url: "https://google.com" },
        { title: "IMMdoc", sector: "Юриспруденция", market: "Канада", technologies: "PHP (CodeIgniter), MySQL, HTML, CSS, Bootstrap, Payment Integration", url: "https://google.com" },
        { title: "First Step Tourism", sector: "Туризм", market: "Азербайджан", technologies: "WordPress, Elementor, PHP (Laravel), MySQL, Payment Integration", url: "https://google.com" },
        { title: "Konan Immigration Law Firm", sector: "Юриспруденция", market: "Канада", technologies: "WordPress, Elementor, PHP, MySQL, Payment Integration, Custom Booking & Assessment Systems", url: "https://google.com" },
        { title: "Macis Consulting", sector: "Финансы", market: "Азербайджан", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "Missiya Təhsil Şirkəti", sector: "Образование", market: "Азербайджан", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "ShowAz News", sector: "Медиа", market: "Азербайджан", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "Sivu", sector: "Строительство", market: "Азербайджан", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "Waterfall", sector: "Электронная коммерция", market: "Турция", technologies: "WordPress, Elementor, PHP, MySQL, WooCommerce, Payment Integration, Internal CRM", url: "https://google.com" },
        { title: "All-Canada Notary", sector: "Юриспруденция", market: "Канада", technologies: "WordPress, Elementor, PHP (Laravel), MySQL, Payment Integration, Internal CRM", url: "https://google.com" },
        { title: "B2B Group", sector: "IT", market: "Азербайджан", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "KorpON", sector: "IT & FinTech", market: "Азербайджан", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "Indigo Printing House", sector: "Полиграфия", market: "Азербайджан", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "Provincial Pest Control", sector: "Сервис", market: "Канада", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" },
        { title: "Azərbaycan Kapoeyra Federasiyası", sector: "Спорт", market: "Азербайджан", technologies: "Nuxt.js, C# (ASP.NET Core), MSSQL", url: "https://google.com" },
        { title: "SuFiltri.az", sector: "Электронная коммерция", market: "Азербайджан", technologies: "PHP, MySQL, WooCommerce, Payment Integration, Internal CRM", url: "https://google.com" },
        { title: "Smart Steel", sector: "Строительство", market: "Россия", technologies: "WordPress, Elementor, PHP, MySQL", url: "https://google.com" }
      ]
    },
    seo: {
      title: "SEO Проекты",
      subtitle: "Комплексные SEO стратегии и внедрение для различных клиентов.",
      tasksLabel: "Основные Задачи",
      viewDetails: "Смотреть Проект",
      labels: {
        name: "Название",
        keywords: "Ключевые слова",
        position: "Позиция"
      },
      projectsList: [
        { name: "Iceberg Aqua", keywords: "Фильтры для воды, Доставка", position: "Топ 3", url: "https://google.com" },
        { name: "IMMdoc", keywords: "Иммиграция Канада, Адвокат", position: "Топ 5", url: "https://google.com" },
        { name: "First Step Tourism", keywords: "Туры Баку, Путешествия", position: "Топ 3", url: "https://google.com" },
        { name: "Konan Immigration Law Firm", keywords: "Юридические услуги, Канада", position: "Топ 10", url: "https://google.com" },
        { name: "Macis Consulting", keywords: "Бухгалтерия, Налоговый аудит", position: "Топ 5", url: "https://google.com" },
        { name: "All-Canada Notary", keywords: "Нотариус, Право", position: "Топ 3", url: "https://google.com" },
        { name: "B2B Group", keywords: "IT Услуги, Сети", position: "Топ 10", url: "https://google.com" },
        { name: "KorpON", keywords: "Финтех, Корпоративный", position: "Топ 5", url: "https://google.com" },
        { name: "Indigo Printing House", keywords: "Печать, Полиграфия", position: "Топ 3", url: "https://google.com" },
        { name: "Provincial Pest Control", keywords: "Борьба с вредителями Канада", position: "Топ 1", url: "https://google.com" },
        { name: "SuFiltri.az", keywords: "Фильтры для воды Баку", position: "Топ 3", url: "https://google.com" }
      ],
      commonTasks: [
        "Исследование ключевых слов",
        "Внутренняя оптимизация",
        "Контент-стратегия",
        "Построение обратных ссылок",
        "Технический SEO аудит",
        "Отслеживание производительности и отчетность"
      ]
    },
    cv: {
      sections: {
        personal: "Личная Информация",
        summary: "Профессиональное Резюме",
        experience: "Опыт Работы",
        skills: "Навыки",
        languages: "Языки",
        education: "Образование"
      },
      personal: {
        name: "Алакбар Маммад",
        phone: "+994 70 331 33 07",
        email: "elekbermammad@gmail.com",
        linkedin: "linkedin.com/in/alakbarmammad",
        location: "Баку, Азербайджан",
        availability: "Открыт к предложениям"
      },
      socialMedia: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com/in/username",
        tiktok: "https://tiktok.com",
        blog: "https://wordpress.com/blog"
      },
      summary: "Помимо почти десятилетнего опыта работы в сфере программной инженерии, я активно участвовал в создании и развитии нескольких стартапов в различных отраслях как на азербайджанском, так и на канадском рынках.",
      experience: [
        { role: "Founder", company: "First Step Tourism", period: "2024 - present", location: "Bakı, Azərbaycan", description: "“First Step Tourism” şirkəti olaraq məqsədimiz insanlara “ilk addımlarını at” devizi ilə turistik səfərlərini asanlaşdıracaq həllər təqdim etmək, səfərin hər anını dəqiq və şəffaf şəkildə planlayaraq sadəcə səyahətin zövqünü yaşatmaqdır. " },
        { role: "Chief Technology Officer", company: "All-Canada Notary", period: "2021 - present", location: "Toronto, Canada", description: "All-Canada Notary performs both electronic/online and in-person notarization services with ease. We offer our clients affordable, fast, easy and secure notarization services." },
        { role: "Chief Technology Officer", company: "Lavish Yields Inc.", period: "2020 - 2023", location: "Toronto, Canada", description: "We specialize in providing cutting-edge data-driven legal solutions for the modern legal landscape. With the rapid advancements in technology and the increasing complexity of legal matters, we understand the critical need for innovative approaches to support legal professionals in delivering exceptional outcomes for their clients." },
        { role: "Senior Project Manager", company: "Lytech Россия", period: "2022 - 2023", location: "Москва, Россия", description: "Компания Lytech, запущенная в Азербайджане в 2019 году, специализируется на создании бизнес-решений, цифровом консалтинге и трансформации предприятий любого размера, а также аудите ИКТ." },
        { role: "Senior Project Manager", company: "Lytech Azərbaycan", period: "2019 - 2023", location: "Bakı, Azərbaycan", description: "2019-cu ildə Azərbaycanda fəaliyyətə başlayan Lytech şirkəti biznes və data həllərinin yaradılması, istənilən həcmli müəssisələrə rəqəmsal konsaltinq və transformasiya və İKT audit sahəsində ixtisaslaşmışdır." },
        { role: "Software Developer", company: "Dinamik Ocean", period: "2015 - 2020", location: "Bakı, Azərbaycan", description: "" },
        { role: "Software Developer", company: "Konan Immigration Law Firm", period: "2018 - 2019", location: "Toronto, Canada", description: "" },
        { role: "Software Developer", company: "Mikro Yazılım A.Ş.", period: "2011 - 2012", location: "İstanbul, Türkiye", description: "" }
      ],
      education: [
        {
          degree: "Физика",
          school: "Middle East Technical University",
          period: "2015 - 2016 (покинул)"
        }
      ],
      languages: [
        { name: "Английский", level: "B2" },
        { name: "Турецкий", level: "B2" },
        { name: "Арабский", level: "A1" },
        { name: "Русский", level: "A1" }
      ],
      skillsList: [
        "C/C++", "PHP", "JavaScript", "Laravel", "CodeIgniter", "HTML/CSS", 
        "CodeIgniter", "Laravel", "Node.js", "Vue.js", "Nuxt.js", "Bootstrap", 
        "WordPress", "Elementor", "WooCommerce", "Payment Integration", "Yoast SEO",
        "MySQL", "MSSQL", "PostgreSQL", "MongoDB", "SQLite",
        "SEO Strategy", "Technical SEO", "Problem Solving", "Leadership", 
        "Business Development", "Client Relations", "Time Management", "Innovation", "Adaptability", "Data Analysis"
      ]
    }
  }
};
