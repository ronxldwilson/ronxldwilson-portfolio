// src/components/Contact.jsx
const Contact = () => {
    return (
      <section className="py-20 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
          <form className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
            <label className="block mb-4">
              <span className="text-gray-700">Your Name</span>
              <input type="text" className="mt-2 p-3 border border-gray-300 rounded w-full" />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Your Email</span>
              <input type="email" className="mt-2 p-3 border border-gray-300 rounded w-full" />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Message</span>
              <textarea className="mt-2 p-3 border border-gray-300 rounded w-full" rows="4"></textarea>
            </label>
            <button className="w-full py-3 mt-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  