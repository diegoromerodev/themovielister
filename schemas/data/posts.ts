interface PostData {
  title: string;
  body: string;
  movie: string;
}

type PostDataArray = PostData[];

const seedPostData: PostDataArray = [
  {
    title: "Batman is good",
    body: "I recommend this movie",
    movie: "tt2953050",
  },
  {
    title: "Superman is nice",
    body: "Good movie",
    movie: "tt10872600",
  },
  {
    title: "Cult movie",
    body: "find movie nice",
    movie: "tt1877830",
  },
  {
    title: "The notebook is movie",
    body: "bad movie",
    movie: "tt11286314",
  },
  {
    title: "Test movue",
    body: "I recommend this movie",
    movie: "tt7286456",
  },
  {
    title: "Inception moves",
    body: "Nice movieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    movie: "tt0468569",
  },
  {
    title: "Is this that coco movie??????",
    body: "I hnoestly really think it is that movie",
    movie: "tt6467266",
  },
  {
    title: "Flying is really cool tho",
    body: "We really have to fly a lot now",
    movie: "tt10160804",
  },
  {
    title: "I shat it down by me self",
    body: "It is now shat",
    movie: "tt1745960",
  },
];

export default seedPostData;
