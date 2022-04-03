interface UserData {
  firstName: string;
  lastName: string;
  avatarURL: string;
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
    avatarURL: "https://i.ytimg.com/vi/yaX4iGw-b_Y/maxresdefault.jpg",
    password: "hashha333",
  },
  {
    firstName: "Magaly",
    lastName: "Urdaneta",
    email: "maggiemaga@email.com",
    username: "magxgaxmafalda",
    avatarURL: "https://i.ytimg.com/vi/Okdac8XwP_U/maxresdefault.jpg",
    password: "bianca123+++",
  },
];

export default seedUsersArray;
