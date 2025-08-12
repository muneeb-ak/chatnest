import Testimonials from "./testimonials/page";

export default function Home() {
  return (

    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white">
      {/* Hero Section */}
<section className="flex flex-col gap-2 items-center justify-center text-center px-4 py-30 space-y-6 min-h-[70vh] sm:min-h-[80vh]">

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-white text-transparent bg-clip-text drop-shadow-lg">
          Welcome to ChatNest
        </h1>
<p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto leading-relaxed">
  Connect swiftly with friends and communities. Chat in real-time, 
  share ideas, and build meaningful conversations.
</p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="/nests"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-medium transition duration-300 shadow-lg text-center"
          >
            🚀 Launch App
          </a>
          <a
            href="#working"
            className="border border-gray-300 hover:border-white text-gray-300 hover:text-white px-6 py-3 rounded-full text-lg font-medium transition duration-300 text-center"
          >
            📖 Learn More
          </a>
        </div>
      </section>

      {/* Why ChatNest */}
      <section className="px-4 sm:px-6 py-16 bg-gradient-to-br from-gray-900 to-indigo-900 ">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why ChatNest?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <FeatureCard
              title="🔒 Secure Messaging"
              description="End-to-end encryption ensures your private conversations stay private."
            />
            <FeatureCard
              title="⚡ Instant Sync"
              description="Messages appear instantly across all your devices without refreshing."
            />
            <FeatureCard
              title="✨ Clean UI"
              description="A distraction-free design that makes chatting effortless and enjoyable."
            />
            <FeatureCard
              title="🌍 Connect Globally"
              description="Chat with friends or meet new people from anywhere in the world."
            />
            <FeatureCard
              title="📎 Share Anything"
              description="Send images, documents, voice notes, and more with zero hassle."
            />
            <FeatureCard
              title="💡 Smart Features"
              description="Typing indicators, read receipts, and search make chatting smooth."
            />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section  id="working" className="px-4 sm:px-6 py-20 bg-gradient-to-br from-gray-900 to-indigo-900  border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl font-bold">How ChatNest Works</h2>
          <div className="relative border-l border-gray-700">
            <TimelineStep
              emoji="🔐"
              number="1"
              title="Sign Up Securely"
              description="Create your account in seconds with secure authentication — no hassle, no spam."
            />
            <TimelineStep
              emoji="🧑‍🤝‍🧑"
              number="2"
              title="Connect with People"
              description="Search for friends, add new contacts, or join community chat groups instantly."
            />
            <TimelineStep
              emoji="💬"
              number="3"
              title="Start Messaging"
              description="Send text, images, voice notes, and files — all in real-time with zero delays."
            />
            <TimelineStep
              emoji="🌍"
              number="4"
              title="Chat Anywhere"
              description="Stay connected on desktop, tablet, or mobile with a responsive interface."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="bg-gradient-to-br from-indigo-900 to-black py-20 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Start chatting with the world</h2>
        <p className="text-gray-200 mb-6 text-base sm:text-lg">
          No installation needed — just sign in and connect instantly.
        </p>
        <a
          href="/nests"
          className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full text-lg hover:bg-gray-100 transition inline-block"
        >
          🚀 Launch ChatNest
        </a>
      </section>

        */}
       <Testimonials/>


      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 px-4 py-10 text-sm border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} ChatNest. All rights reserved.</p>
          <div className="flex space-x-4">
            <a  className=" cursor-pointer hover:text-white">Privacy</a>
            <a  className=" cursor-pointer hover:text-white">Terms</a>
            <a
              className=" cursor-pointer hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Feature Card Component
const FeatureCard = ({ title, description }) => (
  <div className="bg-gray-950 p-6 rounded-xl shadow-lg hover:shadow-indigo-500/30 transition">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);



// Timeline Step Component
const TimelineStep = ({ emoji, number, title, description }) => (
  <div className="mb-10 ml-6 relative">
    <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-indigo-600 rounded-full text-white text-sm font-bold border-2 border-indigo-400">
      {emoji}
    </span>
    <div className="bg-gray-950 p-5 rounded-lg shadow-lg hover:shadow-indigo-500/30 transition">
      <h4 className="text-lg font-bold mb-1">
        Step {number}: {title}
      </h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </div>

);

export const metadata = {
  title: "Home | ChatNest",
  description: "Connect with the world.",
};
