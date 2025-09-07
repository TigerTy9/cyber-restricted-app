// src/pages/About.jsx
import React from 'react';

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 text-center">
        About Us
      </h1>
      <p className="mt-4 text-lg text-blue-600 max-w-2xl text-center">
        We are dedicated to building amazing web applications using modern technologies like React, Tailwind CSS, and React Router. Our mission is to provide simple, elegant, and efficient solutions.
      </p>
    </div>
  );
}

export default About;
