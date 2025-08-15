export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-lg text-gray-400 mb-6">
        Feel free to reach out via email: <span className="text-white font-medium">jason@example.com</span>
      </p>
      <div className="flex gap-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
