import React from "react";
import { BookOpen, Users, Award } from "lucide-react";

const Home = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Learn Without Limits
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Unlock your potential with world-class courses, resources, and expert
          guidance. Your journey to mastery starts here.
        </p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition">
          Get Started
        </button>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
          <BookOpen className="w-12 h-12 mx-auto text-blue-600 mb-3" />
          <h3 className="text-xl font-bold">500+ Courses</h3>
          <p className="text-gray-600">Learn skills from industry experts.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
          <Users className="w-12 h-12 mx-auto text-green-600 mb-3" />
          <h3 className="text-xl font-bold">1M+ Students</h3>
          <p className="text-gray-600">Join a thriving global community.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
          <Award className="w-12 h-12 mx-auto text-yellow-500 mb-3" />
          <h3 className="text-xl font-bold">Top Instructors</h3>
          <p className="text-gray-600">Learn from award-winning mentors.</p>
        </div>
      </section>

      {/* Course Cards */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Featured Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "Web Development Bootcamp",
              img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
              desc: "Master HTML, CSS, JavaScript & React."
            },
            {
              title: "Data Science with Python",
              img: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
              desc: "Analyze and visualize data like a pro."
            },
            {
              title: "Digital Marketing Mastery",
              img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
              desc: "Grow brands with SEO, ads & content."
            },
          ].map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 hover:shadow-xl transition"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{course.desc}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
