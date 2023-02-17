import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      {/* a hero section with "Book your bay now" as the CTA */}
      <div className="relative flex flex-col items-center justify-center w-full bg-gray-100 h-96">
        <Image
          src="/hero.jpg"
          alt="Hero image"
          fill={true}
          className="absolute z-0 object-cover w-full h-full"
        />
        <div className="z-10 flex flex-col items-center justify-center w-full h-full backdrop-blur-md">
          <h1 className="text-4xl font-bold text-center text-gray-800">
            Book your bay now
          </h1>
          <p className="text-xl font-medium text-center text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod.
          </p>
          <button className="px-8 py-4 mt-4 text-lg font-medium text-black bg-gray-100 rounded-md hover:bg-gray-200">
            Book your bay now
          </button>
        </div>
      </div>
    </>
  );
}
