import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const blogPosts = [
  {
    id: 'freshwater-expedition-2025',
    title:
      'Freshwater Fishing Expedition Photography & Videography in the Eastern Cape – 2025 Case Study',
    category: 'Freshwater Fishing Adventures',
    date: '2025-03-18',
    image: '/images/blog/freshwater-expedition-hero.jpg',
    excerpt:
      'Dive into our complete production workflow documenting a multi-day freshwater fishing expedition in the Eastern Cape. From pre-dawn scouting to cinematic post-production, discover how we deliver compelling narratives for lodges and outfitters.',
    slug: '/blog/freshwater-fishing-expedition-2025',
  },
  {
    id: 'wildlife-lens-dynamics',
    title: '7 Techniques for Wildlife Expedition Storytelling with Hybrid Teams',
    category: 'Wildlife Expeditions',
    date: '2025-01-22',
    image: '/images/blog/wildlife-expedition-storytelling.jpg',
    excerpt:
      'Field-proven strategies for synchronizing stills and video crews on wildlife expeditions, ensuring cohesive narratives without disrupting the natural flow of the bush.',
    slug: '/blog/wildlife-expedition-storytelling-hybrid-teams',
  },
  {
    id: 'tactical-hunt-media',
    title: 'Tactical Media Deployment for Premium Hunting Lodges in Southern Africa',
    category: 'Hunting Expeditions',
    date: '2024-11-05',
    image: '/images/blog/hunting-lodge-tactical-media.jpg',
    excerpt:
      'How we plan, capture, and deliver multi-format media packages for luxury hunting lodges—balancing authenticity with high-end marketing requirements.',
    slug: '/blog/tactical-hunting-lodge-media-strategy',
  },
];

const Blog = () => {
  useEffect(() => {
    document.title = 'Blog - Chasing What Is Real Productions | Expedition Media Insights';

    const descriptionContent =
      'Expedition media insights from Chasing What Is Real Productions. Explore case studies, storytelling strategies, and behind-the-scenes coverage across freshwater fishing, hunting, and wildlife expeditions in Southern Africa.';
    const keywordAliases = [
      'expedition media insights',
      'freshwater fishing videography case study',
      'wildlife photography eastern cape',
      'hunting lodge marketing content',
      'chasing what is real blog',
    ];

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
      descriptionContent,
    );
    ensureMetaTag('meta[name="keywords"]', { name: 'keywords' }).setAttribute(
      'content',
      keywordAliases.join(', '),
    );
    ensureMetaTag('meta[property="og:title"]', { property: 'og:title' }).setAttribute(
      'content',
      'Blog - Chasing What Is Real Productions',
    );
    ensureMetaTag('meta[property="og:description"]', { property: 'og:description' }).setAttribute(
      'content',
      descriptionContent,
    );
  }, []);

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString('en-ZA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white">
        <section className="bg-brand-light-grey">
          <div className="container mx-auto px-4 py-16 text-center">
            <span className="inline-block px-4 py-1 text-xs font-semibold tracking-widest uppercase text-brand-red bg-white rounded-full shadow-sm">
              Insights & Case Studies
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold text-brand-black">
              Expedition Media Blog
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-700">
              Field-tested production strategies, case studies, and creative frameworks for wildlife
              lodges, expedition outfitters, and freshwater fishing charters across Southern Africa.
            </p>
          </div>
        </section>

        <div>
          {blogPosts.map((post, index) => {
            const sectionBg = index % 2 === 0 ? 'bg-white' : 'bg-brand-light-grey';
            return (
              <section key={post.id} className={`${sectionBg}`}>
                <div className="container mx-auto px-4 py-12 md:py-16">
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={`${post.title} feature image`}
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-white/90 text-brand-red rounded">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <time className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                          {formatDate(post.date)}
                        </time>
                        <h2 className="mt-3 text-2xl md:text-3xl font-bold text-brand-black leading-tight">
                          {post.title}
                        </h2>
                        <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="mt-6">
                        <Link
                          to={post.slug}
                          className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white bg-brand-red rounded-full shadow transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                        >
                          Read Full Insight
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
