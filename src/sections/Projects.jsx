export default function Projects() {
  const projects = [
    { name: "Portfolio Website", description: "My personal portfolio built with React & Tailwind CSS." },
    { name: "Todo App", description: "A simple task manager with React hooks and localStorage." },
    { name: "E-commerce UI", description: "Responsive frontend UI for an online shop." }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      <div className="flex flex-col md:flex-row gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="p-6 rounded-lg bg-gray-800 max-w-sm hover:bg-gray-700 transition"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-400">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
