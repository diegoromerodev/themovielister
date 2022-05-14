import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ReactElement, useEffect } from "react";
import { useRouter } from "next/router";
import { AxiosResponse } from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CategorySchema } from "../../../lib/types";
import {
  PostPreviewDetails,
  SectionContainer,
  SectionHeader,
} from "../../../components/tabloids";
import { serverAxios } from "../../../lib/serverside/serverAxiosInterceptors";
import IconsList from "../../../styles/IconsList";
import { CommentCountHash, getCommentCountHash } from "../../../lib/fetchUtils";

interface CategoryDetailsProps {
  category: CategorySchema;
  commentCountHash: CommentCountHash;
}

function CategoryDetails({
  category,
  commentCountHash,
}: CategoryDetailsProps): ReactElement {
  const router = useRouter();

  useEffect(() => {
    if (!category) {
      router.push("/");
    }
  }, [category]);

  if (!category) return null;

  return (
    <SectionContainer>
      <SectionHeader>
        <FontAwesomeIcon icon={IconsList[category.id % IconsList.length]} />
        &nbsp;&nbsp;{category.name}
      </SectionHeader>
      {category.Posts?.map((post) => (
        <PostPreviewDetails
          key={`index-post-${post.id}`}
          commentCount={commentCountHash[post.id]}
          post={post}
        />
      ))}
    </SectionContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const { categoryId } = ctx.query;
  let categoryRes: AxiosResponse;
  try {
    categoryRes = await serverAxios(`/api/categories/${categoryId}`);
  } catch {
    categoryRes = null;
  }
  const commentCountHash = await getCommentCountHash();
  return {
    props: {
      category: categoryRes?.data || null,
      commentCountHash,
    },
  };
};

export default CategoryDetails;
