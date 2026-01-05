// @flow strict
import { personalData } from "@/utils/data/personal-data";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from "./contact-form";

function ContactSection() {
  return (
    <section id="contact" className="relative py-12 sm:py-16 lg:py-24 text-white">
      
      {/* Side Label (Desktop Only) */}
      <div className="hidden lg:flex flex-col items-center absolute top-28 -right-10">
        <span className="bg-[#1a1443] rotate-90 px-6 py-2 text-lg rounded-md">
          CONTACT
        </span>
        <span className="h-32 w-[2px] bg-[#1a1443]" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info */}
          <div className="lg:w-4/5 mx-auto">
            <div className="flex flex-col gap-4 sm:gap-6 text-center lg:text-left">

              <p className="flex items-center justify-center lg:justify-start gap-3 text-sm sm:text-base md:text-lg">
                <MdAlternateEmail
                  size={34}
                  className="bg-[#8b98a5] p-2 rounded-full text-gray-800
                             transition-all hover:bg-[#16f2b3] hover:scale-110"
                />
                {personalData.email}
              </p>

              <p className="flex items-center justify-center lg:justify-start gap-3 text-sm sm:text-base md:text-lg">
                <IoMdCall
                  size={34}
                  className="bg-[#8b98a5] p-2 rounded-full text-gray-800
                             transition-all hover:bg-[#16f2b3] hover:scale-110"
                />
                {personalData.phone}
              </p>

              <p className="flex items-center justify-center lg:justify-start gap-3 text-sm sm:text-base md:text-lg">
                <CiLocationOn
                  size={34}
                  className="bg-[#8b98a5] p-2 rounded-full text-gray-800
                             transition-all hover:bg-[#16f2b3] hover:scale-110"
                />
                {personalData.address}
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-8 sm:mt-12 flex justify-center lg:justify-start gap-5 sm:gap-8">
              {personalData.github && (
                <a href={personalData.github} target="_blank" rel="noopener noreferrer">
                  <IoLogoGithub
                    size={42}
                    className="bg-[#8b98a5] p-3 rounded-full text-gray-800
                               transition-all hover:bg-[#16f2b3] hover:scale-110"
                  />
                </a>
              )}

              {personalData.linkedIn && (
                <a href={personalData.linkedIn} target="_blank" rel="noopener noreferrer">
                  <BiLogoLinkedin
                    size={42}
                    className="bg-[#8b98a5] p-3 rounded-full text-gray-800
                               transition-all hover:bg-[#16f2b3] hover:scale-110"
                  />
                </a>
              )}

              {personalData.twitter && (
                <a href={personalData.twitter} target="_blank" rel="noopener noreferrer">
                  <FaXTwitter
                    size={42}
                    className="bg-[#8b98a5] p-3 rounded-full text-gray-800
                               transition-all hover:bg-[#16f2b3] hover:scale-110"
                  />
                </a>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
