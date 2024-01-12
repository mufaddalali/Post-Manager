import React from 'react'

const header = () => {
  return (
    <nav className="text-gray-600 body-font bg-white">
  <div className="container mx-auto flex flex-wrap py-3 px-10 flex-col md:flex-row items-center">
    <a href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
<path d="M 5 5 C 2.25 5 0 7.25 0 10 L 0 39 C 0 41.75 2.25 44 5 44 L 21 44 C 22.664063 44 24 45.351563 24 47 C 24 47.308594 24.144531 47.601563 24.386719 47.789063 C 24.632813 47.980469 24.949219 48.046875 25.25 47.96875 C 25.511719 47.902344 25.738281 47.734375 25.875 47.5 C 25.960938 47.347656 26.003906 47.175781 26 47 C 26 45.351563 27.335938 44 29 44 L 45 44 C 47.75 44 50 41.75 50 39 L 50 10 C 50 7.25 47.75 5 45 5 L 29 5 C 27.367188 5 25.914063 5.8125 25 7.03125 C 24.085938 5.8125 22.632813 5 21 5 Z M 5 7 L 21 7 C 22.667969 7 24 8.332031 24 10 L 24 43.125 C 23.152344 42.464844 22.148438 42 21 42 L 5 42 C 3.332031 42 2 40.667969 2 39 L 2 10 C 2 8.332031 3.332031 7 5 7 Z M 29 7 L 45 7 C 46.667969 7 48 8.332031 48 10 L 48 39 C 48 40.667969 46.667969 42 45 42 L 29 42 C 27.851563 42 26.847656 42.464844 26 43.125 L 26 10 C 26 8.332031 27.332031 7 29 7 Z"></path>
</svg>
      <span className="ml-3 text-xl">Post Manager</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a href='/' title='Home' className="text-gray-500 hover:bg-gray-50 px-4 py-2 rounded-full transition-colors hover:text-black">Home</a>
      <a href='/bookmarks' title='Bookmarks' className="text-gray-500 hover:bg-gray-50 px-4 py-2 rounded-full transition-colors hover:text-black">Bookmarks</a>
      
    </nav>
  </div>
</nav>
  )
}

export default header