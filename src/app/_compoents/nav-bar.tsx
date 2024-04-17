import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 bg-gray-100 p-4">
      <Link href="/">
        <p className="text-xl font-bold">Gallery</p>
      </Link>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </nav>
  );
}
