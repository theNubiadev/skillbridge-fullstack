"use client"
import type React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                {/* <Briefcase className="h-6 w-6" /> */}
              </div>
              <span className="text-2xl font-bold text-gray-900">
                SkillBridge
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/jobs"
              className={`text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/jobs") ? "text-blue-600 bg-blue-50" : ""
              }`}
            >
              Find Jobs
            </Link>
            <Link
              href="/freelancers"
              className={`text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium ${
                isActive("/freelancers") ? "text-blue-600 bg-blue-50" : ""
              }`}
            >
              Find Freelancers
            </Link>
                  </div>
                  

                  <div className="flex items-center space-x-4 ">
                      {/* { ? (): (
                          
                      )} */}
                  </div>
        </div>
      </div>
    </nav>
  );
}
