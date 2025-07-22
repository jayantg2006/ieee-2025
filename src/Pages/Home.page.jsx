import HeroBanner from "@/components/Sections/Home/Hero.banner";
import FAQ from "@/components/Sections/Home/FAQ";
import { Fragment } from "react";

export default function HomePage() {
  return (
    <Fragment>
      <HeroBanner />
      <FAQ />
    </Fragment>
  );
}
