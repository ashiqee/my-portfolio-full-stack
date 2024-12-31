"use client";
import React from "react";

import { useUser } from "@/context/user.provider";

const PortfolioFooter = () => {
  const { user } = useUser();

  console.log(user);

  return (
    <footer className="bg-gradient-to-bl from-amber-100/45 dark:from-sky-500/35  dark:to-slate-900/5">
      <div className="container px-6  max-w-7xl md:mx-auto py-8">
        <div className="grid w-full justify-between  grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">About Me</h2>
            <p className="text-sm">
              Passionate Full stack developer crafting intuitive and engaging
              web applications. Always eager to learn and explore new
              technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h2>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="hover:text-gray-100 transition-colors"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-100 transition-colors"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-100 transition-colors"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
              <li>
                {user ? (
                  <a
                    className="hover:text-gray-100 transition-colors"
                    href={`/${user.role?.toLocaleLowerCase()}/dashboard`}
                  >
                    Dashboard
                  </a>
                ) : (
                  <a
                    className="hover:text-gray-100 transition-colors"
                    href="/login"
                  >
                    Login
                  </a>
                )}
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Follow Me</h2>
            <div className="flex space-x-4">
              <a
                className="hover:text-gray-100 transition-colors"
                href="https://github.com/ashiqee"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2.3c-3.3.7-4-.8-4-.8-.5-1.1-1.2-1.4-1.2-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.5 2.4 1.1 3 .8.1-.7.3-1.1.6-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.4-2.3 1.2-3.2-.1-.3-.5-1.5.1-3 0 0 1-.3 3.3 1.3.9-.3 1.8-.4 2.7-.4s1.8.1 2.7.4c2.3-1.6 3.3-1.3 3.3-1.3.6 1.5.2 2.7.1 3 .8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.7.9.7 1.8v2.6c0 .3.2.7.8.6 4.6-1.5 7.9-5.7 7.9-10.8C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </a>
              <a
                className="hover:text-gray-100 transition-colors"
                href="https://linkedin.com/in/your-username"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.46 8.5h4.07v12H.46v-12zM7.54 8.5h3.91v1.6h.05c.54-1.02 1.87-2.1 3.85-2.1 4.11 0 4.86 2.7 4.86 6.2v6.3h-4.07v-5.6c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.7h-4.07v-12z" />
                </svg>
              </a>
              <a
                className="hover:text-gray-100 transition-colors"
                href="https://twitter.com/Xashiqe"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.4 4.8c-.9.4-1.8.7-2.8.8 1-.6 1.7-1.6 2-2.7-.9.6-2 1-3.1 1.3-.8-.9-2-1.4-3.2-1.4-2.5 0-4.5 2-4.5 4.5 0 .4 0 .8.1 1.1C7.7 8.1 4.1 6.1 1.6 3.2c-.5.8-.7 1.7-.7 2.7 0 1.6.8 3 2 3.8-.8 0-1.6-.3-2.2-.7v.1c0 2.3 1.6 4.2 3.6 4.6-.4.1-.8.2-1.2.2-.3 0-.6 0-.8-.1.6 2 2.4 3.5 4.4 3.5-1.6 1.3-3.5 2-5.6 2-.4 0-.8 0-1.2-.1 2 1.3 4.5 2.1 7 2.1 8.4 0 13-6.8 13-12.7v-.6c.9-.6 1.6-1.4 2.2-2.3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} ASHIQ. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
