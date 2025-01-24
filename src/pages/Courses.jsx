import React from 'react';

function Courses() {
  const courses = [
    {
      id: 1,
      name: "B. Tech",
      description: "Study programming, algorithms, and software development",
      duration: "4 years"
    },
    {
      id: 2,
      name: "MBA",
      description: "Learn management, marketing, and business strategy",
      duration: "2 years"
    },
    {
      id: 3,
      name: "PhD",
      description: "Conduct advanced research, explore new knowledge, and specialize in a specific field",
      duration: "3-5 years"
    }
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(course => (
          <div key={course.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{course.name}</h2>
            <p className="mb-4">{course.description}</p>
            <p className="text-blue-600">Duration: {course.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;