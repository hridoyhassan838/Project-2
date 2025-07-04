import Image from "next/image";

export default function PostBlock({
  title,
  description,
  readTime,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  imageSizes
}) {
  return (
    <section className="flex flex-col lg:flex-row items-start border-t-2 border-black pt-4">
        
        
        
      <article className="w-full lg:w-1/2">
        <h2 className="text-3xl font-bold text-black pb-2">{title}</h2>
        
        <p className="text-2xl text-black font-[Merriweather]">{description}</p>
        
        <time className="block text-xs text-gray-500 py-2">{readTime}</time>
        </article>
      
      
      
      <div className="w-full lg:w-1/2 lg:pl-4">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          sizes={imageSizes}
          className="rounded shadow-md"
          priority
          fetchPriority="high"
        />
        
        <p className="text-right text-xs text-black py-2">
          From One New World
        </p>
      </div>
      
      
      
    </section>
  );
}