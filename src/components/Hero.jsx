const Hero = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to My Website</h2>
        <p className="text-gray-700 mb-6">
          This is a modern website built with Next.js and Tailwind CSS.
        </p>
        <a
          href="#"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;