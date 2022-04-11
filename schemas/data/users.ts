interface UserData {
  firstName: string;
  lastName: string;
  bio: string;
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
    bio: "A tall, overweight, tan skinned person with angled lips, a large nose, stern, large, blue eyes and thick eyebrows. They have a distinctive scar on their left leg.",
  },
  {
    firstName: "Magaly",
    lastName: "Urdaneta",
    email: "maggiemaga@email.com",
    username: "magxgaxmafalda",
    avatarURL: "https://i.ytimg.com/vi/Okdac8XwP_U/maxresdefault.jpg",
    password: "bianca123+++",
    bio: "An obese, bronze skinned man with angular eyebrows and angled lips. He has a uniquely styled, unkempt beard and moustache, seems expressive, and has pierced his chin.",
  },
];

export default seedUsersArray;
