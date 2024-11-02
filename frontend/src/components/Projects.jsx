// src/components/Projects.jsx
const projects = [
    {
      title: 'Project One',
      description: 'A description of project one.',
      link: 'https://example.com/project-one',
    },
    {
      title: 'Project Two',
      description: 'A description of project two.',
      link: 'https://example.com/project-two',
    },
  ];
  
  const Projects = () => {
    return (
      <section className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-lg mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-indigo-600 font-bold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  