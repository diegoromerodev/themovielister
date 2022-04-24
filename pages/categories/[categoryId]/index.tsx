import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ReactElement, useEffect } from "react";
import { useRouter } from "next/router";
import { AxiosResponse } from "axios";
import { CategorySchema } from "../../../lib/types";
import {
  PostPreviewDetails,
  SectionContainer,
  SectionHeader,
} from "../../../components/tabloids";
import { serverAxios } from "../../../lib/serverside/serverAxiosInterceptors";

interface CategoryDetailsProps {
  category: CategorySchema;
}

function CategoryDetails({ category }: CategoryDetailsProps): ReactElement {
  const router = useRouter();

  useEffect(() => {
    if (!category) {
      router.push("/");
    }
  }, [category]);

  if (!category) return null;

  return (
    <SectionContainer>
      <SectionHeader>{category.name}</SectionHeader>
      {category.Posts?.map((post) => (
        <PostPreviewDetails key={`index-post-${post.id}`} post={post} />
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
  return {
    props: {
      category: categoryRes?.data || null,
    },
  };
};

export default CategoryDetails;
