import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="px-8 py-4">
      <div className="flex flex-row items-center justify-between">
        {/* Navigation items */}
        <ul className="flex flex-row items-center justify-between">
          <li className="mr-6">
            <Link href="/">{"Home"}</Link>
          </li>
          <li className="mr-6">
            <Link href="/about">{"About"}</Link>
          </li>
          <li className="mr-6">
            <Link href="/contact">{"Contact"}</Link>
          </li>
          <li className="mr-6">
            <Link href="/gallery">{"Gallery"}</Link>
            </li>
        </ul>
        {/* Navigation items */}
        {/* Logo */}
        <div className="flex flex-row items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Level up golf"
              width={100}
              height={100}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
