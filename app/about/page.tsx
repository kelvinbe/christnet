export default function About() {
  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          CHRISTNET INTERNATIONAL
        </h1>
        <p className="text-gray-600 text-lg">
          Growing in the Fullness of Christ
        </p>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 pb-20 space-y-6">
        <h2 className="text-2xl font-semibold">About Us</h2>

        <p className="text-gray-700 leading-relaxed">
          CHRISTNET is an ICFBO (International Christian Faith-Based Organization),
          that exists to resource the global body of Christ, by providing an
          integrated platform where universal Christians and Christian
          organizations network to build mutually beneficial ministry connections,
          that advance the knowledge of our Lord and Savior Jesus Christ.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Our goal is to create a world-wide web of evangelical Christian
          partnerships, as a hub for authentic, biblically-grounded,
          Christ-centered discipleship, education and fellowship, in response to
          the great commission, as stipulated in Matthew 28:19-20.
        </p>

        <p className="text-gray-700 leading-relaxed">
          We do this by serving one another and others, as the demonstration of
          utmost love founded in our faith in Christ, and the enduring hope of
          His return, to both reconcile to Himself, and reward His faithful
          servants.
        </p>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Vision</h3>
            <p className="text-gray-700">
              To be a comprehensive international epicenter of Christian ministry
              partnerships, for the glory of God, and the holistic good of all
              people.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Mission</h3>
            <p className="text-gray-700">
              To present Christ as the eternal hope of all humanity, through
              far-reaching strategic partnerships, among grassroot Christian
              ministry workers, for the proliferation of the gospel by faith,
              evidenced in corporate works under the I.M.P.A.C.T model and
              F.R.E.S.H.L.Y matrix.
            </p>
          </div>

        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-10">Core Values</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "A - Authenticity",
              "B - Biblical Basis",
              "C - Christocentrism",
              "D - Discipleship",
              "E - Education",
              "F - Fellowship",
              "G - Grace",
            ].map((value) => (
              <div
                key={value}
                className="bg-gray-100 p-6 rounded-xl hover:shadow-md transition"
              >
                {value}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Leadership</h2>
          <p className="text-gray-700 leading-relaxed">
            CHRISTNET International employs a volunteer-led, and board-ruled
            organizational structure in its mode of operation. As part of the
            broad-based leadership team, is the office of the Global Ministry
            Director (GMD), presently held by the founding vision bearer, who
            together with the Board of Trustees, steward executive authority on
            all ministry operations.
          </p>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-12">
            Membership & Partnership
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Individual */}
            <div className="bg-gray-100 p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold">
                Individual Membership
              </h3>

              <p className="text-gray-700 text-sm">
                <strong>Self-Registration:</strong> Individuals sign up expressing
                their desire to serve Christ.
              </p>

              <p className="text-gray-700 text-sm">
                <strong>Scouting & Recommendation:</strong> Existing members or
                affiliates may refer prospective volunteers.
              </p>

              <p className="text-gray-700 text-sm">
                Applicants must provide referral letters from local church leaders
                confirming their faith and standing.
              </p>

              <p className="text-gray-700 text-sm">
                Successful applicants receive official membership confirmation.
              </p>
            </div>

            {/* Corporate */}
            <div className="bg-gray-100 p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold">
                Corporate / Institutional Partnership
              </h3>

              <p className="text-gray-700 text-sm">
                Organizations submit a formal letter of intent addressed to the
                Board of Trustees.
              </p>

              <p className="text-gray-700 text-sm">
                Ministries are vetted to ensure credibility and alignment with
                scripture.
              </p>

              <p className="text-gray-700 text-sm">
                Members may recommend global organizations making meaningful
                impact.
              </p>

              <p className="text-gray-700 text-sm">
                Approved organizations receive official partnership recognition.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}