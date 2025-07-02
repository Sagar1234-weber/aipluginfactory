import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-24 px-6 text-center bg-gradient-to-br from-indigo-100 to-purple-100">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">🚀 Welcome to <span className="text-purple-600">AI Plugin Factory</span></h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-xl">Build, deploy, and share AI plugins effortlessly – your AI assistant starts here.</p>
        <div className="mt-8">
          <a href="#features" className="bg-purple-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-purple-700 transition">Explore Features</a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">🔥 Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 rounded-2xl shadow-lg border hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">Easy Plugin Creation</h3>
              <p className="text-gray-600">No-code or low-code editor to build your own AI tools in minutes.</p>
            </div>
            <div className="p-6 rounded-2xl shadow-lg border hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">One-Click Deployment</h3>
              <p className="text-gray-600">Integrated with Vercel & GitHub for seamless deploy and version control.</p>
            </div>
            <div className="p-6 rounded-2xl shadow-lg border hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">Plugin Marketplace</h3>
              <p className="text-gray-600">List your plugin or find others to boost your productivity and workflow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-600 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to build your first plugin?</h2>
        <p className="text-lg mb-6">Start now and unlock the power of AI in your hands.</p>
        <a href="https://github.com/Sagar1234-weber/aipluginfactory" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-700 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition">Go to GitHub</a>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AI Plugin Factory · Built with ❤️ by Surya
      </footer>
    </main>
  );
}
