import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import AppContext from "../../../lib/AppContext";
import { customAxios } from "../../../lib/hooks/useAxiosInterceptor";
import { AppDataContext, PostSchema } from "../../../lib/types";

function EditPostView({ post }: { post: PostSchema }) {
  const router = useRouter();
  const [appData]: AppDataContext = useContext(AppContext);
  useEffect(() => {
    if (!post || post.UserId !== appData.userData.id) router.push("/");
  }, []);
  if (!post) return null;
  return (
    <div>
      <h1>EDIT POST</h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const { postId } = ctx.query;
  let post;
  try {
    const postRes = await customAxios(`/api/posts/${postId}`);
    post = postRes?.data;
  } catch {
    post = null;
  }
  return {
    props: {
      post,
    },
  };
};

export default EditPostView;
