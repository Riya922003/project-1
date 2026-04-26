'use client';

import { useState } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Clients from "./components/Clients";
import AccredianEdge from "./components/AccredianEdge";
import DomainExpertise from "./components/DomainExpertise";
import CourseSegmentation from "./components/CourseSegmentation";
import SkillEnhancement from "./components/SkillEnhancement";
import CATFramework from "./components/CATFramework";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import ContactBanner from "./components/ContactBanner";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Accredian Enterprise",
            "url": "https://your-vercel-url.vercel.app",
            "description": "Next-Gen Expertise For Your Enterprise",
            "email": "enterprise@accredian.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4th Floor, 250, Phase IV, Udyog Vihar, Sector 18",
              "addressLocality": "Gurugram",
              "addressRegion": "Haryana",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.linkedin.com/company/accredian",
              "https://twitter.com/accredian"
            ]
          })
        }}
      />

      <Navbar />
      <section id="home">
        <Hero onEnquire={() => setIsModalOpen(true)} />
      </section>
      <section id="stats">
        <Stats />
      </section>
      <section id="clients">
        <Clients />
      </section>
      <section id="accredian-edge">
        <AccredianEdge />
      </section>
      <DomainExpertise />
      <CourseSegmentation />
      <SkillEnhancement />
      <section id="cat">
        <CATFramework />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="faqs">
        <FAQ onEnquire={() => setIsModalOpen(true)} />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <ContactBanner onEnquire={() => setIsModalOpen(true)} />
      <Footer onEnquire={() => setIsModalOpen(true)} />
      <LeadForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <BackToTop />
    </>
  );
}