"use client";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    if (window.location) window.location.replace("https://youtube.com");
  }, []);
  const override = `
    display: block;
    margin: 0 auto;
  `;
  return (
    <>
      <p className="text-center">Redirecting...</p>
    </>
  );
}
