import HeroBanner from "@/components/Sections/Home/Hero.banner";
import FAQ from "@/components/Sections/Home/FAQ";
import FacultyTestimonials from "../components/Sections/Home/FacultyTestimonials";
import { Fragment } from "react";

export default function HomePage() {
  return (
    <Fragment>
      <HeroBanner />
      <FacultyTestimonials />
      <FAQ />
    </Fragment>
  );
}
