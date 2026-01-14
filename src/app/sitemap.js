import { getAllPosts } from "@/components/helpers/getPost";
import { headers } from "next/headers";

export default async function sitemap() {
    // const headersList = await headers();
    // const host = headersList.get("host");
    // const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
    // const baseUrl = `${protocol}://${host}`;

    // const response = await fetch(`${baseUrl}/api/auth/posts`);
    // const data = await response.json();
    // const { posts } = data

    const posts = await getAllPosts()

    const postEntries = posts.map((post) => ({
        url: `https://www.tradingfarms.online/post/${post.slug}`,
        lastModified: new Date(post.updatedAt),
        // changeFrequency: ,
        // priority: ,
    }))

    return [
        {
            url: `https://www.tradingfarms.online/`,
            lastModified: new Date()
        },
        {
            url: `https://www.tradingfarms.online/about-us`,
            lastModified: new Date()
        },
        {
            url: `https://www.tradingfarms.online/contact-us`,
            lastModified: new Date()
        },
        {
            url: `https://www.tradingfarms.online/privacy-policy`,
            lastModified: new Date()
        },
        {
            url: `https://www.tradingfarms.online/terms-of-use`,
            lastModified: new Date()
        },
        ...postEntries,
    ]
}