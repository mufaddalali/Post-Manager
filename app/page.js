"use client";
import { useState, useEffect, useCallback } from "react";
import { usePosts } from "./api/usePosts";
import Header from "../app/components/header";
import Link from "next/link";
import Footer from "./components/footer";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const { posts, totalPages } = usePosts(currentPage);
  const [searchByTitle, setsearchByTitle] = useState("");
  const [bookmarks, setBookmarks] = useState([]);
  // Filter posts based on search query
  const filteredPost = posts.filter((post) =>
    post.title.toLowerCase().includes(searchByTitle.toLowerCase())
  );

  // FUNCTIONALITES

  // SEARCH BY TITLE
  const handleSearch = (event) => {
    setsearchByTitle(event.target.value);
  };

  // PAGINATION NEXT
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    scrollToTop();
  };

  // PAGINATION PREV
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    scrollToTop();
  };

  // ON CLICK OF PAGINATION SCROLL TO TOP
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //BOOKMARK POST
  const bookmarkPost = (id) => {
    const selectedPost = posts.find((post) => post.id === id);
    const localBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const isBookmarked = localBookmarks.some((bookmark) => bookmark.id === id);
    if (!isBookmarked) {
      const newBookmarkPost = {
        id: selectedPost.id,
        title: selectedPost.title,
        body: selectedPost.body,
      };

      const updateBookmarkList = [...localBookmarks, newBookmarkPost];
      setBookmarks(updateBookmarkList);
      // Store updated bookmarks in local storage
      localStorage.setItem("bookmarks", JSON.stringify(updateBookmarkList));
      alert("Post bookmarked succesfully!");
    } else {
      alert("You have already bookmarked this post!");
    }
  };

  // UNBOOKMARK POST
  const unbookmarkPost = (id) => {
    const existingBookmarks =
      JSON.parse(localStorage.getItem("bookmarks")) || [];
    const bookmarkIndex = existingBookmarks.findIndex((bookmark) => bookmark.id === id);

    if (bookmarkIndex !== -1) {
     existingBookmarks.splice(bookmarkIndex, 1);
      localStorage.setItem("bookmarks", JSON.stringify(existingBookmarks));
      setBookmarks(existingBookmarks);
      alert("Post removed from bookmarks!");
    } else {
      alert("Sorry nothing found!");
    }
  };

  //CHECK IF THE POST IS BOOKMARKED OR NOT
  useEffect(() => {
    //  console.log("checking here")
    const existingBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(existingBookmarks);
  }, []);

  const isPostBookmarked = (id) => {
    return bookmarks.some((bookmark) => bookmark.id === id);
  };

  return (
    <>
  
      <Header />

      <section className="bg-gray-50 text-black body-font overflow-hidden min-h-screen">
        {posts.length > 0 ? (
          <div>
            {/* Search by title */}
            <div className="container px-5 pt-10 mx-auto">
              <div className="relative p-2">
                <label
                  htmlFor="email"
                  className="leading-7 text-md font-semibold"
                >
                  Search Post by Title
                </label>
                <input
                  type="text"
                  id="search"
                  name="search"
                  className="w-full bg-white-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Search..."
                  value={searchByTitle}
                  onChange={handleSearch}
                />
              </div>
            </div>

            <div className="container px-5 py-10 mx-auto">
              <div className="flex flex-wrap">
                {filteredPost.map((post, index) => (
                  <div key={index} className="p-4 w-full lg:w-1/3 flex flex-wrap">
                    <div className="p-10 flex flex-col items-start bg-white border border-gray-300 rounded-lg">
                      <span className="inline-block py-1 px-2 rounded bg-orange-50 text-orange-500 text-xs font-medium tracking-widest">
                        Post: {post.id}
                      </span>
                      <h2
                        className="text-2xl title-font font-medium text-gray-900 mt-4 mb-4 overflow-hidden"
                        style={{ minHeight: "60px", maxHeight: "60px" }}
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
                          {/* NOT BOOKMARKED */}
                          {!isPostBookmarked(post.id) ? (
                            <span
                              className="cursor-pointer"
                              onClick={() => {
                                bookmarkPost(post.id);
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="30"
                                height="30"
                                viewBox="0 0 50 50"
                              >
                                <path d="M 12.8125 2 C 12.335938 2.089844 11.992188 2.511719 12 3 L 12 47 C 11.996094 47.359375 12.1875 47.691406 12.496094 47.871094 C 12.804688 48.054688 13.1875 48.054688 13.5 47.875 L 25 41.15625 L 36.5 47.875 C 36.8125 48.054688 37.195313 48.054688 37.503906 47.871094 C 37.8125 47.691406 38.003906 47.359375 38 47 L 38 3 C 38 2.449219 37.550781 2 37 2 L 13 2 C 12.96875 2 12.9375 2 12.90625 2 C 12.875 2 12.84375 2 12.8125 2 Z M 14 4 L 36 4 L 36 45.25 L 25.5 39.125 C 25.191406 38.945313 24.808594 38.945313 24.5 39.125 L 14 45.25 Z"></path>
                              </svg>
                            </span>
                          ) : (
                            <span
                              className="cursor-pointer"
                              onClick={() => {
                                unbookmarkPost(post.id);
                              }}
                            >
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
                          )}
                          {/* BOOKMARKED */}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between w-1/2 m-auto items-center">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`font-bold py-2 px-4 rounded-full 
        ${
          currentPage === 1
            ? "bg-gray-300 text-gray-500"
            : "bg-blue-500 hover:bg-blue-700 text-white"
        }`}
                >
                  Previous
                </button>
                <span className="mx-2">{`Page ${currentPage} of ${totalPages}`}</span>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`font-bold py-2 px-4 rounded-full 
        ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-500"
            : "bg-blue-500 hover:bg-blue-700 text-white"
        }`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-screen justify-center">
            <h4 className="mb-10 mx-auto text-center text-2xl">
              Loading Please wait..
            </h4>
            <div className="animate-pulse flex mx-auto space-x-4 w-1/2">
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-300 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-300 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer/> 
    </>
  );
}
