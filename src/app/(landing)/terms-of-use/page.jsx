import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Link from "next/link";

export const metadata = {
  title: "Terms of Use - TradingFarms: Sustainability, Climate & DIY Insights",
  description:
    "Review the terms of use for TradingFarms. Understand your rights, responsibilities, and the policies guiding your use of our content and resources on green finance, ESG, climate tech, sustainable living, and DIY home improvement.",
};


export default function TermsOfUsePage() {
  return (
    <>
      {/* Navigation bar */}
      <Header />  

      <section className="max-w-5xl mx-auto relative flex flex-col items-center justify-center min-h-screen py-20 px-6 bg-[#2F4F3E] mt-15 rounded-2xl">
        <div className="space-y-10 w-full bg-[#2F4F3E] p-8 rounded-xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white">
              Terms of Use
            </h1>
            <p className="text-green-100 max-w-lg mx-auto md:mt-2 mt-4">
              Please read the following terms and conditions carefully before using our website.
            </p>
          </div>

          <div className="space-y-8 text-lg text-green-100">
            <h2 className="text-2xl font-semibold text-gray-800">1. Introduction</h2>
            <p>
              Welcome to TradingFarms! These Terms of Use govern your use of our website and services. By accessing and using this website, you agree to comply with these terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800">2. Acceptance of Terms</h2>
            <p>
              By using TradingFarms, you agree to be bound by these terms. If you do not agree with any part of these terms, please do not use our website.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800">3. User Obligations</h2>
            <p>
              As a user, you are responsible for complying with all applicable laws and regulations when using our services. You agree not to engage in any illegal or harmful activities.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800">4. Account Security</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for any activities under your account. Please notify us immediately of any unauthorized use.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800">5. Intellectual Property</h2>
            <p>
              All content on TradingFarms, including articles, graphics, logos, and designs, are the property of TradingFarms and protected by intellectual property laws.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800">6. Limitation of Liability</h2>
            <p>
              TradingFarms is not liable for any damages resulting from the use or inability to use our website or services. We are not responsible for any third-party content linked to or referenced on our platform.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800">7. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms of Use at any time. Any changes will be posted on this page with the updated effective date.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800">8. Contact Us</h2>
            <p>
              If you have any questions regarding these Terms of Use, please contact us at{" "}
              <a
                href="mailto:contactyieldnvest@gmail.com"
                className="text-[#2F4F3E] hover:underline"
              >
                contactyieldnvest@gmail.com
              </a>
              . You can also review our <a href="/privacy-policy" className="text-gray-800 hover:underline">Privacy Policy</a> for more information.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800">9. Advertising & Third-Party Cookies</h2>
            <p>
              TradingFarms uses Google AdSense and other third-party advertising partners. 
              These partners may use cookies, including Google’s DART cookie, to display 
              personalized ads based on your visits to our website and other websites. 
              You may opt out of personalized advertising by visiting Google’s Ad Settings page:
              {" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                className="text-gray-800 underline break-all inline-block"
              >
                https://www.google.com/settings/ads
              </a>
              <br/>
              To learn more about how Google uses data, you can read:
              {" "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                className="text-gray-800 underline break-all inline-block"
              >
                https://policies.google.com/technologies/ads
              </a>
            </p>
          </div>

          <div className="text-center mt-10">
            <p className="text-sm text-green-100">
              Last Updated: <span className="font-medium text-green-100">December 2023</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
