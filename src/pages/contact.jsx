import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const backgroundImage = '/images/contact/freshwater-fishing-background.jpg';

const Contact = () => {
  useEffect(() => {
    const pageTitle = "Contact - Chasing What Is Real Productions | Let's Capture What's Real";
    const pageDescription =
      'Connect with Chasing What Is Real Productions for wildlife, hunting, freshwater fishing, videography, and print sales media services. Based in the Eastern Cape, South Africa.';
    const keywordAliases = [
      'wildlife photography contact',
      'hunting videography enquiry',
      'freshwater fishing media production',
      'eastern cape expedition media',
      'chasing what is real contact',
    ];

    document.title = pageTitle;

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
      backgroundImage,
    );
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Placeholder for integration with backend or form service
  };

  const formFieldClass =
    'w-full rounded-md border border-transparent bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2';

  const socialLinks = [
    { icon: FaFacebookF, label: 'Facebook', href: 'https://www.facebook.com/chasingwhatisreal' },
    { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/chasingwhatisreal' },
    { icon: FaYoutube, label: 'YouTube', href: 'https://www.youtube.com/@chasingwhatisreal' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-brand-black text-white">
        <section className="relative">
          <div className="absolute inset-0">
            <img
              src={backgroundImage}
              alt="Freshwater fishing scene in the Eastern Cape during golden hour"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
          </div>

          <div className="relative container mx-auto px-4 py-20 md:py-28">
            <div className="max-w-5xl mx-auto grid gap-12 lg:grid-cols-[1fr_minmax(0,1fr)]">
              <div className="space-y-6">
                <span className="inline-block px-4 py-1 text-xs font-semibold uppercase tracking-widest rounded-full bg-white/20 text-white">
                  Eastern Cape, South Africa
                </span>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Let’s Capture What’s Real
                </h1>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Whether you&apos;re planning an all-inclusive expedition, documenting a premium
                  hunting experience, or refreshing your lodge&apos;s visual identity, our hybrid
                  still and film team is ready to bring your story to life.
                </p>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Share the details of your project and we&apos;ll schedule a call to scope the
                  production framework, crew requirements, and distribution strategy.
                </p>
              </div>

              <div className="bg-brand-light-grey text-brand-black rounded-2xl shadow-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-brand-black">Project Enquiry</h2>
                <p className="mt-2 text-sm text-gray-700">
                  Complete the form and we&apos;ll respond within 24 hours with next steps and
                  availability.
                </p>
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <label className="block text-sm font-semibold text-brand-black">
                    Name
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      required
                      className={`${formFieldClass} mt-2`}
                    />
                  </label>
                  <label className="block text-sm font-semibold text-brand-black">
                    Email
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      className={`${formFieldClass} mt-2`}
                    />
                  </label>
                  <label className="block text-sm font-semibold text-brand-black">
                    Service Type
                    <select
                      name="serviceType"
                      required
                      className={`${formFieldClass} mt-2`}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="wildlife">Wildlife</option>
                      <option value="hunting">Hunting</option>
                      <option value="freshwater">Freshwater Fishing</option>
                      <option value="videography">Videography</option>
                      <option value="print-sales">Print Sales</option>
                    </select>
                  </label>
                  <label className="block text-sm font-semibold text-brand-black">
                    Message
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Tell us about your expedition, location, and timeline."
                      required
                      className={`${formFieldClass} mt-2 resize-none`}
                    />
                  </label>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-brand-red px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-red"
                  >
                    Submit Enquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white text-brand-black">
          <div className="container mx-auto px-4 py-16 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-brand-black">
                Operating Base: Eastern Cape, South Africa
              </h2>
              <p className="mt-2 text-gray-700 max-w-3xl">
                We service expeditions across Southern Africa with a primary production hub in the
                Eastern Cape. Our crews are field-ready for remote locations, coastal freshwater
                systems, and cross-border wildlife reserves.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-2xl border border-brand-light-grey">
              <iframe
                title="Eastern Cape South Africa Map"
                src="https://www.google.com/maps?q=Eastern+Cape+South+Africa&output=embed"
                className="w-full h-80 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
                Follow Our Field Stories
              </p>
              <div className="mt-3 flex gap-4">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-black text-brand-black transition-colors duration-200 hover:border-brand-red hover:text-brand-red"
                    aria-label={label}
                  >
                    <Icon className="text-xl" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
