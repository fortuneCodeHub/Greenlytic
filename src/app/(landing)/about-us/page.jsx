import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Link from "next/link";

export const metadata = {
  title: "About Us - Greenlytic: Data-Driven Sustainability & Eco Insights",
  description:
    "Learn about Greenlytic — a data-led sustainability journal exploring green finance, ESG, climate risk, and energy innovation. Our mission is to deliver actionable insights for a greener, more resilient future.",
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
              <span className="text-white tracking-wide">Greenlytic</span>
            </Link>
          </h1>

          <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto">
            Delivering data-driven insights on sustainable finance, ESG metrics, climate risk, and energy innovation.
          </p>
        </div>

        <div className="space-y-10 text-lg leading-relaxed text-green-100 text-center max-w-4xl mx-auto">
          <p>
            <strong className="text-white">Greenlytic</strong> is a lifestyle and eco-friendly blog that blends data-led research with actionable sustainability insights.
            We explore how finance, policy, and technology intersect to create resilient, green systems.
          </p>

          <p>
            From ESG investing and green finance to AI-driven climate risk analysis, Greenlytic provides readers with knowledge to make informed and sustainable decisions.
          </p>

          <div className="border-l-4 border-[#243D31] pl-6 italic text-green-200">
            “Data meets sustainability — Greenlytic decodes metrics, technology, and policy for a greener future.”
          </div>

          <p>
            Whether you’re a finance professional, eco-conscious investor, or sustainability enthusiast, Greenlytic offers insights that are both practical and research-backed.
          </p>

          <p>
            We believe in bridging science, finance, and lifestyle to inspire impactful action for our planet and communities.
          </p>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/"
            className="inline-block bg-[#243D31] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1E362A] transition-colors"
          >
            Explore Greenlytic
          </a>
        </div>
      </section>

      {/* Chief Editor Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-white">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Meet Our Chief Editor</h2>
          <p className="text-lg text-gray-800">
            The mind guiding <span className="font-semibold">Greenlytic</span> — also known as 
            <span className="ms-2 font-semibold text-[#243D31]">“The Yield Witness.”</span>
          </p>
        </div>

        {/* Editor Card */}
        <div className="bg-[#2F4F3E] shadow-lg rounded-2xl p-8 md:p-12 border border-[#2F4F3E]">
            <div className="flex flex-col md:flex-row md:items-start gap-10">
              
              {/* Author Images */}
              <div className="flex flex-col items-center gap-4 md:w-1/3">
                <img
                  src="/assets/images/mark-peter1.jpg" 
                  alt="Peter Mark - Chief Editor of YieldInvest"
                  className="w-40 h-40 object-cover rounded-full shadow-md"
                />
                
                <img
                  src="/assets/images/peter-mark2.jpg" 
                  alt="Peter Mark working on fintech dashboards"
                  className="w-40 h-40 object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Author Text */}
              <div className="md:w-2/3 space-y-6 text-lg leading-relaxed">
                <p>
                  <strong>Peter Mark</strong> is the Chief Editor of YieldInvest.com — guiding the 
                  platform’s editorial vision with deep expertise in web technologies, AI systems, 
                  and fintech innovations. His goal is simple: deliver precise, technology-centered 
                  insights across personal finance, insurance, and digital banking.
                </p>

                <h3 className="text-2xl font-semibold mt-6">Professional Experience</h3>
                <p>
                  <strong>Frontend Developer – Notty Terminal</strong><br />
                  Peter builds real-time trading dashboards and advanced algorithmic interfaces for 
                  Notty Terminal, a next-generation web3 fintech company.
                </p>
                <p className="text-sm text-white">
                  Twitter/X:{" "}
                  <a className="text-gray-800 underline break-all inline-block" href="https://x.com/Nottytmn?s=09" target="_blank">
                    https://x.com/Nottytmn?s=09
                  </a>
                  <br />
                  Colosseum Project Page:{" "}
                  <a className="text-gray-800 underlinebreak-all inline-block" href="https://arena.colosseum.org/projects/explore/notty-terminal" target="_blank">
                    Notty Terminal on Colosseum
                  </a>
                </p>

                <p>
                  <strong>Chief Editor – YieldInvest.com</strong><br />
                  Peter leads the content strategy, ensuring every financial or insurance topic is 
                  accurate, trustworthy, and beginner-friendly — while being grounded in real fintech 
                  industry experience.
                </p>

                <h3 className="text-2xl font-semibold mt-6">Education & Certifications</h3>
                {/* <h3 className="text-2xl font-semibold mt-6">Education & Certifications</h3> */}
                <ul className="list-disc ml-5 space-y-3 text-white">

                  <li>
                    freeCodeCamp – Responsive Web Design (2025) <br />
                    <a href="https://www.freecodecamp.org/learn/responsive-web-design-v9" target="_blank"
                      className="text-gray-800 underline break-all inline-block">https://www.freecodecamp.org/learn/responsive-web-design-v9</a>
                  </li>

                  <li>
                    UniAthena – Basics of Risk Management in Insurance Sector <br />
                    <a href="https://uniathena.com/short-courses/basics-of-risk-management-in-insurance-sector" target="_blank"
                      className="text-gray-800 underline break-all inline-block">https://uniathena.com/short-courses/basics-of-risk-management-in-insurance-sector</a>
                  </li>

                  <li>
                    Alison – Diploma in Risk Management <br />
                    <a href="https://alison.com/topic/learn/70676/learning-outcomes" target="_blank"
                      className="text-gray-800 underline break-all inline-block">https://alison.com/topic/learn/70676/learning-outcomes</a>
                  </li>

                  <li>
                    Alison – Property & Liability Risk <br />
                    <a href="https://alison.com/topic/learn/75434/learning-outcomes" target="_blank"
                      className="text-gray-800 underline break-all inline-block">https://alison.com/topic/learn/75434/learning-outcomes</a>
                  </li>

                  <li>
                    freeCodeCamp – Frontend Development Libraries <br />
                    <a href="https://www.freecodecamp.org/learn/front-end-development-libraries-v9/" target="_blank"
                      className="text-gray-800 underline break-all inline-block">https://www.freecodecamp.org/learn/front-end-development-libraries-v9/</a>
                  </li>

                  <li>
                    Alison – AI in Personal Finance and Investments <br />
                    <a href="https://alison.com/topic/learn/158327/learning-outcomes" target="_blank"
                      className="text-gray-800 underline break-all inline-block">https://alison.com/topic/learn/158327/learning-outcomes</a>
                  </li>

                  <li>
                    Alison – Professional Personal Finance Advisor <br />
                    <a href="https://alison.com/topic/learn/158327/learning-outcomes" target="_blank"
                      className="text-gray-800 underline break-all inline-block">https://alison.com/topic/learn/158327/learning-outcomes</a>
                  </li>
                </ul>

                <p>
                  <strong>Ongoing Research:</strong><br />
                  Artificial intelligence in personal finance, trading dashboards, and insurance 
                  automation — ensuring YieldInvest stays ahead of fintech innovation.
                </p>

                <h3 className="text-2xl font-semibold mt-6">Professional Profiles</h3>
                <ul className="list-disc ml-5 space-y-2 text-gray-800">
                  <li><a href="https://www.linkedin.com/in/peter-mark-98b429398?trk=contact-info" target="_blank" className="underline break-all inline-block">LinkedIn Profile</a></li>
                  <li><a href="https://independent.academia.edu/PeterMark67" target="_blank" className="underline break-all inline-block">Academia.edu</a></li>
                  <li><a href="https://medium.com/@petermark.editor" target="_blank" className="underline break-all inline-block">Medium Articles</a></li>
                </ul>

                <p className="text-sm text-white border-t pt-4">
                  <strong>Disclaimer:</strong> All material is for educational purposes only. 
                  Nothing here constitutes personalized financial or insurance advice. 
                  Consult certified professionals for specific guidance.
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
