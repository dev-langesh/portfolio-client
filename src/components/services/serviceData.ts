export type serviceDataType = {
  id: number;
  title: string;
  image: string;
  description: string;
};

export const serviceData: serviceDataType[] = [
  {
    id: 1,
    title: "MERN stack development",
    image: "/images/services/mern.png",
    description:
      "I will build the frontend with React.js | Next.js and backend with Node.js | Graphql | Express.js",
  },
  {
    id: 2,
    title: "Django",
    image: "/images/services/django.png",
    description:
      "I will build REST API's with Django | Django Rest Framework and integrate it with frontend ",
  },
  {
    id: 3,
    title: "Docker",
    image: "/images/services/docker.jpg",
    description:
      "I will containerize your Node.js | MERN stack application and deploy it to AWS ECS",
  },
  {
    id: 4,
    title: "Kubernetes",
    image: "/images/services/kubernetes.png",
    description:
      "I will set up Kubernetes to efficently manage your docker containers on the production environment",
  },
  {
    id: 5,
    title: "AWS",
    image: "/images/services/aws.jpg",
    description:
      "I will help you with various AWS services such as EC2 | Lambda | S3 | EFS | ECS | EKS ,...",
  },
  {
    id: 6,
    title: "Web Scraping",
    image: "/images/services/web-scraping.png",
    description: "I will scrape the data you want and put it in your website",
  },
];
