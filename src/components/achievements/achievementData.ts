export type achievementDataType = {
  id: number;
  title: string;
  image: string;
  description: string;
  year?: string;
};

export const achievementData: achievementDataType[] = [
  {
    id: 1,
    title: "3 Day Hackathon By CSI and Revealer",
    image: "/images/achievements/neura.jpg",
    description:
      "We got II place in this hackathon conducted by IT department of SREC in association with Computer Society Of India ( CSI ) and Revealer Global Solutions Pvt Ltd",
    year: "2023",
  },
  {
    id: 2,
    title: "Technical Symposium",
    image: "/images/achievements/eie.jpg",
    description:
      "We got III place in National Level Technical Symposium conducted by EIE department SREC.",
    year: "2022",
  },
];
