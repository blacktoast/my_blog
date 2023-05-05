import Head from "next/head";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Post } from "contentlayer/generated";

const PostLayout = ({ post }: { post: Post }) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="mx-auto max-w-2xl py-16">
        <div className="mb-6 text-center">
          <Link href="/">Home</Link>
        </div>
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
        </div>

        <div className="test">
          <MDXContent />
        </div>
      </article>
    </>
  );
};

export default PostLayout;
