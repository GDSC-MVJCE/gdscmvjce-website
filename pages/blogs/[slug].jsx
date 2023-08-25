import Head from "next/head";
import prisma from "@/lib/prisma";
import BlogArticlePage from "@/components/blog/BlogArticlePage";

const BlogPage = ({ articleData }) => {
  return (
    <>
      <Head>
        <title>{articleData.title}</title>
        <meta name="description" content={articleData.content} />
        <meta property="og:title" content={articleData.title} />
        <meta property="og:description" content={articleData.content} />
        <meta property="og:image" content={articleData.thumbnail} />
      </Head>
      <BlogArticlePage article={articleData} />
    </>
  );
};

export const getStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  const blog = await prisma.blog.findUnique({
    include: {
      author: true,
      tags: true
    },
    where: {
      slug: slug
    }
  });
  if (blog) {
    blog.date = String(blog.date);
    return {
      props: {
        articleData: blog
      },
      revalidate: 20
    };
  } else {
    return {
      notFound: true
    };
  }
};

export async function getStaticPaths() {
  const blogs = await prisma.blog.findMany({
    select: {
      slug: true
    }
  });
  if (blogs) {
    const blogSlugs = blogs.filter((blog) => blog.slug !== null);
    const paths = blogSlugs.map((blog) => {
      return {
        params: {
          slug: blog.slug
        }
      };
    });
    return {
      paths: paths,
      fallback: false // can also be true or 'blocking'
    };
  }
}

export default BlogPage;
