import React from "react";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

const page = () => {
  return (
    <div>
      <SignedOut >
        <SignInButton mode="modal" >
          <button className="bg-red-500">Sign In</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default page;
