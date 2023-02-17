import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <nav
          className="flex flex-wrap justify-center -mx-5 -my-2"
          aria-label="Footer"
        >
          <div className="px-5 py-2">
            <Link
              href="#"
              className="text-base text-gray-500 hover:text-gray-900"
            >
              About
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="#"
              className="text-base text-gray-500 hover:text-gray-900"
            >
              Blog
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="#"
              className="text-base text-gray-500 hover:text-gray-900"
            >
              Jobs
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="#"
              className="text-base text-gray-500 hover:text-gray-900"
            >
              Press
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="#"
              className="text-base text-gray-500 hover:text-gray-900"
            >
              Privacy
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="#"
              className="text-base text-gray-500 hover:text-gray-900"
            >
              Terms
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="#"
              className="text-base text-gray-500 hover:text-gray-900"
            >
              Contact
            </Link>
          </div>
          {/* gallery */}
          <div className="px-5 py-2">
            <Link
              href="/gallery"
              className="text-base text-gray-500 hover:text-gray-900"
            >
              Gallery
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="/gallery"
              className="text-base text-gray-500 hover:text-gray-900"
            >
              Booking
            </Link>
          </div>
        </nav>
        <p className="mt-8 text-base text-center text-gray-400">
          &copy; 2021 Level up golf, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
