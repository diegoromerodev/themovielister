interface CategoryData {
  name: string;
}

type CategoryDataArray = CategoryData[];

const seedCategoryData: CategoryDataArray = [
  {
    name: "General Discussions",
  },
  {
    name: "Recommendation Lists",
  },
  {
    name: "The Lounge",
  },
];

export default seedCategoryData;
