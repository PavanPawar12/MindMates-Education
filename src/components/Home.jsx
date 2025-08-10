import React from "react";

const Home = () => {
  const timestamp = new Date().getTime(); // unique value to prevent caching

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to Our Education Portal
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Learn, grow, and achieve your dreams with our resources and guidance.
          Explore our courses, tutorials, and expert advice to level up your
          skills.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          Start Learning
        </button>
      </section>

      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Education Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src={`https://png.pngtree.com/png-vector/20240611/ourmid/pngtree-book-vector-flat-icon-design-png-image_12700034.png`}
            alt="Education 1"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
          <img
            src={`https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg`}
            alt="Education 2"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
          <img
            src={`https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg`}
            alt="Education 3"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
          <img
            src={`https://img.freepik.com/free-photo/creative-composition-world-book-day_23-2148883765.jpg`}
            alt="Education 4"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
          <img
            src={`https://static.vecteezy.com/system/resources/thumbnails/044/280/984/small_2x/stack-of-books-on-a-brown-background-concept-for-world-book-day-photo.jpg`}
            alt="Education 5"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
          <img
            src={`https://thumbs.dreamstime.com/b/old-book-magic-lights-vintage-table-68635545.jpg`}
            alt="Education 6"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
