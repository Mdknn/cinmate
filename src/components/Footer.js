import React from 'react'

export const Footer=()=> {
  return (
    <div>
      

<footer className="bg-white  shadow  dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href='www' rel= "noreferrer">Cinmate</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href='www'  className="hover:underline me-4 md:me-6" rel= "noreferrer">About</a>
        </li>
        <li>
            <a  href='www' className="hover:underline me-4 md:me-6" rel= "noreferrer">Privacy Policy</a>
        </li>
        <li>
            <a href='www'  className="hover:underline me-4 md:me-6" rel= "noreferrer">Licensing</a>
        </li>
        <li>
            <a  href='www' className="hover:underline" rel= "noreferrer">Contact</a>
        </li>
    </ul>
    </div>
</footer>

    </div>
  )
}
