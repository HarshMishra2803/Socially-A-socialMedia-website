import React from "react";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/modetoggle";

const page = () => {
  return (
    <div>
      <SignedOut >
        <SignInButton mode="modal" >
          <Button>sign in</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <ModeToggle />
    </div>
  );
};

export default page;
