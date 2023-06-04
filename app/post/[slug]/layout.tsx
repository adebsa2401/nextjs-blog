import React from "react";
import Logo from "@/components/logo";

export default function PostLayout({children}: { children: React.ReactNode }) {
  return (
    <>
      <div className="mt-8 mb-20">
        <Logo />
      </div>
      {children}
    </>
  );
}