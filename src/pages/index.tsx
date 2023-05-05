import Head from "next/head";
import Link from "next/link";
import { allPosts, Post } from "contentlayer/generated";

export async function getStaticProps() {
  const posts = allPosts;
  return { props: { posts } };
}

function PostCard(post: Post) {
  console.log(post);

  return (
    <div className="mb-6">
      <time
        dateTime={post.date}
        className="block text-sm text-slate-600"
      ></time>

      <h2 className="text-lg">
        <Link href={post.url}>{post.title}</Link>
      </h2>
    </div>
  );
}
export default function Home({ posts }: { posts: any[] }) {
  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <Head>
        <title>Contentlayer Blog Example</title>
      </Head>

      <h1 className="mb-8 text-3xl font-bold">Contentlayer Blog Example</h1>

      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
