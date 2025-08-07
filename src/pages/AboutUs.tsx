import Layout from "@/components/Layout";

const AboutUs = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-20 py-20">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-20">
            {/* Hero Content */}
            <div className="flex-1 min-w-[400px] space-y-8">
              <div className="space-y-2">
                <img
                    src="https://i.postimg.cc/YCcZq2SN/Depth-6-Frame-0-14.png"
                    alt="Community Smart Meter Setup"
                    className="w-full h-72 object-cover rounded-xl mb-6"
                  />
               <p className="font-inter text-base font-bold text-[#141414] leading-6">
  Transforming water management with innovative technology for a sustainable future.
</p>
              </div>
            </div>

            
          </div>

          {/* How Blue Meter Began */}
          <div className="mb-16">
            <h2 className="font-inter text-2xl font-bold text-[#141414] leading-7 mb-5">
              How Blue Meter Began
            </h2>
            <p className="font-inter text-base text-[#141414] leading-6 mb-8">
              Blue Meter was founded in 2018 by a team of engineers and
              environmentalists passionate about solving the global water
              crisis. Recognizing the inefficiencies in traditional water
              management systems, they set out to create a smart, connected
              platform that empowers communities and businesses to monitor and
              manage their water resources effectively.
            </p>

            {/* Community Setup Card */}
            <div className="bg-white border border-[#e5e7eb] rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
              <div className="relative">
                {/* Background gradient */}
                <div className="absolute top-0 left-32 right-32 h-36 bg-gradient-to-r from-[#dbeafe] via-white to-[#e0f2fe] rounded-3xl"></div>

                {/* Main content */}
                <div className="relative">
                  <img
                    src="https://i.postimg.cc/SxM4Dtnd/img-2.png"
                    alt="Community Smart Meter Setup"
                    className="w-full h-72 object-cover rounded-xl mb-6"
                  />

                  <div className="text-center space-y-4">
                    <h3 className="font-inter text-lg font-medium text-[#141414]">
                      Community Smart Meter Setup
                    </h3>
                    <p className="font-inter text-sm text-[#757575] max-w-2xl mx-auto">
                      Smart meters on buildings sync water data to the cloud,
                      accessible via mobile and desktop dashboards for users.
                    </p>

                    {/* Feature Tags */}
                    <div className="flex justify-center gap-4 mt-6">
                      <div className="flex items-center gap-2 bg-[#eff6ff] rounded-xl px-3 py-1">
                        <svg
                          width="9"
                          height="12"
                          viewBox="0 0 9 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.125 0C0.503906 0 0 0.503906 0 1.125V10.875C0 11.4961 0.503906 12 1.125 12H3.375V10.125C3.375 9.50391 3.87891 9 4.5 9C5.12109 9 5.625 9.50391 5.625 10.125V12H7.875C8.49609 12 9 11.4961 9 10.875V1.125C9 0.503906 8.49609 0 7.875 0H1.125Z"
                            fill="#0EA5E9"
                          />
                        </svg>
                        <span className="font-poppins text-xs text-[#0ea5e9]">
                          Smart Meters
                        </span>
                      </div>

                      <div className="flex items-center gap-2 bg-[#eff6ff] rounded-xl px-3 py-1">
                        <svg
                          width="10"
                          height="12"
                          viewBox="0 0 10 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.29688 1.5C1.29688 0.672656 1.96953 0 2.79688 0H8.04688C8.87422 0 9.54688 0.672656 9.54688 1.5V10.5C9.54688 11.3273 8.87422 12 8.04688 12H2.79688C1.96953 12 1.29688 11.3273 1.29688 10.5V1.5Z"
                            fill="#0EA5E9"
                          />
                        </svg>
                        <span className="font-poppins text-xs text-[#0ea5e9]">
                          Multi-Platform
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Mission, Vision, Values */}
          <div className="mb-16">
            <h2 className="font-inter text-2xl font-bold text-[#141414] leading-7 mb-8">
              Our Mission, Vision, Values
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Mission */}
              <div className="space-y-4">
                <div className="w-6 h-6">
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
                      d="M18.8003 5.79625C20.9559 10.3046 19.3577 15.7129 15.0979 18.3255C10.838 20.938 5.29291 19.9107 2.25168 15.9455C-0.789558 11.9803 -0.344225 6.35844 3.28337 2.9215C6.91096 -0.515443 12.5486 -0.656918 16.3441 2.59375L18.4694 0.4675C18.7624 0.174444 19.2376 0.174444 19.5306 0.4675C19.8237 0.760556 19.8237 1.23569 19.5306 1.52875L10.5306 10.5288C10.2376 10.8218 9.76243 10.8218 9.46937 10.5288C9.17632 10.2357 9.17632 9.76056 9.46937 9.4675L12.0681 6.86875C10.6182 5.90981 8.6993 6.07307 7.4322 7.26318C6.1651 8.45328 5.88202 10.3582 6.7483 11.8653C7.61457 13.3724 9.40306 14.0866 11.0692 13.5908C12.7353 13.0949 13.8422 11.519 13.7434 9.78344C13.7201 9.36922 14.037 9.01455 14.4513 8.99125C14.8655 8.96795 15.2201 9.28485 15.2434 9.69906C15.3843 12.1572 13.798 14.383 11.4284 15.0519C9.0589 15.7209 6.5428 14.6533 5.37739 12.4844C4.21198 10.3155 4.71038 7.62811 6.576 6.02137C8.44163 4.41462 11.1732 4.32024 13.1453 5.79437L15.2781 3.66156C12.0414 0.974274 7.30002 1.15714 4.27992 4.08575C1.25983 7.01435 0.931232 11.7479 3.51771 15.0657C6.10419 18.3835 10.7749 19.2198 14.3518 17.0055C17.9288 14.7912 19.2629 10.2377 17.4466 6.44312C17.2679 6.0693 17.4262 5.62144 17.8 5.44281C18.1738 5.26418 18.6217 5.42242 18.8003 5.79625Z"
                      fill="#121417"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-inter text-base font-bold text-[#141414] mb-2">
                    Our Mission
                  </h3>
                  <p className="font-inter text-sm text-[#757575] leading-[21px]">
                    To empower communities and businesses with smart water
                    management solutions for a sustainable future.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="space-y-4">
                <div className="w-6 h-6">
                  <svg
                    width="24"
                    height="16"
                    viewBox="0 0 24 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.1853 7.69625C23.1525 7.62219 22.3584 5.86062 20.5931 4.09531C18.2409 1.74312 15.27 0.5 12 0.5C8.73 0.5 5.75906 1.74312 3.40687 4.09531C1.64156 5.86062 0.84375 7.625 0.814687 7.69625C0.728449 7.89022 0.728449 8.11165 0.814687 8.30562C0.8475 8.37969 1.64156 10.1403 3.40687 11.9056C5.75906 14.2569 8.73 15.5 12 15.5C15.27 15.5 18.2409 14.2569 20.5931 11.9056C22.3584 10.1403 23.1525 8.37969 23.1853 8.30562C23.2716 8.11165 23.2716 7.89022 23.1853 7.69625Z"
                      fill="#121417"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-inter text-base font-bold text-[#141414] mb-2">
                    Our Vision
                  </h3>
                  <p className="font-inter text-sm text-[#757575] leading-[21px]">
                    To be the leading provider of innovative water technology,
                    driving positive change in water conservation and access.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="space-y-4">
                <div className="w-6 h-6">
                  <svg
                    width="24"
                    height="17"
                    viewBox="0 0 24 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.2275 16.4319C11.1441 16.7657 10.8441 16.9999 10.5 17C10.4368 17.0003 10.3738 16.9927 10.3125 16.9775L7.3125 16.2275C7.22898 16.2065 7.1497 16.1713 7.07812 16.1234L4.82812 14.6234C4.48355 14.3935 4.39058 13.9279 4.62047 13.5833C4.85036 13.2387 5.31605 13.1457 5.66062 13.3756L7.80188 14.8034L10.6763 15.5225C10.8702 15.5695 11.0374 15.6919 11.1409 15.8626C11.2444 16.0333 11.2755 16.2382 11.2275 16.4319Z"
                      fill="#121417"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-inter text-base font-bold text-[#141414] mb-2">
                    Our Values
                  </h3>
                  <p className="font-inter text-sm text-[#757575] leading-[21px]">
                    Innovation, Sustainability, Integrity, Collaboration,
                    Customer Focus
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Meet the Watermakers */}
          <div className="mb-16">
            <h2 className="font-inter text-2xl font-bold text-[#141414] leading-7 mb-8">
              Meet the Watermakers
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="text-center space-y-4">
                <img
                  src="https://i.postimg.cc/cHm0fgvN/Depth-8-Frame-0.png"
                  alt="Liam Carter"
                  className="w-32 h-32 rounded-full mx-auto"
                />
                <div>
                  <h3 className="font-inter text-base font-medium text-[#141414]">
                    Liam Carter
                  </h3>
                  <p className="font-inter text-sm text-[#61758a]">CEO</p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="text-center space-y-4">
                <img
                  src="https://i.postimg.cc/154sNzPL/Depth-8-Frame-0-1.png"
                  alt="Isabella Bennett"
                  className="w-32 h-32 rounded-full mx-auto"
                />
                <div>
                  <h3 className="font-inter text-base font-medium text-[#141414]">
                    Isabella Bennett
                  </h3>
                  <p className="font-inter text-sm text-[#61758a]">
                    Head of Engineering
                  </p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="text-center space-y-4">
                <img
                  src="https://i.postimg.cc/rp2kbCWk/Depth-8-Frame-0-2.png"
                  alt="Owen Thompson"
                  className="w-32 h-32 rounded-full mx-auto"
                />
                <div>
                  <h3 className="font-inter text-base font-medium text-[#141414]">
                    Owen Thompson
                  </h3>
                  <p className="font-inter text-sm text-[#61758a]">
                    Head of Product
                  </p>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="text-center space-y-4">
                <img
                  src="https://i.postimg.cc/XJQ6pRPj/Depth-8-Frame-0-3.png"
                  alt="Chloe Davis"
                  className="w-32 h-32 rounded-full mx-auto"
                />
                <div>
                  <h3 className="font-inter text-base font-medium text-[#141414]">
                    Chloe Davis
                  </h3>
                  <p className="font-inter text-sm text-[#61758a]">
                    Head of Marketing
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* From Startup to Smart City Partner */}
          <div className="mb-16">
            <h2 className="font-inter text-2xl font-bold text-[#141414] leading-7 mb-8">
              From Startup to Smart City Partner
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="font-inter text-sm text-[#757575] mb-2">
                  Meters Installed
                </h3>
                <p className="font-inter text-2xl font-bold text-[#121417]">
                  150,000+
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-inter text-sm text-[#757575] mb-2">
                  Water Monitored
                </h3>
                <p className="font-inter text-2xl font-bold text-[#121417]">
                  500M+ Gallons
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-inter text-sm text-[#757575] mb-2">
                  Communities Served
                </h3>
                <p className="font-inter text-2xl font-bold text-[#121417]">
                  500+
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-inter text-sm text-[#757575] mb-2">
                  Water Savings
                </h3>
                <p className="font-inter text-2xl font-bold text-[#121417]">
                  20%
                </p>
              </div>
            </div>
          </div>

          {/* Who We Serve */}
          <div className="mb-16">
            <h2 className="font-inter text-2xl font-bold text-[#141414] leading-7 mb-8">
              Who We Serve
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <img
                src="https://i.postimg.cc/kgzQdDX9/Depth-7-Frame-0-7.png"
                alt="Municipalities"
                className="w-full h-38 object-cover rounded-lg"
              />
              <img
                src="https://i.postimg.cc/tTHFYfxM/Depth-6-Frame-1-16.png"
                alt="Real Estate"
                className="w-full h-38 object-cover rounded-lg"
              />
              <img
                src="https://i.postimg.cc/NFdXCjP3/Depth-6-Frame-2-1.png"
                alt="Water Utilities"
                className="w-full h-38 object-cover rounded-lg"
              />
              <img
                src="https://i.postimg.cc/kXh8xDS8/Depth-6-Frame-3.png"
                alt="Agriculture"
                className="w-full h-38 object-cover rounded-lg"
              />
            </div>

            <p className="font-inter text-base text-[#141414] mt-6 text-center">
              Trusted by municipalities, real estate developers, water
              utilities, and agricultural businesses to optimize water usage and
              reduce waste.
            </p>
          </div>

          {/* Platform Demo */}
<div className="mb-16">
  <h2 className="font-inter text-2xl font-bold text-[#141414] leading-7 mb-8">
    Platform Demo
  </h2>
  <div className="rounded-xl overflow-hidden">
    <img
      src="https://i.postimg.cc/MTxjWBkk/Depth-5-Frame-0-1.png"
      alt="Platform Demo"
      className="w-full h-auto object-cover"
    />
  </div>
</div>

{/* Join the Movement */}
<div className="mb-16">
  <div className="text-center space-y-8 py-20">
    <div className="space-y-4">
      <h2 className="font-inter text-3xl font-bold text-[#141414] leading-[45px] tracking-[-1px] max-w-[720px] mx-auto">
        Join the Movement
      </h2>
      <p className="font-inter text-base text-[#141414] leading-6">
        Interested in joining our team or partnering with us? We're
        always looking for talented individuals and organizations to
        collaborate with.
      </p>
    </div>

    <button className="bg-[#1282eb] text-white rounded-xl px-6 py-3 font-inter font-bold text-base hover:bg-[#0066cc] transition-colors">
      Inquire About Opportunities
    </button>
  </div>
</div>
          {/* Get in Touch */}
          <div className="text-center space-y-8 py-20">
            <div className="space-y-4">
              <h2 className="font-inter text-3xl font-bold text-[#141414] leading-[45px] tracking-[-1px] max-w-[720px] mx-auto">
                Get in Touch
              </h2>
              <p className="font-inter text-base text-[#141414] leading-6">
                For any inquiries, please email us at contact@bluemeter.com or
                visit our contact page.
              </p>
            </div>

            <button className="bg-[#1282eb] text-white rounded-xl px-6 py-3 font-inter font-bold text-base hover:bg-[#0066cc] transition-colors">
              Contact Us
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white border-t">
          <div className="max-w-6xl mx-auto px-5 py-10">
            <div className="flex flex-wrap justify-center gap-8 mb-6">
              <a
                href="#"
                className="font-inter text-base text-[#61758a] text-center hover:text-[#141414] transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="font-inter text-base text-[#61758a] text-center hover:text-[#141414] transition-colors"
              >
                Products
              </a>
              <a
                href="#"
                className="font-inter text-base text-[#61758a] text-center hover:text-[#141414] transition-colors"
              >
                Solutions
              </a>
              <a
                href="#"
                className="font-inter text-base text-[#61758a] text-center hover:text-[#141414] transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="font-inter text-base text-[#61758a] text-center hover:text-[#141414] transition-colors"
              >
                Resources
              </a>
              <a
                href="#"
                className="font-inter text-base text-[#61758a] text-center hover:text-[#141414] transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="font-inter text-base text-[#61758a] text-center hover:text-[#141414] transition-colors"
              >
                Contact Us
              </a>
            </div>

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
                © 2023 Blue Meter. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;