"use client";

import React from "react";
import Link from "next/link";

type Props = {
  error: Error;
  reset: () => void;
};

const Error= ({ error, reset}: Props) => {
  return (
    <>
      <div className="pt-14 pb-[8.5rem]">
        <h1 className="text-center">404 - Page Not Found</h1>
        <div className="text-center py-8 text-[1.2rem]/[1.5rem] tracking-tighter before:content-['←'] before:mr-2">
          <Link className="no-underline hover:underline" href="/">Back to home</Link>
        </div>
      </div>
    </>
  );
}

export default Error;
