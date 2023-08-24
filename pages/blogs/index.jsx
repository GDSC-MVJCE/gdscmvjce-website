import BlogsPage from "@/components/blogsPage/BlogsPage";
import Head from "next/head";

function Blogs() {
  return (
    <>
      <Head>
        <title>Blogs | GDSC MVJCE</title>
        <meta name="description" content="Explore our technical blogs" />
        <meta property="og:title" content="Blogs | GDSC MVJCE" />
        <meta property="og:description" content="Explore our technical blogs" />
        <meta
          property="og:image"
          content={"/images/events/gdsc-event-fallback.png"}
        />
      </Head>
      <BlogsPage />
    </>
  );
}

export default Blogs;
