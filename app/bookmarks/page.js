"use client";
import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/header";
import Link from "next/link";
import Footer from "../components/footer";

const page = () => {
  const [loading, setLoading] = useState(true);
  const [viewAllBookmarks, setviewAllBookmarks] = useState([]);

  useEffect(() => {
    const delay = setTimeout(() => {
      const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
      setviewAllBookmarks(bookmarks);
      setLoading(false);
    }, 800);

    return () => clearTimeout(delay);

  }, []);

  if (loading) {
    return (
      <div className="text-center mt-4 pt-2">
        <p>Loading please wait...</p>
      </div>
    );
  }

  

  return (
    <>
      <Header />

      <section className="bg-gray-50 text-black body-font overflow-hidden min-h-post">
        {viewAllBookmarks?.length === 0 ? (
          <div
            class="bg-orange-100 border border-orange-400 text-orange-700 px-4 py-3 rounded relative w-5/6 mx-auto mt-6"
            role="alert"
          >
            <div class="font-bold">No bookmarks! </div>
            <div class="block sm:inline">
              You currently have no bookmarks. Bookmark some post from homepage
              to be displayed here
            </div>
          </div>
        ) : (
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap">
              {viewAllBookmarks.map((post, index) => (
                <div key={index} className="p-4 w-full lg:w-1/3 flex flex-wrap">
                  <div className="p-10 flex flex-col items-start bg-white border border-gray-300 rounded-lg">
                    <span className="inline-block py-1 px-2 rounded bg-orange-50 text-orange-500 text-xs font-medium tracking-widest">
                      Post: {post.id}
                    </span>
                    <h2
                      className="text-2xl title-font font-medium text-gray-900 mt-4 mb-4"
                      style={{ minHeight: "60px", maxHeight: "50px" }}
                    >
                      {post.title.substring(0, 40)}...
                    </h2>
                    <p className="leading-relaxed mb-4">
                      {post.body.length > 140
                        ? `${post.body.substring(0, 140)}...`
                        : post.body}
                    </p>
                    <div className="flex items-center flex-wrap mt-auto w-full justify-between">
                      <Link
                        href={`/post/${post.id}`}
                        className="text-blue-800 inline-flex items-center bg-blue-100 px-3 py-2 hover:bg-blue-700 hover:text-white rounded-full"
                      >
                        Read More
                      </Link>
                      <span className="text-gray-500">
                        {/* BOOKMARKED */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="30"
                          height="30"
                          viewBox="0 0 50 50"
                        >
                          <path d="M 37 48 C 36.824219 48 36.652344 47.953125 36.496094 47.863281 L 25 41.15625 L 13.503906 47.863281 C 13.195313 48.042969 12.8125 48.046875 12.503906 47.867188 C 12.191406 47.6875 12 47.359375 12 47 L 12 3 C 12 2.449219 12.449219 2 13 2 L 37 2 C 37.554688 2 38 2.449219 38 3 L 38 47 C 38 47.359375 37.808594 47.6875 37.496094 47.867188 C 37.34375 47.957031 37.171875 48 37 48 Z"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default page;
