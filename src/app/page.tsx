import { Hero } from "@/components/sections/hero";
import { Journey } from "@/components/sections/journey";
import { Projects } from "@/components/sections/projects";
import { EngineeringPhilosophy } from "@/components/sections/engineering-philosophy";
import { WhyGermany } from "@/components/sections/why-germany";
import { WhyAusbildung } from "@/components/sections/why-ausbildung";
import { WhyAdidas } from "@/components/sections/why-adidas";
import { FutureVision } from "@/components/sections/future-vision";
import { PersonalInterests } from "@/components/sections/personal-interests";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Journey />
      <Projects />
      <EngineeringPhilosophy />
      <WhyGermany />
      <WhyAusbildung />
      <WhyAdidas />
      <FutureVision />
      <PersonalInterests />
      <FinalCTA />
    </>
  );
}
