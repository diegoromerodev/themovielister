/* eslint-disable jsx-a11y/anchor-is-valid */
import { GetServerSideProps } from "next";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import ellipsize from "ellipsize";
import pgSequelize from "../lib/sequelize";
import {
  PostPreviewDetails,
  SectionContainer,
  SectionHeader,
} from "../components/tabloids";
import { CategorySchema } from "../lib/types";
import { customAxios } from "../lib/hooks/useAxiosInterceptor";
import { CenteringPositions, FlexRow } from "../components/containers";
import ColorPalette from "../styles/ColorPalette";
import { CommentCountHash, getCommentCountHash } from "../lib/fetchUtils";
import IconsList from "../styles/IconsList";

const SeeMoreLink = styled.a`
  color: ${ColorPalette.light};
  font-weight: 700;
  font-size: 0.8rem;
  position: absolute;
  right: 1rem;
  padding: 0.3rem 0.5rem;
  background-color: ${ColorPalette.info};
  border-radius: 4rem;
  @media (max-width: 1200px) {
    padding: 0.3rem 1rem;
    .disappearResponsive {
      display: none;
    }
  }
`;

function HomePage({
  categories,
  commentsPerPostHash,
}: {
  categories: CategorySchema[];
  commentsPerPostHash: CommentCountHash;
}) {
  return categories?.map((cat) => (
    <SectionContainer key={`category-header-${cat.id}`}>
      <FlexRow
        align={CenteringPositions.Center}
        justify={CenteringPositions.Center}
      >
        <SectionHeader>
          <FontAwesomeIcon icon={IconsList[cat.id % IconsList.length]} />
          &nbsp;&nbsp;
          {ellipsize(cat.name, 24)}
        </SectionHeader>
        <Link href={`/categories/${cat.id}`} passHref>
          <SeeMoreLink>
            <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
            <span className="disappearResponsive">&nbsp;&nbsp;See more</span>
          </SeeMoreLink>
        </Link>
      </FlexRow>
      {cat.Posts?.slice(0, 4).map((post) => (
        <PostPreviewDetails
          commentCount={commentsPerPostHash[post.id]}
          key={`index-post-${post.id}`}
          post={post}
        />
      ))}
    </SectionContainer>
  ));
}

export const getServerSideProps: GetServerSideProps = async () => {
  await pgSequelize.sync({ force: true });
  const catRes = await customAxios.get("/api/categories");
  const commentsPerPostHash = await getCommentCountHash();
  const categories: CategorySchema = catRes.data;
  return {
    props: {
      categories,
      commentsPerPostHash,
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
