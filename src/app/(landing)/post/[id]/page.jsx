import { getPostById } from "@/components/helpers/getPost";
import PostPageContent from "@/components/ui/PostPageContent";
import Head from "next/head";
// import Script from "next/script";
import { headers } from "next/headers";

export async function generateMetadata({ params }) {
  try {
    const postId = await params;
    
    const post = await getPostById(postId.id)

    // console.log("this is the post data", post)

    if (!post) throw new Error("Post not found");

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
        "energy efficiency solutions",
        // DIY Home Improvement Keywords
        "DIY home projects",
        "home improvement ideas",
        "eco friendly home upgrades",
        "sustainable DIY projects",
        "green home renovation",
        "energy efficient home",
        "home gardening tips",
        "upcycling furniture",
        "recycling at home",
        "eco friendly interior design",
        "DIY sustainable lifestyle",
        "green home solutions",
        "smart home energy savings",
        "low carbon home improvements",
        "environmentally conscious DIY",
      ],
      openGraph: {
        images: [
          { 
            url: post.thumbnail,
          }
        ],
      },
    };
    
  } catch (err) {
    console.error("Metadata error:", err);

    return {
      title: "Post not found | Greenlytic",
      description: "This post is unavailable.",
    };
  }
  
}


const PostPage = async ({ params }) => {

  const { id } = await params

  const post = await getPostById(id)

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
      <PostPageContent pagePost={post} />
    </>
  );
};

export default PostPage;
