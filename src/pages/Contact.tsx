import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-20 py-20">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-20">
            {/* Hero Image */}
            <div className="flex-1 min-w-[400px]">
              <img
                src="https://i.postimg.cc/jSXDZmVN/Depth-6-Frame-0-13.png"
                alt="Water management illustration"
                className="w-full h-68 object-cover rounded-xl"
              />
            </div>

            {/* Hero Content */}
            <div className="flex-1 min-w-[400px] space-y-8">
              <div className="space-y-2">
                <h1 className="font-inter text-4xl lg:text-5xl font-black text-[#121417] leading-[60px] tracking-[-2px]">
                  Let's Talk Water
                </h1>
                <p className="font-inter text-base text-[#121417] leading-6">
                  We're here to help you find the best solutions for your water
                  management needs. Reach out to us today.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="bg-[#1282eb] text-white rounded-xl px-5 py-3 font-inter font-bold text-base hover:bg-[#0066cc] transition-colors">
                  Send a Message
                </button>
                <button className="bg-[#f0f2f5] text-[#121417] rounded-xl px-5 py-3 font-inter font-bold text-base hover:bg-gray-300 transition-colors">
                  Call Our Team
                </button>
              </div>
            </div>
          </div>

          {/* Our Office */}
          <div className="mb-12">
            <h2 className="font-inter text-2xl font-bold text-[#121417] leading-7 mb-5">
              Our Office
            </h2>

            <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="font-inter text-base font-bold text-[#121417] mb-1">
                    Hyderabad HQ
                  </h3>
                  <p className="font-inter text-sm text-[#61758a] leading-[21px] mb-4">
                    123 Tech Park, Financial District, Hyderabad, Telangana
                    500032, India
                  </p>

                  <button className="flex items-center gap-2 bg-[#f0f2f5] rounded-xl px-4 py-2 font-inter text-sm text-[#121417] hover:bg-gray-300 transition-colors">
                    <span>Get Directions</span>
                    <svg
                      width="14"
                      height="12"
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.5855 6.39797L8.52297 11.4605C8.30318 11.6803 7.94682 11.6803 7.72703 11.4605C7.50724 11.2407 7.50724 10.8843 7.72703 10.6645L11.8298 6.5625H0.8125C0.50184 6.5625 0.25 6.31066 0.25 6C0.25 5.68934 0.50184 5.4375 0.8125 5.4375H11.8298L7.72703 1.33547C7.50724 1.11568 7.50724 0.759323 7.72703 0.539531C7.94682 0.319739 8.30318 0.319739 8.52297 0.539531L13.5855 5.60203C13.6911 5.70754 13.7504 5.85071 13.7504 6C13.7504 6.14929 13.6911 6.29246 13.5855 6.39797Z"
                        fill="#121417"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="w-18.5 lg:w-20">
                <img
                  src="https://i.postimg.cc/vH5g6D30/Depth-4-Frame-2-2.png"
                  alt="Office building"
                  className="w-full h-23 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mb-12">
            <div className="w-full h-[553px] bg-[#e8e8e8] rounded-xl flex items-center justify-center">
              <img
                src="https://i.postimg.cc/ry3YQy56/Map-of-Birmingham-County.png"
                alt="Map of Birmingham County"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Drop Us a Message */}
          <div className="mb-12">
            <h2 className="font-inter text-2xl font-bold text-[#121417] leading-7 mb-6">
              Drop Us a Message
            </h2>

            <form className="max-w-lg space-y-4">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full h-14 px-4 bg-[#f0f2f5] border-0 rounded-xl font-inter text-base text-[#61758a] placeholder-[#61758a] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-14 px-4 bg-[#f0f2f5] border-0 rounded-xl font-inter text-base text-[#61758a] placeholder-[#61758a] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone Field */}
              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full h-14 px-4 bg-[#f0f2f5] border-0 rounded-xl font-inter text-base text-[#61758a] placeholder-[#61758a] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Subject Field */}
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full h-14 px-4 bg-[#f0f2f5] border-0 rounded-xl font-inter text-base text-[#61758a] placeholder-[#61758a] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  placeholder="Your message..."
                  rows={6}
                  className="w-full px-4 py-4 bg-[#f0f2f5] border-0 rounded-xl font-inter text-base text-[#61758a] placeholder-[#61758a] focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>

              {/* Request Demo Checkbox */}
              <div className="flex items-start gap-3 py-3">
                <div className="w-5 h-5 border-2 border-[#dbe0e5] rounded flex-shrink-0 mt-0.5"></div>
                <label className="font-inter text-base text-[#121417]">
                  Request a Demo
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-[#1282eb] text-white rounded-xl px-4 py-2 font-inter font-bold text-sm hover:bg-[#0066cc] transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Help Topics */}
          <div className="mb-16">
            <h2 className="font-inter text-2xl font-bold text-[#121417] leading-7 mb-6">
              Help Topics
            </h2>

            <div className="grid md:grid-cols-3 gap-3">
              {/* FAQs */}
              <div className="flex items-center gap-3 bg-white border border-[#dbe0e5] rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.125 14.875C11.125 15.4963 10.6213 16 10 16C9.37868 16 8.875 15.4963 8.875 14.875C8.875 14.2537 9.37868 13.75 10 13.75C10.6213 13.75 11.125 14.2537 11.125 14.875ZM10 4.75C7.93188 4.75 6.25 6.26406 6.25 8.125V8.5C6.25 8.91421 6.58579 9.25 7 9.25C7.41421 9.25 7.75 8.91421 7.75 8.5V8.125C7.75 7.09375 8.75969 6.25 10 6.25C11.2403 6.25 12.25 7.09375 12.25 8.125C12.25 9.15625 11.2403 10 10 10C9.58579 10 9.25 10.3358 9.25 10.75V11.5C9.25 11.9142 9.58579 12.25 10 12.25C10.4142 12.25 10.75 11.9142 10.75 11.5V11.4325C12.46 11.1184 13.75 9.75438 13.75 8.125C13.75 6.26406 12.0681 4.75 10 4.75ZM19.75 10C19.75 15.3848 15.3848 19.75 10 19.75C4.61522 19.75 0.25 15.3848 0.25 10C0.25 4.61522 4.61522 0.25 10 0.25C15.3824 0.255684 19.7443 4.61758 19.75 10ZM18.25 10C18.25 5.44365 14.5563 1.75 10 1.75C5.44365 1.75 1.75 5.44365 1.75 10C1.75 14.5563 5.44365 18.25 10 18.25C14.5542 18.2448 18.2448 14.5542 18.25 10Z"
                    fill="#121417"
                  />
                </svg>
                <span className="font-inter text-base font-bold text-[#121417]">
                  FAQs
                </span>
              </div>

              {/* Support */}
              <div className="flex items-center gap-3 bg-white border border-[#dbe0e5] rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 5.5C7.51472 5.5 5.5 7.51472 5.5 10C5.5 12.4853 7.51472 14.5 10 14.5C12.4853 14.5 14.5 12.4853 14.5 10C14.4974 7.51579 12.4842 5.50258 10 5.5ZM10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10C13 11.6569 11.6569 13 10 13Z"
                    fill="#121417"
                  />
                </svg>
                <span className="font-inter text-base font-bold text-[#121417]">
                  Support
                </span>
              </div>

              {/* Documentation */}
              <div className="flex items-center gap-3 bg-white border border-[#dbe0e5] rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow">
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.0306 5.71938L11.7806 0.469375C11.6399 0.328758 11.449 0.249844 11.25 0.25H2.25C1.42157 0.25 0.75 0.921573 0.75 1.75V18.25C0.75 19.0784 1.42157 19.75 2.25 19.75H15.75C16.5784 19.75 17.25 19.0784 17.25 18.25V6.25C17.2502 6.05103 17.1712 5.86015 17.0306 5.71938ZM12 2.81031L14.6897 5.5H12V2.81031ZM15.75 18.25H2.25V1.75H10.5V6.25C10.5 6.66421 10.8358 7 11.25 7H15.75V18.25Z"
                    fill="#121417"
                  />
                </svg>
                <span className="font-inter text-base font-bold text-[#121417]">
                  Documentation
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white border-t">
          <div className="max-w-6xl mx-auto px-5 py-10">
            <div className="flex justify-center gap-6 mb-6">
              <svg
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-[#61758A] cursor-pointer hover:fill-[#141414]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.1928 3.46313C20.0768 3.18285 19.8033 3.00006 19.5 3H16.6472C15.8359 1.61972 14.3604 0.765791 12.7594 0.75C11.5747 0.734462 10.4339 1.19754 9.59531 2.03438C8.73219 2.88138 8.24717 4.04071 8.25 5.25V5.82094C4.47563 4.82531 1.38844 1.755 1.35563 1.72219C1.15019 1.51493 0.843182 1.44566 0.568648 1.54461C0.294115 1.64356 0.101905 1.89277 0.0759375 2.18344C-0.328125 6.66375 0.973125 9.66187 2.13844 11.3878C2.70664 12.241 3.39786 13.0055 4.18969 13.6566C2.76188 15.3 0.51375 16.1634 0.489375 16.1728C0.274975 16.2531 0.108995 16.4269 0.0386822 16.6448C-0.031631 16.8627 0.00142384 17.1008 0.128438 17.2913C0.19875 17.3962 0.48 17.7647 1.16719 18.1087C2.01656 18.5344 3.13875 18.75 4.5 18.75C11.1253 18.75 16.6612 13.6481 17.2266 7.08375L20.0306 4.28062C20.2451 4.06601 20.3091 3.74335 20.1928 3.46313Z"
                  fill="#61758A"
                />
              </svg>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-[#61758A] cursor-pointer hover:fill-[#141414]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.25 0.25H1.75C0.921573 0.25 0.25 0.921573 0.25 1.75V18.25C0.25 19.0784 0.921573 19.75 1.75 19.75H18.25C19.0784 19.75 19.75 19.0784 19.75 18.25V1.75C19.75 0.921573 19.0784 0.25 18.25 0.25Z"
                  fill="#61758A"
                />
              </svg>
            </div>

            <div className="text-center">
              <p className="font-inter text-base text-[#61758a]">
                © 2024 Blue Meter. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;