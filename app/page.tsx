// FULL LANDING PAGE (Styled like the design you provided)
// Next.js 14 + Tailwind

// app/page.tsx

export default function Home() {
  return (
    <main className="bg-[#0b0f19] text-white">

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl font-bold leading-tight">
            CHRISTNET INTERNATIONAL
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Connecting believers and ministries worldwide for discipleship,
            fellowship, and impact.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-red-500 px-6 py-3 rounded-full">
              Join Now
            </button>
            <button className="border px-6 py-3 rounded-full">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6 grid md:grid-cols-4 gap-8 text-center">
        {[
          "Discipleship",
          "Education",
          "Fellowship",
          "Global Impact",
        ].map((item) => (
          <div key={item} className="bg-[#111827] p-6 rounded-xl">
            <div className="text-3xl mb-3">✝️</div>
            <h3 className="font-semibold">{item}</h3>
            <p className="text-sm text-gray-400 mt-2">
              Building strong Christian foundations globally.
            </p>
          </div>
        ))}
      </section>

      {/* VIDEO SECTION */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Global Mission</h2>
        <div className="flex justify-center">
          <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            ▶
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 px-6">
        <h2 className="text-3xl text-center font-bold mb-10">
          Welcome to CHRISTNET
        </h2>
        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-[#1f2937] p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">
              Membership Benefits
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>✔ Global networking</li>
              <li>✔ Ministry collaboration</li>
              <li>✔ Discipleship programs</li>
              <li>✔ Leadership growth</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1529634892255-3a9b2a1d3b65" className="rounded-xl" />
            <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d" className="rounded-xl" />
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" className="rounded-xl" />
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" className="rounded-xl" />
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 bg-[#111827]">
        <h2 className="text-3xl text-center font-bold mb-10">
          Testimonials
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          <div className="bg-[#1f2937] p-6 rounded-xl">
            <p className="text-gray-300">
              CHRISTNET has transformed how we connect with ministries worldwide.
            </p>
            <div className="mt-4 font-semibold">— Ministry Leader</div>
          </div>

          <div className="bg-[#1f2937] p-6 rounded-xl">
            <p className="text-gray-300">
              A powerful platform for Christian growth and collaboration.
            </p>
            <div className="mt-4 font-semibold">— Volunteer</div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-400">
        © {new Date().getFullYear()} CHRISTNET International
      </footer>

    </main>
  );
}
