interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  role?: string;
}

type UserDataArray = UserData[];

const seedUsersArray: UserDataArray = [
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
