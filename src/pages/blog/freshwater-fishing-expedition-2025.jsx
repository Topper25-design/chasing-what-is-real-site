import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import JsonLd from '../../components/JsonLd';
import { createVideoObject } from '../../utils/structuredData';

const heroImage = '/images/blog/freshwater-expedition-hero.jpg';
const galleryImage = '/images/blog/freshwater-expedition-gallery.jpg';
const behindScenesVideo = '/videos/blog/freshwater-expedition-bts.mp4';

const keywordAliases = [
  'freshwater-fishing-expedition-2025',
  'eastern-cape-fishing-photography',
  'wildlife-videography-case-study',
  'lodge-marketing-media',
];

const publishDate = '2025-03-18';

const FreshwaterFishingExpedition2025 = () => {
  useEffect(() => {
    const pageTitle =
      'Freshwater Fishing Expedition Photography & Videography in the Eastern Cape – 2025 Case Study';
    const pageDescription =
      'Walk through our full media production workflow for a 2025 freshwater fishing expedition in the Eastern Cape. Explore scouting insights, on-water capture tactics, and post-production deliverables tailored for lodges and outfitters.';

    document.title = `${pageTitle} | Chasing What Is Real Productions`;

    const ensureMetaTag = (selector, attributes) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        Object.entries(attributes).forEach(([key, value]) => tag.setAttribute(key, value));
        document.head.appendChild(tag);
      }
      return tag;
    };

    ensureMetaTag('meta[name="description"]', { name: 'description' }).setAttribute(
      'content',
      pageDescription,
    );
    ensureMetaTag('meta[name="keywords"]', { name: 'keywords' }).setAttribute(
      'content',
      keywordAliases.join(', '),
    );
    ensureMetaTag('meta[property="og:title"]', { property: 'og:title' }).setAttribute(
      'content',
      pageTitle,
    );
    ensureMetaTag('meta[property="og:description"]', { property: 'og:description' }).setAttribute(
      'content',
      pageDescription,
    );
    ensureMetaTag('meta[property="og:image"]', { property: 'og:image' }).setAttribute(
      'content',
      heroImage,
    );
  }, []);

  const structuredData = useMemo(
    () => [
      createVideoObject({
        name: 'Freshwater Fishing Expedition Highlight Reel – Eastern Cape 2025',
        description:
          'Behind-the-scenes production coverage from the Eastern Cape freshwater fishing expedition captured by Chasing What Is Real Productions.',
        thumbnailPath: '/images/blog/freshwater-expedition-video-thumb.jpg',
        contentPath: behindScenesVideo,
        uploadDate: publishDate,
      }),
    ],
    []);

  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd data={structuredData} />
      <Header />
      <main className="flex-grow bg-white">
        <article>
          <section className="relative bg-brand-black text-white">
            <div className="absolute inset-0">
              <img
                src={heroImage}
                alt="Angler casting at sunrise during the Eastern Cape freshwater expedition"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
            </div>
            <div className="relative container mx-auto px-4 py-24 lg:py-32">
              <div className="max-w-3xl">
                <span className="inline-flex items-center px-4 py-1 text-xs font-semibold uppercase tracking-widest rounded-full bg-brand-red text-white shadow-md">
                  Freshwater Fishing Adventures
                </span>
                <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
                  Freshwater Fishing Expedition Photography & Videography in the Eastern Cape – 2025
                  Case Study
                </h1>
                <time className="mt-4 block text-sm font-semibold uppercase tracking-wide text-brand-light-grey">
                  {new Date(publishDate).toLocaleDateString('en-ZA', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </div>
          </section>

          <section className="bg-white">
            <div className="container mx-auto px-4 py-16">
              <div className="max-w-3xl mx-auto space-y-8 text-lg leading-relaxed text-gray-800">
                <p>
                  When a premier Eastern Cape fishing lodge asked for a cinematic storytelling suite
                  covering their signature 2025 freshwater expedition, our team architected a
                  combined still and film production designed for multi-channel marketing. This case
                  study unpacks the strategy, field execution, and deliverables that elevated their
                  guest experience and booking pipelines.
                </p>

                <h2 className="text-2xl font-bold text-brand-black">
                  Objectives and Expedition Context
                </h2>
                <p>
                  The lodge wanted three core outputs: a hero film highlighting the emotional
                  journey, a bank of stills for tactical campaigns, and a short-form content
                  sequence for social platforms. The expedition itself spanned five days across the
                  Kei River system, combining on-water pursuits with shoreline storytelling anchored
                  around conservation and responsible angling.
                </p>

                <div className="bg-brand-light-grey border-l-4 border-brand-red p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-brand-black">
                    Production Priorities
                  </h3>
                  <ul className="mt-4 space-y-2 list-disc list-inside">
                    <li>Document dawn-to-dusk rhythms without intruding on guest experiences.</li>
                    <li>Capture the intersection of technical angling detail and scenic landscapes.</li>
                    <li>Deliver same-week highlight edits for lodge sales presentations.</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-brand-black">
                  Scouting and Pre-Production Insights
                </h2>
                <p>
                  Three weeks ahead of the expedition we conducted environmental scouting,
                  locking-in sun angles, drone flight windows, and safe wading zones for camera
                  operators. Shot lists were mapped to narrative pillars and crew roles were paired
                  to vantage points with overlapping coverage.
                </p>

                <figure className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={galleryImage}
                    alt="Documenting casting technique on the Kei River during golden hour"
                    className="w-full h-auto object-cover"
                  />
                  <figcaption className="px-4 py-3 text-sm text-gray-600 bg-white">
                    Documenting golden-hour casting sequences with dual operators to maximize still
                    and motion coverage.
                  </figcaption>
                </figure>

                <h2 className="text-2xl font-bold text-brand-black">
                  On-Location Capture Workflow
                </h2>
                <p>
                  Each day was structured around thematic story arcs. Morning sessions emphasized
                  atmospheric frames, mid-day focused on micro-detail storytelling, and evenings were
                  dedicated to reflective moments with guests. We paired gimbal-mounted cinema rigs
                  with long glass for wildlife cutaways, ensuring transitions between scenes felt
                  cohesive and grounded in the environment.
                </p>

                <figure className="rounded-xl overflow-hidden shadow-lg bg-black">
                  <video
                    src={behindScenesVideo}
                    poster="/images/blog/freshwater-expedition-video-thumb.jpg"
                    muted
                    autoPlay
                    loop
                    controls
                    playsInline
                    className="w-full h-auto"
                    aria-label="Behind-the-scenes capture of the freshwater expedition production crew"
                  />
                  <figcaption className="px-4 py-3 text-sm text-gray-100 bg-brand-black">
                    Behind the scenes: Coordinating dual-camera coverage from the chase boat.
                  </figcaption>
                </figure>

                <h2 className="text-2xl font-bold text-brand-black">
                  Deliverables and Lodge Impact
                </h2>
                <p>
                  Within 72 hours post-expedition we supplied a teaser reel, optimized for the
                  lodge&apos;s booking portal and paid social campaigns. The full hero film and
                  curated still gallery followed within two weeks, with layered exports for web,
                  digital signage, and print sales. Analytics from the lodge reported a 22%
                  conversion lift on expedition inquiries within the first month of deployment.
                </p>

                <div className="bg-white border border-brand-light-grey rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-brand-black">Final Media Suite</h3>
                  <ul className="mt-4 grid gap-2">
                    <li className="flex items-center gap-3">
                      <span className="inline-flex h-2 w-2 rounded-full bg-brand-red" aria-hidden />
                      4-minute hero film with 30-second cut-down
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="inline-flex h-2 w-2 rounded-full bg-brand-red" aria-hidden />
                      120 curated stills, color-graded for both print and web
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="inline-flex h-2 w-2 rounded-full bg-brand-red" aria-hidden />
                      Social media toolkit: vertical reels, quote cards, motion bumpers
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-brand-black">Looking Ahead</h2>
                <p>
                  The success of this expedition build-out set the foundation for a 2026 content
                  retainer with the lodge, expanding into seasonal wildlife narratives and
                  conservation-focused mini-docs. We continue to iterate on the hybrid crew structure
                  that keeps us agile on the water and responsive to guest experiences.
                </p>

                <div className="pt-6 border-t border-brand-light-grey">
                  <p className="text-gray-700">
                    Planning an expedition that deserves immersive storytelling? Connect with our
                    team to architect a stills and film package that captures the authenticity of
                    your experience.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white bg-brand-red rounded-full shadow transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Schedule a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default FreshwaterFishingExpedition2025;

