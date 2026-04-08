import { Heart, MapPin, Briefcase } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* NAVBAR */}
      <header className="flex items-center justify-between px-6 md:px-12 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-blue-600 rounded"></div>
          <h1 className="font-bold text-lg">LifeCompass</h1>
        </div>

        <nav className="hidden md:flex space-x-8 text-sm">
          <a href="#" className="hover:text-blue-600">Features</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button className="text-blue-600">Sign In</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Get Started
          </button>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button>☰</button>
        </div>
      </header>


      {/* HERO SECTION */}
      <section className="px-6 md:px-12 py-12 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Find Clarity in Your Life Decisions
          </h1>

          <p className="mt-4 text-gray-600">
            Navigate life's important choices with personalized guidance
            and data-driven insights
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              Get Started
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="hero-image.jpg"
            alt="dashboard"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>
      </section>


      {/* FEATURES */}
      <section className="px-6 md:px-12 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          How LifeCompass Helps You
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* CARD 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-blue-600 text-2xl mb-3"><Briefcase /></div>
            <h3 className="font-semibold text-lg">Career Guidance</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Get personalized recommendations for career paths aligned with your values and goals
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-blue-600 text-2xl mb-3"><Heart /></div>
            <h3 className="font-semibold text-lg">Relationship Insights</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Understand relationship dynamics and receive guidance for meaningful connections
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-blue-600 text-2xl mb-3"><MapPin /></div>
            <h3 className="font-semibold text-lg">Decision Tool</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Visualize options and outcomes to make confident, informed decisions
            </p>
          </div>

        </div>
      </section>


      {/* TESTIMONIAL */}
      <section className="px-6 md:px-12 py-16 flex flex-col items-center text-center">
        
        <img
          src="user.jpg"
          alt="user"
          className="w-16 h-16 rounded-full mb-4"
        />

        <div className="bg-white p-6 rounded-xl shadow-sm max-w-xl">
          <p className="italic text-gray-600">
            "LifeCompass helped me navigate a major career transition with confidence.
            The personalized insights were exactly what I needed to make the right decision for my future."
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Sarah Johnson, Marketing Director
          </p>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 px-6 md:px-12 py-12">
        <div className="grid md:grid-cols-4 gap-8">

          {/* LOGO */}
          <div>
            <h2 className="font-bold text-white mb-2">LifeCompass</h2>
            <p className="text-sm">Navigate Your Journey</p>
          </div>

          {/* PRODUCT */}
          <div>
            <h3 className="font-semibold text-white mb-3">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>Features</li>
              <li>Pricing</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="font-semibold text-white mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

        </div>

        <div className="mt-10 text-sm text-center text-gray-500">
          © 2024 LifeCompass. All rights reserved.
        </div>
      </footer>

    </div>
  );
}