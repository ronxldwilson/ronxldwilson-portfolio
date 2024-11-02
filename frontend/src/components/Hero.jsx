// src/components/Hero.jsx
const Hero = () => {
    return (
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm [Your Name]</h1>
        <p className="text-xl mb-6">A Passionate Web Developer</p>
        <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-100">
          View My Work
        </button>
      </section>
    );
  };
  
  export default Hero;
  