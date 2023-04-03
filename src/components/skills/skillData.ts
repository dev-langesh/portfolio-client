export type skillsType = {
  id: number;
  category: string;
  skills: string[];
};

export const skillData: skillsType[] = [
  {
    id: 1,
    category: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux.js",
    ],
  },
  {
    id: 2,
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Mongodb",
      "Django",
      "Graphql",
      "Postgresql",
    ],
  },
  {
    id: 3,
    category: "AWS",
    skills: ["EC2", "Lambda", "S3", "ECS", "EKS", "Route 53", "EFS"],
  },
  {
    id: 4,
    category: "Devops",
    skills: [
      "Docker",
      "Kubernetes",
      "Git",
      "Github Actions",
      "Jest",
      "Selenium",
    ],
  },
  {
    id: 5,
    category: "Web Scraping",
    skills: ["Scrapy", "Selenium", "Python", "Beautiful Soup"],
  },
];
