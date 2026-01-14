// 'use client'
import { getAllPosts } from "@/components/helpers/getPost";
import EditorsPicks from "@/components/ui/EditorsPicks";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import LatestFeed from "@/components/ui/LatestFeed";
import OutOfTheBoxHero from "@/components/ui/OutOfTheBoxHero";
import RowFeed from "@/components/ui/RowFeed";
import RowFeedFlat from "@/components/ui/RowFeedFlat";
import TopBar from "@/components/ui/TopBar";
import Image from "next/image";
import { Suspense } from "react";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// Helper: Shuffle Function
// Helper: random shuffle
// const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

// HERO POSTS — ONLY latest 5 art-design posts
const createHeroPostsData = (posts) => {
  return [...posts]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);
};

// ROW FEEDS — all posts randomly shuffled
// const createRowFeedsData = (posts) => shuffleArray(posts);


export default async function Home({ searchParams }) {

  const posts = await getAllPosts()

  const heroPosts = createHeroPostsData(posts);

  const { category, search, page } = await searchParams

  const selectedCategory = category || "All";
  const searchTerm = search || "";
  const currentPage = Number(page || 1);
  const perPage = 15;

  // Fetch all posts server-side
  const allPosts = posts

  // Filter posts server-side
  const filteredPosts = allPosts.filter((p) => {
    const matchCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / perPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  // Popular posts (server-side)
  const popularPosts = allPosts
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

  return (
    <div className="font-sans bg-background text-foreground min-h-screen relative">
      {/* Right Ad
      <div
        className="fixed hidden bg-gray-50 border border-dashed border-gray-200 rounded p-6 xl:flex items-center justify-center text-sm text-gray-500 w-[120px] h-[400px] top-40 right-2"
      >
        Desktop: spans both columns; Mobile: full width
        Native Ad — your ad goes here (responsive)
      </div>

      Left Ad
      <div
        // key={`ad-${idx}`}
        className="fixed hidden bg-gray-50 border border-dashed border-gray-200 rounded p-6 xl:flex items-center justify-center text-sm text-gray-500 w-[120px] h-[400px] top-40 left-2"
      >
        Desktop: spans both columns; Mobile: full width
        Native Ad — your ad goes here (responsive)
      </div> */}

      {/* Top utility bar */}
      {/* <TopBar post={heroPosts[0]} /> */}
      {/* Navigation bar */}
      <Header post={heroPosts[0]} />
      {/* Hero section */}
      {/* <Hero posts={heroPosts} loading={loading} /> */}
      <OutOfTheBoxHero />
      {/* Latest Feed */}
      {/* <LatestFeed posts={latestFeeds} loading={loading} /> */}
      {/* Editors Picks */}
      {/* <EditorsPicks posts={editorsPicks} loading={loading} /> */}
      {/* Row Feed */}
      {/* <RowFeed posts={rowFeeds} popularPosts={popularPosts} loading={loading} /> */}
      <Suspense>
        <RowFeedFlat 
          // posts={rowFeeds} popularPosts={popularPosts} loading={loading} 
          feedName="All"
          paginatedArticles={paginatedPosts}
          popularPosts={popularPosts}
          currentPage={currentPage}
          perPage={perPage}
          selectedCategory={selectedCategory}
          searchTerm={searchTerm}
          totalPages={totalPages}
        />
      </Suspense>
      {/* Footer */}
      <Footer />
    </div>
  );
}

// export default Home