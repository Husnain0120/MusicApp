"use client";
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase bg-gradient-to-r from-teal-400 to-green-500 inline-block py-1 px-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-4xl sm:text-5xl font-extrabold leading-tight tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
            Learn With The Best
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <p
                    className="text-base mb-3 mt-1 text-white-600 font-semibold tracking-wide uppercase bg-gradient-to-r  from-orange-700
                 to-pink-500  inline-block  px-1 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    ${course.price}
                  </p>
                  <Link href={`/courses/${course.slug}`}>
                    <button className="mt-4inline-block px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:via-blue-500 hover:to-green-400 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
                      Learn More
                    </button>
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <div className="mt-20 text-center">
          <Link href="/courses">
            <button className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:from-purple-600 hover:to-blue-500 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
              View All Courses
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCourses;
