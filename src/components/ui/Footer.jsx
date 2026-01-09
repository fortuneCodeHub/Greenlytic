import { Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white mt-24 border-t border-gray-200">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

        {/* Brand / About */}
        <div>
          <Link
            href="/"
            className="text-3xl md:text-4xl font-extrabold text-[#2F4F3E] tracking-wide"
          >
            Greenlytic
          </Link>

          <p className="mt-5 text-sm md:text-base text-gray-600 leading-relaxed max-w-sm">
          Greenlytic is a data-driven sustainability journal covering green finance, ESG metrics, climate risk, energy technology, eco-conscious living, and DIY home improvement. We explore how finance, policy, technology, and practical home solutions are shaping a resilient, low-carbon future.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-base font-semibold text-gray-900 mb-4">
            Important Links
          </h3>
          <ul className="space-y-3 text-sm md:text-base text-gray-600">
            <li>
              <Link href="/about-us" className="hover:text-[#2F4F3E] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-[#2F4F3E] transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-[#2F4F3E] transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-use" className="hover:text-[#2F4F3E] transition">
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-base font-semibold text-gray-900 mb-4">
            Follow
          </h3>

          <a
            href="https://www.linkedin.com/in/peter-mark-98b429398?trk=contact-info"
            className="inline-flex items-center justify-center p-3
                       rounded-full border border-gray-200
                       text-gray-600 hover:text-white
                       hover:bg-[#2F4F3E] hover:border-[#2F4F3E]
                       transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Greenlytic. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
