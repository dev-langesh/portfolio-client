export type projectDataType = {
  id: number;
  title: string;
  image: string;
  description: string;
};

export const projectData: projectDataType[] = [
  {
    id: 1,
    image: "/images/projects/hr-assist.png",
    title: "HR Assistant",
    description:
      "This application will rank the candidates based on their resume, personality and apptitude test results",
  },
  {
    id: 2,
    image: "/images/projects/coin.png",
    title: "Online SREC COIN Registery",
    description:
      "I have build this project for SREC COIN. This application holds the entry details of students and faculties",
  },
  //   {
  //     id: 3,
  //     image: "/images/projects/mlsa.png",
  //     title: "MLSA community SREC",
  //     description: "I have build this project for MLSA community",
  //   },
  {
    id: 3,
    image: "/images/projects/book-store.png",
    title: "Online Book Store",
    description:
      "I have build this project for my client. This is an e-commerce application for selling Books.",
  },
  {
    id: 4,
    image: "/images/projects/university.png",
    title: "University Extension Unit",
    description:
      "I have build this project for my client. This application enable the university to manage the classrooms",
  },
  {
    id: 5,
    image: "/images/projects/progress.png",
    title: "Progress Tracker",
    description:
      "This application enable the user to set tasks and monitor the progress. I've done this for my client",
  },
  {
    id: 6,
    image: "/images/projects/image-editor.png",
    title: "Image Editor",
    description:
      "This application is a web based image editor. Through this the user can easily edit the images they want.",
  },
];
