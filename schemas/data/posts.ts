interface PostData {
  title: string;
  body: string;
  MovieId: string;
}

type PostDataArray = PostData[];

const seedPostData: PostDataArray = [
  {
    title: "Batman is good",
    body: "I recommend this movie",
    MovieId: "54",
  },
  {
    title: "Superman is nice",
    body: "Good movie",
    MovieId: "432",
  },
  {
    title: "Cult movie",
    body: "find movie nice",
    MovieId: "22",
  },
  {
    title: "The notebook is movie",
    body: "bad movie",
    MovieId: "31",
  },
  {
    title: "Test movue",
    body: "I recommend this movie",
    MovieId: "77",
  },
  {
    title: "Inception moves",
    body: "Nice movieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    MovieId: "21",
  },
];

export default seedPostData;
