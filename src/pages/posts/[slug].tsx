import Head from "next/head";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import PostLayout from "@/layouts/PostLayout/PostLayout";

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
}

const Post = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <PostLayout post={post} />
    </>
  );
};

export default Post;
