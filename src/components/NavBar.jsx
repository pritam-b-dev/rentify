"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { authClient } from "../lib/auth-client";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();
  const dropdownRef = useRef(null);

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/signin");
    router.refresh();
  };

  const closeDropdown = () => {
    if (dropdownRef.current) {
      document.activeElement.blur();
      dropdownRef.current.blur();
    }
  };

  if (isPending)
    return (
      <div className="navbar bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 px-4 md:px-8">
        <div className="flex-1">
          <Link href={"/"} className="font-extrabold text-4xl text-cyan-700">
            Rentify
          </Link>
        </div>
      </div>
    );

  return (
    <div className="navbar bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 px-4 md:px-8">
      <div className="flex-1">
        <div className="flex-1">
          {/* Hamburger menu — mobile only */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-12 mt-3 w-52 p-2 shadow text-cyan-700 font-semibold"
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/all-cars"}>Explore Cars</Link>
              </li>
              {!user && (
                <li>
                  <Link href={"/signin"}>Login/Register</Link>
                </li>
              )}
            </ul>
          </div>

          <Link
            href={"/"}
            className="w-full font-extrabold text-4xl text-cyan-700"
          >
            Rentify
          </Link>
        </div>
      </div>
      <div className="flex gap-2">
        <ul className="menu menu-horizontal gap-4 hidden lg:flex text-cyan-700 font-semibold">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-cars"}>Explore Cars</Link>
          </li>
          {!user && (
            <li>
              <Link href={"/signin"}>Login/Register</Link>
            </li>
          )}
        </ul>

        {user && (
          <div className="dropdown dropdown-end" ref={dropdownRef}>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full z-2">
                <Image
                  alt="user avatar"
                  src={user?.image}
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-12 w-52 p-2 shadow text-cyan-700"
            >
              <li>
                <Link href={"/add-car"} onClick={closeDropdown}>
                  Add Car
                </Link>
              </li>
              <li>
                <Link href={"/my-booking"} onClick={closeDropdown}>
                  My Bookings
                </Link>
              </li>
              <li>
                <Link href={"/my-cars"} onClick={closeDropdown}>
                  My Added Cars
                </Link>
              </li>
              <li className="w-full">
                <Button
                  onClick={handleSignOut}
                  variant="light"
                  className="w-full justify-start text-red-600 hover:bg-red-50 text-sm py-2 px-3"
                >
                  Logout
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
