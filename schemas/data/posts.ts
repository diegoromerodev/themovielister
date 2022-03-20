interface PostData {
  title: string;
  body: string;
  movie: number;
}

type PostDataArray = PostData[];

const seedPostData: PostDataArray = [
  {
    title: "Batman is good",
    body: "I recommend this movie",
    movie: 54,
  },
  {
    title: "Superman is nice",
    body: "Good movie",
    movie: 432,
  },
  {
    title: "Cult movie",
    body: "find movie nice",
    movie: 22,
  },
  {
    title: "The notebook is movie",
    body: "bad movie",
    movie: 31,
  },
  {
    title: "Test movue",
    body: "I recommend this movie",
    movie: 77,
  },
  {
    title: "Inception moves",
    body: "Nice movieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    movie: 21,
  },
];

export default seedPostData;
