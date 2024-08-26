import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';  // Import useRouter

export const Navbar = () => {
  const router = useRouter();  // Use the useRouter hook to access the router object

  return (
    <div className='h-32 flex lg:justify-center justify-start bg-black'>
      <div className='flex lg:w-5/12 items-center'>
        {/* Each link now wraps an <a> tag where the class is conditionally applied */}
        <Link href="/">
          <a className={`mx-5 rounded-md text-white ${router.pathname === "/" ? 'underline' : 'no-underline'}`}>
            Home
          </a>
        </Link>
        <Link href="/projects">
          <a className={`rounded-md text-white ${router.pathname === "/projects" ? 'underline' : 'no-underline'}`}>
            Projects
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
