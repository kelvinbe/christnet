// FULL LANDING PAGE (White theme with black text)
// Next.js 14 + Tailwind

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl font-bold leading-tight text-white">
            CHRISTNET INTERNATIONAL
          </h1>
          <p className="mt-4 text-lg text-white">
            Connecting believers and ministries worldwide for discipleship,
            fellowship, and impact.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-red-500 text-white px-6 py-3 rounded-full">
              Join Now
            </button>
            <button className="border text-white px-6 py-3 rounded-full">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6 grid md:grid-cols-4 gap-8 text-center bg-white">
        {[
          "Discipleship",
          "Education",
          "Fellowship",
          "Global Impact",
        ].map((item) => (
          <div key={item} className="bg-gray-100 p-6 rounded-xl">
            <div className="text-3xl mb-3">✝️</div>
            <h3 className="font-semibold text-black">{item}</h3>
            <p className="text-sm text-gray-700 mt-2">
              Building strong Christian foundations globally.
            </p>
          </div>
        ))}
      </section>

      {/* VIDEO SECTION */}



      {/* SERVICES GRID */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl text-center font-bold mb-10 text-black">
          Welcome to CHRISTNET
        </h2>
        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-gray-100 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-black">
              Membership Benefits
            </h3>
            <ul className="space-y-2 text-gray-800">
              <li>✔ Global networking</li>
              <li>✔ Ministry collaboration</li>
              <li>✔ Discipleship programs</li>
              <li>✔ Leadership growth</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src="https://unsplash.com/photos/earth-rising-over-the-moons-horizon-Y38PSLjc-Fg" className="rounded-xl" />
            {/* <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d" className="rounded-xl" /> */}
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" className="rounded-xl" />
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" className="rounded-xl" />
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl text-center font-bold mb-10 text-black">
          Testimonials
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          <div className="bg-gray-100 p-6 rounded-xl">
            <p className="text-gray-800">
              CHRISTNET has transformed how we connect with ministries worldwide.
            </p>
            <div className="mt-4 font-semibold text-black">— Ministry Leader</div>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl">
            <p className="text-gray-800">
              A powerful platform for Christian growth and collaboration.
            </p>
            <div className="mt-4 font-semibold text-black">— Volunteer</div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
     <>
     <Footer />
     </>

    </main>
  );
}