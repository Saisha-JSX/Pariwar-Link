// utils/familyData.js
export const initialFamily = {
  id: "1",
  name: "You",
  status: "Alive",
  dob: "1990-01-01",
  relation: "Self",
  photo: "/path/to/photo.jpg",
  children: [],
  parents: [
    {
      id: "2",
      name: "Father",
      status: "Alive",
      dob: "1960-01-01",
      relation: "Father",
      photo: "/path/to/father.jpg",
      children: [],
    },
    {
      id: "3",
      name: "Mother",
      status: "Alive",
      dob: "1965-01-01",
      relation: "Mother",
      photo: "/path/to/mother.jpg",
      children: [],
    },
  ],
};
