import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Example() {
  return (
    <div className="bg-white">
      {/* <header className="absolute inset-x-0 top-0 z-50"> */}

      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-15 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb- sm:flex"></div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Confidential. Safe. Empowered
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  At TeenWise, we believe that sexual health is a fundamental
                  aspect of overall well-being for every teen. Our mission is to
                  provide a safe, supportive platform where young people can ask
                  questions, share experiences, and access reliable information
                  about sexual health. Empowerment begins with knowledge, and
                  we’re here to help you make informed decisions for a healthier
                  future.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Share your thoughts
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Learn more about TeenWise <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] z-10 top-0 object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1370&q=80"
            alt="safety begins with you"
          />
        </div>
      </div>
    </div>
  );
}
