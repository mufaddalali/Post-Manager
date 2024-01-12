"use client"
import Footer from '@/app/components/footer';
import Header from '@/app/components/header';
import React from 'react'
import { useEffect, useState } from 'react';



const SinglepPost = ({params}) => {


 
const id = params.singlepost;
const [post, setPost] = useState(null);

useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (response.ok) {
          const postData = await response.json();
          setPost(postData);
        } else {
          throw new Error('Failed to fetch post');
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);


  if (!post) {
    return <div className='container mt-4 pt-2'>
        <div className="border border-gray-300 shadow rounded-md p-4 md:w-1/2 w-full mx-auto">
        <h4 class="mb-4 mx-auto text-center">Loading Please Wait...</h4>
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 bg-slate-200 rounded"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-200 rounded col-span-2"></div>
            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  </div>
    </div>;
  }

  return (
    <>
    <Header/>
    <section className="text-black body-font overflow-hidden min-h-post bg-gray-50">

  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-wrap">
          <div className="p-4 w-full flex">
            <div className="p-10 flex flex-col items-start bg-white border-gray-300 border rounded-xl">
        <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">Post:  { post?.id }</span>
        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{post?.title}</h2>
        <p className="leading-relaxed mb-8">{post?.body}</p>
        <div className="flex items-center flex-wrap mt-auto w-full">
      
        </div>
       
      </div>
          </div>
       

      
    </div>

    


  </div>
</section>

<Footer/>
</>

  )
}

export default SinglepPost

