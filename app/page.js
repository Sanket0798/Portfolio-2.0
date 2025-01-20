"use client";
import Layout from "./component/layout/Layout";
import HeroSection from "./component/sections/HomePage/HeroSection";
import Projects from "./component/sections/HomePage/Projects";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <Projects />
    </Layout>
  );
}
