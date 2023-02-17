import Image from "next/image";

export default function GalleryGrid() {
  return (
    <>
      {/* unaligned Grid of images using Image componennt */}
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4 py-8">
          <div className="col-span-1">
            <Image
              className="rounded-md"
              src="/gallery/1.jpg"
              alt="Golf bay"
              width={300}
              height={300}
            />
          </div>
          <div className="col-span-1">
            <Image
              className="rounded-md"
              src="/gallery/2.jpg"
              alt="Golf bay"
              width={300}
              height={300}
            />
          </div>
          <div className="col-span-1">
            <Image
              className="rounded-md"
              src="/gallery/3.jpg"
              alt="Golf bay"
              width={300}
              height={300}
            />
          </div>
          <div className="col-span-1">
            <Image
              className="rounded-md"
              src="/gallery/4.jpg"
              alt="Golf bay"
              width={300}
              height={300}
            />
          </div>
          <div className="col-span-1">
            <Image
              className="rounded-md"
              src="/gallery/5.jpg"
              alt="Golf bay"
              width={300}
              height={300}
            />
          </div>
          <div className="col-span-1">
            <Image
              className="rounded-md"
              src="/gallery/6.jpg"
              alt="Golf bay"
              width={300}
              height={300}
            />
          </div>
          <div className="col-span-1">
            <Image
              className="rounded-md"
              src="/gallery/7.jpg"
              alt="Golf bay"
              width={300}
              height={300}
            />
          </div>
          <div className="col-span-1">
            <Image
              className="rounded-md"
              src="/gallery/8.jpg"
              alt="Golf bay"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </>
  );
}
