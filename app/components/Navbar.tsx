import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';  // Import useRouter

export const Navbar = () => {
  const router = useRouter();  // Use the useRouter hook to access router object

  return (
    <div className='h-32 flex lg:justify-center justify-start bg-black'>
      <div className='flex lg:w-5/12 items-center'>
        <Link href="/">
          <a className={`mx-5 rounded-md text-white custom-underline ${router.pathname === "/" ? 'underline' : ''}`}>
            Home
          </a>
        </Link>
        <Link href="/projects">
          <a className={`rounded-md text-white custom-underline ${router.pathname === "/projects" ? 'underline' : ''}`}>
            Projects
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
