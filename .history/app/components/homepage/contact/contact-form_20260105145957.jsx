"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    }

    try {
      setIsLoading(true);
      await axios.post(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/contact`,
        userInput
      );

      toast.success("Message sent successfully!");
      setUserInput({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Heading */}
        <p className="text-center font-semibold mb-3 text-[#16f2b3] text-base sm:text-lg uppercase">
          Contact With Me
        </p>

        <p className="text-center text-sm sm:text-base text-[#d3d8e8] mb-8">
          If you have any questions or opportunities, feel free to reach out.
        </p>

        {/* Form Card */}
        <div className="rounded-xl border border-[#464c6a] bg-[#0f162e] p-4 sm:p-6 lg:p-8 text-white">
          <div className="flex flex-col gap-5">

            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm sm:text-base">Your Name</label>
              <input
                className="bg-[#10172d] border rounded-md border-[#353a52]
                           focus:border-[#16f2b3] outline-none transition-all
                           px-3 py-2.5 sm:py-3 text-sm sm:text-base"
                type="text"
                maxLength="100"
                value={userInput.name}
                onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
                onBlur={checkRequired}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm sm:text-base">Your Email</label>
              <input
                className="bg-[#10172d] border rounded-md border-[#353a52]
                           focus:border-[#16f2b3] outline-none transition-all
                           px-3 py-2.5 sm:py-3 text-sm sm:text-base"
                type="email"
                maxLength="100"
                value={userInput.email}
                onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
                onBlur={() => {
                  checkRequired();
                  setError({ ...error, email: !isValidEmail(userInput.email) });
                }}
              />
              {error.email && (
                <p className="text-xs sm:text-sm text-red-400">
                  Please provide a valid email!
                </p>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-sm sm:text-base">Your Message</label>
              <textarea
                className="bg-[#10172d] border rounded-md border-[#353a52]
                           focus:border-[#16f2b3] outline-none transition-all
                           px-3 py-2.5 sm:py-3 text-sm sm:text-base"
                rows="4"
                maxLength="500"
                value={userInput.message}
                onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
                onBlur={checkRequired}
              />
            </div>

            {/* Error */}
            {error.required && (
              <p className="text-xs sm:text-sm text-red-400 text-center">
                All fields are required!
              </p>
            )}

            {/* Button */}
            <div className="flex justify-center pt-2">
              <button
                onClick={handleSendMail}
                disabled={isLoading}
                className="flex items-center gap-2 rounded-full
                           bg-gradient-to-r from-pink-500 to-violet-600
                           px-6 sm:px-10 py-3 text-xs sm:text-sm font-semibold
                           uppercase tracking-wider text-white
                           transition-all hover:gap-3 disabled:opacity-60"
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <TbMailForward size={18} />
                  </>
                )}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
