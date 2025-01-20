"use client";
import Layout from "./component/layout/Layout";
import HeroSection from "./component/sections/HomePage/HeroSection";
import Projects from "./component/sections/HomePage/Projects";
import WorkHistory from "@/app/component/sections/HomePage/WorkHistory";
import Reviews from "@/app/component/sections/HomePage/Reviews";
import FAQ from "@/app/component/sections/HomePage/FAQ";
import ContactSection from "@/app/component/sections/HomePage/ContactForm";
import SocialLinks from "@/app/component/sections/HomePage/SocialLinks";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <Projects />
      <WorkHistory />
      <Reviews />
      <FAQ />
      <ContactSection />
      <SocialLinks />
    </Layout>
  );
}
