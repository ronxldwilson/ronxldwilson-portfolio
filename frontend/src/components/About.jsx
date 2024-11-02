// src/components/About.jsx
const About = () => {
    return (
      <section className="py-20 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
          <p className="text-lg leading-relaxed text-center max-w-2xl mx-auto">
            I am a web developer with a passion for creating user-friendly, responsive, and visually appealing websites. I have experience with various technologies including React, JavaScript, and Tailwind CSS.
          </p>
          <div className="flex flex-wrap justify-center mt-10">
            {['React', 'JavaScript', 'CSS', 'Tailwind CSS', 'Node.js'].map((skill) => (
              <span key={skill} className="px-4 py-2 m-2 bg-indigo-600 text-white rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  