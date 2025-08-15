export default function Skills() {
  const skills = ["JavaScript", "React", "Tailwind CSS", "Framer Motion", "Node.js", "Axios"];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
      <h2 className="text-4xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-lg bg-gray-800 text-white font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
