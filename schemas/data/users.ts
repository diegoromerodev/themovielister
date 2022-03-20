interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
}

type UserDataArray = UserData[];

const seedUsersArray: UserDataArray = [
  {
    firstName: "Diego",
    lastName: "Romero",
    email: "diegoromeroxd@email.com",
    username: "dieg0r0m3r0",
    password: "5278182@@@@",
  },
  {
    firstName: "Arturo",
    lastName: "Romero",
    email: "arturooooromerooooo@email.com",
    username: "art23r",
    password: "hashha333",
  },
  {
    firstName: "Magaly",
    lastName: "Urdaneta",
    email: "maggiemaga@email.com",
    username: "magxgaxmafalda",
    password: "bianca123+++",
  },
];

export default seedUsersArray;
