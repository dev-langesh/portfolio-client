export type inputFieldDataType = {
  id: number;
  name: string;
  inputType?: string;
  placeholder: string;
};

export const inputFieldData: inputFieldDataType[] = [
  {
    id: 1,
    name: "name",
    placeholder: "Name",
  },
  {
    id: 2,
    name: "to",
    inputType: "email",
    placeholder: "Email",
  },
  {
    id: 3,
    name: "subject",
    placeholder: "Subject",
  },
  {
    id: 4,
    name: "text",
    placeholder: "Body",
    inputType: "text area",
  },
];
