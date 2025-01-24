import React from 'react';

function About() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">About Our University</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-6">
            We are dedicated to fostering academic excellence, innovative research,
            and the development of future leaders who will make a positive impact
            on society.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p>
            To be a leading institution of higher education, recognized globally
            for our commitment to academic excellence, research innovation, and
            student success.
          </p>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Quick Facts</h2>
          <ul className="space-y-4">
            <li>Founded: 2015</li>
            <li>Students: 1,000+</li>
            <li>Faculty: 25+</li>
            <li>Total Companies: 30+</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;