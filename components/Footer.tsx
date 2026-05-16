import {
  FaLinkedin,
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black border-t text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT */}
          <div>

            <div className="flex flex-wrap gap-6 mt-10 font-semibold">
              <a
                href="#"
                className="text-lime-600 hover:text-lime-700 transition"
              >
                PRIVACY POLICY
              </a>

              <a
                href="#"
                className="text-lime-600 hover:text-lime-700 transition"
              >
                TERMS & CONDITIONS
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col md:items-end">

            {/* SOCIALS */}
            <div className="flex gap-5 text-2xl">

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-white hover:text-lime-600 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-600 transition"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-600 transition"
              >
                <FaFacebook />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-600 transition"
              >
                <FaYoutube />
              </a>

            </div>

            <p className="mt-6 text-white text-sm text-center md:text-right">
              © {new Date().getFullYear()} CHRISTNET International. All rights
              reserved.
            </p>

              <p className="mt-2 text-white text-xs text-center md:text-right">
    Made with ❤️ by  Beno
  </p>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;