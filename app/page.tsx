import About from "@/components/About";

import ContactForm from "@/components/ContactForm";

import Expieriance from "@/components/Expieriance";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Questions from "@/components/Questions";
import Reviews from "@/components/Reviews";

import Skills from "@/components/Skills";
import SideNav from "@/components/SideNav";
import ToogleButton from "@/components/sub/ToogleButton";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <>
      <Loader />
      <ToogleButton>
        <SideNav />

        <Hero />
        <About />
        <Expieriance />
        <Skills />
        <Reviews />
        <Projects />
        <ContactForm />
        <Questions />
      </ToogleButton>
    </>
  );
}
