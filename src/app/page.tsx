import Image from "next/image";

import Hero from "./components/Hero";
import Menu from "./components/Menu";
import LocationMap from "./components/LocationMap";
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