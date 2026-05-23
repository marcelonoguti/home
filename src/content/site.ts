export const site = {
  name: 'Marcelo Noguti',
  role: 'Principal Software Engineer',
  headline: 'Building scalable systems. Solving complex problems.',
  bio: 'Principal Software Engineer with 10+ years of experience building scalable backend systems, APIs, and integrations. I turn complex business requirements into clean, maintainable solutions that teams can rely on.',
  email: 'marcelo@techmail.com',
  github: 'https://github.com/marcelonoguti',
  linkedin: 'https://linkedin.com/in/marcelonoguti',
  resumeUrl: '/resume.pdf',
  projectsUrl: 'https://github.com/marcelonoguti',
  projects: [
    {
      title: 'Doctor Appointment API',
      description:
        'RESTful API for medical appointment scheduling with real-time availability, automated reminders, and EMR integration.',
      tags: ['Laravel', 'MySQL', 'Redis', 'Docker', 'API'],
      icon: 'calendar' as const,
    },
    {
      title: 'Raffle Algorithm Engine',
      description:
        'Probabilistic prize engine with transparent odds, audit trails, and configurable tier-based allocation.',
      tags: ['PHP', 'Algorithms', 'Redis', 'Laravel'],
      icon: 'brain' as const,
    },
    {
      title: 'Microservice Integration Layer',
      description:
        'Event-driven sync between CMS and legacy monolith with retry logic, dead-letter queues, and full observability.',
      tags: ['Node.js', 'RabbitMQ', 'Docker', 'AWS'],
      icon: 'layers' as const,
    },
  ],
  experience: [
    {
      role: 'Principal Software Engineer',
      company: 'Tech Solutions Inc.',
      period: '2016 – Present',
      summary:
        'Leading backend architecture and technical direction for enterprise SaaS products.',
      achievements: [
        'Architected REST API serving 80K+ daily requests with 99.9% uptime',
        'Established Docker-based deployment pipeline cutting release time by 60%',
        'Mentored team of 6 developers on Laravel best practices and system design',
      ],
    },
    {
      role: 'Senior Backend Developer',
      company: 'Digital Agency Co.',
      period: '2013 – 2016',
      summary:
        'Built and maintained Laravel applications for high-traffic e-commerce and content platforms.',
      achievements: [
        'Delivered 12+ client projects on time with reusable component library',
        'Optimized database queries reducing page load times by 40%',
        'Integrated third-party payment and shipping APIs across multiple storefronts',
      ],
    },
    {
      role: 'Full Stack Developer',
      company: 'Web Studio',
      period: '2010 – 2013',
      summary:
        'Full-stack development for marketing sites and CMS-powered web applications.',
      achievements: [
        'Built custom CMS themes and plugins for 20+ client websites',
        'Implemented responsive layouts and cross-browser compatibility standards',
        'Collaborated directly with designers to translate mockups into production code',
      ],
    },
  ],
  skillGroups: [
    {
      title: 'Backend',
      icon: 'code' as const,
      items: [
        'PHP / Laravel',
        'Node.js',
        'REST APIs',
        'Express',
        'API Design',
        'Microservices',
      ],
    },
    {
      title: 'Databases',
      icon: 'database' as const,
      items: [
        'MySQL',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'Database Design',
        'Query Optimization',
      ],
    },
    {
      title: 'Infrastructure',
      icon: 'cloud' as const,
      items: ['Docker', 'AWS', 'Linux', 'CI/CD', 'Nginx', 'Monitoring'],
    },
    {
      title: 'Engineering',
      icon: 'engineering' as const,
      items: [
        'System Design',
        'Architecture',
        'Code Review',
        'Technical Leadership',
        'Agile',
      ],
    },
    {
      title: 'AI & Tools',
      icon: 'sparkles' as const,
      items: [
        'OpenAI / LLMs',
        'Prompt Engineering',
        'Git',
        'Jira',
        'Figma (basic)',
      ],
    },
  ],
} as const
