"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import truncateText from "../helpers/truncateText";

const categories = [
    {
        name: "Green Finance & ESG",
        category: "green-finance-sl",
    },
    {
        name: "Climate Tech & Energy",
        category: "climate-tech-sl",
    },
    {
        name: "Sustainable Living / Lifestyle / Environment",
        category: "sustainable-living",
    }
];

const RowFeedFlat = ({ feedName, posts = [], popularPosts = [], loading }) => {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedArticles, setPaginatedArticles] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const perPage = 5;

  function categoryBadgeClass(category = "") {
    switch (category.toLowerCase()) {
      case "green-finance-sl":
        return "bg-[#2F4F3E] text-white";
      case "sustainable-living":
        return "bg-[#16A34A] text-white";
      case "climate-tech-sl":
        return "bg-[#22C55E] text-white";
      default:
        return "bg-gray-400 text-white";
    }
  }

  function toggleBookmark(id) {
    setBookmarked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  async function handleShare(e, post) {
    e.stopPropagation();
    const url = `${typeof window !== "undefined" ? window.location.origin : ""}/post/${post.slug}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url,
        });
      } catch (err) {
        console.log(err);
      }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      window.alert("Link copied to clipboard");
    }
  }

  useEffect(() => {
    if (!posts.length) return;

    const filteredPosts = posts.filter((p) => {
      const matchCategory =
        selectedCategory === "All" || p.category === selectedCategory;
      const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });

    const total = Math.ceil(filteredPosts.length / perPage);
    setTotalPages(total);

    const paginated = filteredPosts.slice(
      (currentPage - 1) * perPage,
      currentPage * perPage
    );
    setPaginatedArticles(paginated);
  }, [posts, currentPage, searchTerm, selectedCategory, loading]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* LEFT COLUMN – FEED */}
        <div className="lg:col-span-8">

          {/* Top Bar: Categories + Search */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedCategory === "All" ? "bg-[#2F4F3E] text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => setSelectedCategory(cat.category)}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedCategory === cat.category ? "bg-[#2F4F3E] text-white" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="w-full sm:w-64">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-300 rounded-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2F4F3E] focus:border-transparent"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 capitalize">
            All {feedName && feedName} Posts
          </h2>

          <div className="space-y-6">
            {!loading && paginatedArticles.length > 0 ? (
              paginatedArticles.map((post) => (
                <article
                    key={post._id}
                    role="button"
                    tabIndex={0}
                    onClick={() => router.push(`/post/${post.slug}`)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ")
                        router.push(`/post/${post.slug}`);
                    }}
                    className="group cursor-pointer pb-8 border-b border-gray-200"
                >
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3 w-full h-56">
                            <img
                                src={post.thumbnail || "https://source.unsplash.com/600x400/?news"}
                                alt={post.title}
                                loading="lazy"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>

                        <div className="md:w-2/3 flex flex-col justify-center">
                            <div className="mb-2">
                              <span className={`inline-block px-2 py-1 text-xs rounded ${categoryBadgeClass(post.category)}`}>
                                {post.category}
                              </span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight group-hover:underline group-hover:text-[#2F4F3E]">
                                {truncateText(post.title, 75)}
                            </h3>

                            <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
                                {truncateText(post.excerpt, 140)}
                            </p>

                            <div className="mt-auto flex items-center justify-between text-xs text-slate-500">
                                <div>
                                    By {post.author} • {post.readTime}
                                </div>

                                <div className="flex items-center gap-4">
                                    <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleBookmark(post._id);
                                    }}
                                    className="p-1 rounded hover:bg-gray-100 transition"
                                    >
                                    {bookmarked[post._id] ? (
                                        <svg className="h-5 w-5 text-[#2F4F3E]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M5 2a2 2 0 00-2 2v13l7-4 7 4V4a2 2 0 00-2-2H5z" />
                                        </svg>
                                    ) : (
                                        <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5v14l7-4 7 4V5a2 2 0 00-2-2H7a2 2 0 00-2 2z"/>
                                        </svg>
                                    )}
                                    </button>

                                    <button
                                    onClick={(e) => handleShare(e, post)}
                                    className="p-1 rounded hover:bg-gray-100 transition"
                                    >
                                    <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 8a3 3 0 10-2.83-4H9a3 3 0 100 6h3.17A3 3 0 1015 8zM8 20v-2a2 2 0 012-2h4"/>
                                    </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </article>
              ))
            ) : (
              !loading && (
                <p className="text-gray-500 text-center py-10">No posts available.</p>
              )
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-10">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-40"
              >
                Prev
              </button>

              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === i + 1
                      ? "bg-[#2F4F3E] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-40"
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* RIGHT SIDEBAR – POPULAR POSTS */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="p-6 text-center">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Popular Posts
            </h3>

            <div className="space-y-4">
              {popularPosts?.length > 0 ? (
                popularPosts.map((p) => (
                  <div
                    key={p._id}
                    onClick={() => router.push(`/post/${p.slug}`)}
                    className="cursor-pointer group"
                  >
                    <p className="text-lg font-medium text-gray-800 group-hover:text-[#2F4F3E] transition leading-snug">
                      {truncateText(p.title, 50)}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm">No popular posts found.</p>
              )}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default RowFeedFlat;
