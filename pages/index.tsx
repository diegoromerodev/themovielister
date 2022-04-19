/* eslint-disable jsx-a11y/anchor-is-valid */
import { GetServerSideProps } from "next";
import PropTypes from "prop-types";
import pgSequelize from "../lib/sequelize";
import {
  PostPreviewDetails,
  SectionContainer,
  SectionHeader,
} from "../components/tabloids";
import { CategorySchema } from "../lib/types";
import { customAxios } from "../lib/hooks/useAxiosInterceptor";

function HomePage({ categories }: { categories: CategorySchema[] }) {
  return (
    <>
      {categories?.map((cat) => {
        return (
          <SectionContainer key={`category-header-${cat.id}`}>
            <SectionHeader>{cat.name}</SectionHeader>
            {cat.Posts?.map((post) => (
              <PostPreviewDetails key={`index-post-${post.id}`} post={post} />
            ))}
          </SectionContainer>
        );
      })}
      <div />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  await pgSequelize.sync({ force: true });
  const catRes = await customAxios.get("/api/categories");
  const categories: CategorySchema = catRes.data;

  return {
    props: {
      categories,
    },
  };
};

HomePage.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HomePage;
