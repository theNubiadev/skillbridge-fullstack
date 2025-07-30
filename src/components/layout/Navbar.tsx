import type  React from 'react'
import Link from 'next/link'

export default  function Navbar() {
  return (
     <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                {/* <Briefcase className="h-6 w-6" /> */}
              </div>
              <span className="text-2xl font-bold text-gray-900">SkillBridge</span>
            </Link>
                  </div>
              </div>
          </div>
      </nav>
  )
}

