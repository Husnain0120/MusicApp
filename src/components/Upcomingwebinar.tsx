"use client";
import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link";

const Upcomingwebinar = () => {
  const featuredWebinars = [
    {
      title: "Understanding Music Theory",
      description:
        "Dive deep into the fundamentals of music theory and enhance your musical skills.",
      slug: "understanding-music-theory",
      isFeatured: true,
    },
    {
      title: "The Art of Songwriting",
      description:
        "Learn the craft of songwriting from experienced musicians and songwriters.",
      slug: "the-art-of-songwriting",
      isFeatured: true,
    },
    {
      title: "Mastering Your Instrument",
      description:
        "Advanced techniques to master your musical instrument of choice.",
      slug: "mastering-your-instrument",
      isFeatured: true,
    },
    {
      title: "Music Production Essentials",
      description:
        "Get started with music production with this comprehensive overview.",
      slug: "music-production-essentials",
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: "Live Performance Techniques",
      description:
        "Enhance your live performance skills with expert tips and strategies.",
      slug: "live-performance-techniques",
      isFeatured: true,
    },
    {
      title: "Digital Music Marketing",
      description:
        "Learn how to promote your music effectively in the digital age.",
      slug: "digital-music-marketing",
      isFeatured: true,
    },
  ];
  return (
    <div className="p-12 bg-gray-900 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase bg-gradient-to-r from-teal-400 to-green-500 inline-block py-1 px-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-2xl sm:text-5xl font-extrabold leading-tight tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
            Enhance Your Musical Jourey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: `/${webinar.slug}`,
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link href={`/`}>
            <button className="mt-4inline-block px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:via-blue-500 hover:to-green-400 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
              View All Webinars
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Upcomingwebinar;
