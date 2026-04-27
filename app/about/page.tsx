export default function About() {
  return (
    <main className="bg-[#0b0f19] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">About CHRISTNET</h1>
          <p className="text-gray-300">
            Building a global network of believers and ministries for
            discipleship, fellowship, and impactful partnerships.
          </p>
        </div>

        {/* MISSION */}
        <section className="bg-[#111827] p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            To present Christ as the eternal hope of humanity through strategic
            partnerships that advance the gospel.
          </p>
        </section>

        {/* CORE VALUES */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Authenticity",
              "Biblical Basis",
              "Christocentrism",
              "Discipleship",
              "Education",
              "Fellowship",
              "Grace",
            ].map((item) => (
              <div
                key={item}
                className="bg-[#1f2937] p-6 rounded-xl text-center hover:scale-105 transition"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="bg-[#111827] p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-semibold mb-4">Leadership</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            CHRISTNET operates through a volunteer-led, board-ruled structure
            with a Global Ministry Director and Board of Trustees overseeing
            operations.
          </p>
        </section>

        {/* MEMBERSHIP */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-10">
            Membership & Partnership
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-[#111827] p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">
                Individual Membership
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>✔ Self-registration</li>
                <li>✔ Scouting & Recommendation</li>
                <li>✔ Referral letters required</li>
              </ul>
            </div>

            <div className="bg-[#111827] p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">
                Corporate Partnership
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>✔ Formal letter of intent</li>
                <li>✔ Ministry profile vetting</li>
                <li>✔ Official partnership approval</li>
              </ul>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
