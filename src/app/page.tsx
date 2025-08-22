"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

import Hero from "./components/Hero";
import Menu from "./components/Menu";
// Dynamically load LocationMap on the client only
const LocationMap = dynamic(() => import("./components/LocationMap"), {
  ssr: false,
});
import FollowUs from "./components/FollowUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Menu />
      <LocationMap />
      <FollowUs />
    </>
  )
}