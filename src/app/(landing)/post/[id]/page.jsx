import PostPageContent from "@/components/ui/PostPageContent";
import Head from "next/head";
// import Script from "next/script";
import { headers } from "next/headers";

export async function generateMetadata({ params }) {
  const postId = await params;
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const baseUrl = `${protocol}://${host}`;

  const response = await fetch(`https://www.yieldnvest.com/api/auth/posts/${postId.id}`);
  const data = await response.json();
  const { post } = data
  // console.log(post);
  

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords || [
      "Greenlytic",
      "sustainability blog",
      "sustainable living insights",
      "eco friendly lifestyle",
      "green finance analysis",
      "ESG investing",
      "environmental social governance",
      "climate risk analysis",
      "climate change impact",
      "carbon footprint reduction",
      "net zero strategies",
      "renewable energy trends",
      "clean energy transition",
      "climate tech innovation",
      "energy technology insights",
      "sustainable investment strategies",
      "impact investing",
      "green economy",
      "circular economy principles",
      "sustainable business practices",
      "corporate sustainability",
      "ESG metrics and reporting",
      "climate policy insights",
      "AI in sustainability",
      "data driven sustainability",
      "environmental data analytics",
      "future of sustainable finance",
      "long term resilience",
      "sustainable development goals",
      "low carbon technologies",
      "green innovation ecosystem",
      "responsible consumption",
      "ethical investing",
      "sustainable lifestyle choices",
      "eco conscious living",
      "climate resilience strategies",
      "energy efficiency solutions"
    ],        
    openGraph: {
      images: [
        { 
          url: post.thumbnail,
        }
      ],
    },
  };
}


const PostPage = async ({ params }) => {

  // Fetch post data again (you could also pass it from generateMetadata)
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const baseUrl = `${protocol}://${host}`;

  const { id } = await params

  const response = await fetch(`https://www.yieldnvest.com/api/auth/posts/${id}`);
  const data = await response.json();
  const { post } = data;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.thumbnail,
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Developer",
      "name": "Fortune",
      url: "https://www.greenlytic.com/",
    },
    publisher: {
      "@type": "Self-employed",
      "name": "Greenlytic",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.greenlytic.com/opengraph-image.png",
      },
    },
    url: `https://www.greenlytic.com/post/${post._id}`,
  };

  return (
    <>
      {/* <Head> */}
        {/* ✅ JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      {/* </Head> */}
      <PostPageContent />
    </>
  );
};

export default PostPage;
