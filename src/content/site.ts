export const site = {
  name: 'Marcelo Noguti',
  role: 'Lead Backend Engineer',
  headline: 'Building scalable systems. Solving complex problems.',
  bio: 'Senior Backend Engineer with 10+ years of experience designing, building, and scaling SaaS platforms, APIs, and distributed backend systems. Proven track record leading architecture initiatives and shipping business-critical features across globally distributed teams.',
  github: 'https://github.com/marcelonoguti',
  linkedin: 'https://linkedin.com/in/marcelonoguti',
  engineeringFocus: [
    {
      title: 'Backend Systems & APIs',
      description:
        'Planning, building and deploying backend systems, APIs and operational workflows for SaaS products.',
    },
    {
      title: 'Integrations & Platform Ecosystems',
      description:
        'Working with third-party platforms across payments, ecommerce, communications and business tooling.',
    },
    {
      title: 'Cloud Infrastructure & Operations',
      description:
        'Hands-on ownership of cloud environments, deployments, containers, databases, logging and operational infrastructure.',
    },
    {
      title: 'Reliability & Production Problem Solving',
      description:
        'Debugging production issues, maintaining integrations, managing upgrades and improving operational robustness.',
    },
    {
      title: 'Leadership, AI & Engineering Exploration',
      description:
        'Backend team leadership, technical direction and exploration of new technologies, tooling and engineering approaches.',
    },
  ],
  experience: [
    {
      role: 'Senior Software Engineer',
      company: 'AgencyAnalytics',
      period: 'Nov 2025 – May 2026',
      summary:
        'Remote role on a platform that helps marketing agencies build, manage, and deliver client reports and dashboards.',
      achievements: [
        'Led early LLM integration initiatives to introduce AI-powered capabilities into reporting and dashboard workflows',
        'Improved backend reliability through monitoring, error tracking, and proactive production debugging, helping reduce customer churn risk',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'Grin Inc',
      period: 'Aug 2024 – Nov 2025',
      summary:
        'Remote role improving scalability and performance of core product workflows for brands with 1M+ followers.',
      achievements: [
        'Improved scalability and performance of core product workflows, helping reduce customer churn linked to platform responsiveness',
        'Investigated customer-reported incidents and complex bugs using observability practices, cutting resolution time by 50%',
        'Contributed to the product roadmap by evaluating technical feasibility and risks, enabling better planning and delivery efficiency',
      ],
    },
    {
      role: 'CTO',
      company: 'AgileMS',
      period: 'Aug 2022 – Aug 2024',
      summary:
        'Led engineering strategy and backend architecture for the company’s SaaS platform in Florianópolis.',
      achievements: [
        'Managed backend team development and established observability practices with AWS CloudWatch to support 99.9%+ uptime',
        'Introduced CI/CD pipelines, frontend architecture improvements, and engineering practices that accelerated delivery velocity',
        'Partnered with product stakeholders to balance technical debt, scalability, and business priorities',
      ],
    },
    {
      role: 'Principal Backend Engineer',
      company: 'AgileMS',
      period: 'Oct 2017 – Aug 2022',
      summary:
        'Architected and scaled the company’s core backend platform from inception through growth.',
      achievements: [
        'Architected and delivered the company’s core API from inception, establishing the technical foundation for the platform',
        'Led backend engineering initiatives across architecture, implementation, deployment, and scaling',
        'Defined API standards and cross-team integration protocols between frontend and backend systems',
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
        'API Design',
        'Microservices',
      ],
    },
    {
      title: 'Databases',
      icon: 'database' as const,
      items: [
        'MySQL',
        'Redis',
        'Database Design',
        'Query Optimization',
      ],
    },
    {
      title: 'Infrastructure',
      icon: 'cloud' as const,
      items: ['Docker', 'AWS', 'CI/CD', 'Monitoring', 'Observability'],
    },
    {
      title: 'Engineering',
      icon: 'engineering' as const,
      items: [
        'System Design',
        'Architecture',
        'Technical Leadership',
        'Agile',
      ],
    },
    {
      title: 'AI & Tools',
      icon: 'sparkles' as const,
      items: [
        'Laravel AI SDK',
        'Prompt Engineering',
        'Tool Integration',
        'Structured Output Schemas',
      ],
    },
  ],
  openSource: [
    {
      name: 'Laravel Boleto',
      url: 'https://github.com/eduardokum/laravel-boleto',
      period: '2019',
      description:
        'Contributions to a Laravel package for generating boletos and CNAB remittance files, a widely used payment method in Brazil.',
    },
  ],
} as const
