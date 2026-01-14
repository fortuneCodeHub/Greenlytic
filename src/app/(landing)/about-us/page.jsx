import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Link from "next/link";

export const metadata = {
  title: "About Us - TradingFarms: Sustainability, Climate & DIY Insights",
  description:
    "Discover TradingFarms — your data-driven sustainability hub exploring green finance, ESG, climate tech, energy innovation, and eco-friendly DIY solutions. Learn, act, and live greener.",
};

export default function AboutPage() {
  return (
    <>
      {/* Navigation bar */}
      <Header />

      {/* Hero/About Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-white bg-[#2F4F3E] rounded-2xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center">
            About
            <Link
              href="/"
              className="relative lg:text-5xl md:text-4xl ms-5 text-2xl font-extrabold"
            >
              <span className="text-white tracking-wide">TradingFarms</span>
            </Link>
          </h1>

          <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto">
            Delivering actionable insights on green finance, ESG, climate tech, sustainable living, and DIY home improvement.
          </p>
        </div>

        <div className="space-y-10 text-lg leading-relaxed text-green-100 text-center max-w-4xl mx-auto">
          <p>
            <strong className="text-white">TradingFarms</strong> is a sustainability-focused platform blending research, data, and practical guidance. 
            We explore the intersection of finance, energy, climate innovation, and everyday eco-conscious living.
          </p>

          <p>
            From ESG investing and green finance to climate tech, renewable energy, and DIY eco-friendly home solutions, TradingFarms equips readers to make impactful, sustainable choices.
          </p>

          <div className="border-l-4 border-[#243D31] pl-6 italic text-green-200">
            “Where data meets action — TradingFarms decodes metrics, technology, and practical solutions for a greener, smarter future.”
          </div>

          <p>
            Whether you are a sustainability professional, climate-conscious homeowner, or eco-lifestyle enthusiast, TradingFarms offers research-backed, actionable insights.
          </p>

          <p>
            We believe in merging science, finance, innovation, and lifestyle to inspire meaningful action for a sustainable planet and healthier communities.
          </p>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/"
            className="inline-block bg-[#243D31] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1E362A] transition-colors"
          >
            Explore TradingFarms
          </a>
        </div>
      </section>

      {/* Chief Editor Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-white">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Meet Our Chief Editor</h2>
          <p className="text-lg text-gray-800">
            The mind guiding <span className="font-semibold">TradingFarms</span> — also known as 
            <span className="ms-2 font-semibold text-[#243D31]">“The Green Lord.”</span>
          </p>
        </div>

        {/* Editor Card */}
        <div className="bg-[#2F4F3E] shadow-lg rounded-2xl p-8 md:p-12 border border-[#2F4F3E]">
          <div className="flex flex-col md:flex-row md:items-start gap-10">

            {/* Author Images */}
            <div className="flex flex-col items-center gap-4 md:w-1/3">
              <img
                src="/assets/images/mark-peter1.jpg" 
                alt="Peter Mark - Chief Editor of TradingFarms"
                className="w-40 h-40 object-cover rounded-full shadow-md"
              />
              <img
                src="/assets/images/peter-mark2.jpg" 
                alt="Peter Mark exploring sustainability and energy tech"
                className="w-40 h-40 object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Author Text */}
            <div className="md:w-2/3 space-y-6 text-lg leading-relaxed">
              <p>
                <strong>Peter Mark</strong> is the Chief Editor of <strong>TradingFarms</strong>, guiding the platform’s editorial vision with deep expertise in sustainability, green finance, climate tech, and energy innovation. 
                His mission is to make complex sustainability data actionable and inspire eco-friendly living through research, DIY guidance, and practical insights.
              </p>

              <h3 className="text-2xl font-semibold mt-6">Professional Experience</h3>
              <p>
                <strong>Climate & Energy Consultant – EcoTech Solutions</strong><br />
                Peter develops strategies for renewable energy adoption, sustainable infrastructure, and climate risk assessment.
              </p>
              <p className="text-sm text-white">
                Twitter/X:{" "}
                <a className="text-gray-800 underline break-all inline-block" href="https://x.com/Nottytmn?s=09" target="_blank">
                  https://x.com/Nottytmn?s=09
                </a>
              </p>

              <p>
                <strong>Chief Editor – TradingFarms</strong><br />
                Peter leads content strategy, ensuring every article on green finance, DIY home improvement, climate tech, and sustainable living is accurate, actionable, and beginner-friendly.
              </p>

              <h3 className="text-2xl font-semibold mt-6">Education & Certifications</h3>
              <ul className="list-disc ml-5 space-y-3 text-white">
                <li>
                  MSc Environmental Management – UniAthena <br />
                </li>
                <li>
                  Certified ESG Analyst – Global ESG Institute <br />
                </li>
                <li>
                  Renewable Energy & Climate Solutions – Alison <br />
                </li>
                <li>
                  Sustainable Home Improvement & Green DIY – Green Academy <br />
                </li>
              </ul>

              <p>
                <strong>Ongoing Research:</strong><br />
                Sustainable finance, climate tech innovation, energy efficiency, and eco-conscious lifestyle strategies to drive measurable environmental impact.
              </p>

              <h3 className="text-2xl font-semibold mt-6">Professional Profiles</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-800">
                <li><a href="https://www.linkedin.com/in/peter-mark-98b429398?trk=contact-info" target="_blank" className="underline break-all inline-block">LinkedIn Profile</a></li>
                <li><a href="https://independent.academia.edu/PeterMark67" target="_blank" className="underline break-all inline-block">Academia.edu</a></li>
                <li><a href="https://medium.com/@petermark.editor" target="_blank" className="underline break-all inline-block">Medium Articles</a></li>
              </ul>

              <p className="text-sm text-white border-t pt-4">
                <strong>Disclaimer:</strong> All material is for educational purposes only. Nothing here constitutes personalized financial, climate, or DIY advice. Consult certified professionals for specific guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
