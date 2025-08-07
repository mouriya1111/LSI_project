import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Commercial = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-40 py-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Hero Image */}
            <div className="w-full lg:min-w-[400px] h-[316px] rounded-xl overflow-hidden">
              <img
                src="https://i.postimg.cc/NGXGMS0t/Depth-6-Frame-0-11.png"
                alt="Commercial building with modern architecture"
                className="w-full h-full object-cover bg-[#7FB3D3]"
              />
            </div>

            {/* Hero Content */}
            <div className="w-full lg:min-w-[400px] flex flex-col justify-center gap-8">
              <div className="space-y-2">
                <h1 className="font-inter font-black text-2xl lg:text-4xl text-[#121417] leading-tight lg:leading-[60px] tracking-[-1px] lg:tracking-[0px] w-full lg:w-[434px]">
                  Smarter Water for Smarter Businesses
                </h1>
                <p className="font-inter font-normal text-base text-[#121417] leading-6 w-full lg:w-[434px]">
                  Monitor, manage, and reduce water costs with our advanced
                  metering and analytics platform.
                </p>
              </div>
              <div className="w-full lg:w-[434px]">
                <Button className="h-12 px-5 bg-[#DBE8F2] hover:bg-[#DBE8F2]/80 text-[#121417] font-inter font-bold text-base rounded-xl">
                  Explore Plans
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Plans Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-40">
          <div className="py-5 px-4">
            <h2 className="font-inter font-bold text-[22px] text-[#121417] leading-7">
              Commercial Plans
            </h2>
          </div>

          <div className="px-4 pb-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {/* Basic Business Plan */}
              <div className="p-6 bg-white rounded-xl border border-[#DEE0E3] space-y-4">
                <div className="space-y-1">
                  <h3 className="font-inter font-bold text-base text-[#121417] leading-5">
                    Basic Business
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="font-inter font-black text-3xl text-[#121417] leading-[45px] tracking-[-1px]">
                      ₹8,250
                    </span>
                    <span className="font-inter font-bold text-base text-[#121417] leading-5">
                      /month
                    </span>
                  </div>
                </div>

                <Button className="w-full h-10 bg-[#F2F2F5] hover:bg-[#F2F2F5]/80 text-[#121417] font-inter font-bold text-sm rounded-xl">
                  Choose Plan
                </Button>

                <div className="space-y-2">
                  {[
                    "Real-time water usage monitoring",
                    "Automated leak detection",
                    "Basic reporting and analytics",
                    "Mobile app access",
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                        <svg
                          width="17"
                          height="12"
                          viewBox="0 0 17 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.9422 1.06719L5.94219 11.0672C5.82496 11.1845 5.66588 11.2505 5.5 11.2505C5.33412 11.2505 5.17504 11.1845 5.05781 11.0672L0.682812 6.69219C0.438599 6.44797 0.438599 6.05203 0.682812 5.80781C0.927026 5.5636 1.32297 5.5636 1.56719 5.80781L5.5 9.74141L15.0578 0.182813C15.302 -0.0614009 15.698 -0.0614009 15.9422 0.182813C16.1864 0.427026 16.1864 0.822974 15.9422 1.06719Z"
                            fill="#121417"
                          />
                        </svg>
                      </div>
                      <span className="font-inter text-[13px] text-[#121417] leading-5">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pro Commercial Plan */}
              <div className="p-6 bg-white rounded-xl border border-[#DEE0E3] space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-inter font-bold text-base text-[#121417] leading-5">
                      Pro Commercial
                    </h3>
                    <span className="px-3 py-0.5 bg-[#DBE8F2] text-[#121417] font-inter font-medium text-xs rounded">
                      Recommended
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-inter font-black text-3xl text-[#121417] leading-[45px] tracking-[-1px]">
                      ₹24,750
                    </span>
                    <span className="font-inter font-bold text-base text-[#121417] leading-5">
                      /month
                    </span>
                  </div>
                </div>

                <Button className="w-full h-10 bg-[#F2F2F5] hover:bg-[#F2F2F5]/80 text-[#121417] font-inter font-bold text-sm rounded-xl">
                  Choose Plan
                </Button>

                <div className="space-y-2">
                  {[
                    "All Basic features",
                    "Advanced analytics and reporting",
                    "Customizable alerts and notifications",
                    "Dedicated account manager",
                    "Integration with existing systems",
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                        <svg
                          width="16"
                          height="12"
                          viewBox="0 0 16 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.6088 1.06719L5.60881 11.0672C5.49158 11.1845 5.33251 11.2505 5.16663 11.2505C5.00075 11.2505 4.84167 11.1845 4.72444 11.0672L0.349438 6.69219C0.105225 6.44797 0.105225 6.05203 0.349438 5.80781C0.593652 5.5636 0.9896 5.5636 1.23381 5.80781L5.16663 9.74141L14.7244 0.182813C14.9687 -0.0614009 15.3646 -0.0614009 15.6088 0.182813C15.853 0.427026 15.853 0.822974 15.6088 1.06719Z"
                            fill="#121417"
                          />
                        </svg>
                      </div>
                      <span className="font-inter text-[13px] text-[#121417] leading-5">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enterprise Custom Plan */}
              <div className="p-6 bg-white rounded-xl border border-[#DEE0E3] space-y-4">
                <div className="space-y-1">
                  <h3 className="font-inter font-bold text-base text-[#121417] leading-5">
                    Enterprise Custom
                  </h3>
                  <span className="font-inter font-black text-3xl text-[#121417] leading-[45px] tracking-[-1px]">
                    Custom
                  </span>
                </div>

                <Button className="w-full h-10 bg-[#F2F2F5] hover:bg-[#F2F2F5]/80 text-[#121417] font-inter font-bold text-sm rounded-xl">
                  Contact Sales
                </Button>

                <div className="space-y-2">
                  {[
                    "All Pro features",
                    "Tailored solutions for large enterprises",
                    "On-site installation and support",
                    "Priority customer service",
                    "Custom integrations and APIs",
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                        <svg
                          width="17"
                          height="12"
                          viewBox="0 0 17 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.2756 1.06719L6.27556 11.0672C6.15833 11.1845 5.99925 11.2505 5.83337 11.2505C5.66749 11.2505 5.50842 11.1845 5.39119 11.0672L1.01619 6.69219C0.771973 6.44797 0.771973 6.05203 1.01619 5.80781C1.2604 5.5636 1.65635 5.5636 1.90056 5.80781L5.83337 9.74141L15.3912 0.182813C15.6354 -0.0614009 16.0313 -0.0614009 16.2756 0.182813C16.5198 0.427026 16.5198 0.822974 16.2756 1.06719Z"
                            fill="#121417"
                          />
                        </svg>
                      </div>
                      <span className="font-inter text-[13px] text-[#121417] leading-5">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Water Usage Analytics Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-40">
          <div className="py-5 px-4">
            <h2 className="font-inter font-bold text-[22px] text-[#121417] leading-7">
              Water Usage Analytics
            </h2>
          </div>

          <div className="px-4">
            <div className="flex flex-col lg:flex-row items-center rounded-xl">
              <div className="w-full lg:flex-1 h-64 bg-[#2C3E50] rounded-xl">
                <img
                src="https://i.postimg.cc/VvXzVrhv/Depth-6-Frame-0-12.png"
                alt="Commercial building with modern architecture"

              />
              </div>
              <div className="w-full lg:flex-1 lg:min-w-[288px] p-4 flex flex-col justify-center gap-1">
                <h3 className="font-inter font-bold text-lg text-[#121417] leading-[23px]">
                  Gain Insights into Your Water Consumption
                </h3>
                <p className="font-inter text-base text-[#6B7582] leading-6 lg:w-[344px]">
                  Track water usage patterns, identify inefficiencies, and
                  manage alerts for leaks and unusual consumption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Use Case Examples */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-40">
          <div className="py-5 px-4">
            <h2 className="font-inter font-bold text-[22px] text-[#121417] leading-7">
              Industry Use Case Examples
            </h2>
          </div>

          <div className="px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {/* Commercial Real Estate */}
              <div className="space-y-4">
                <div className="h-[169px]  rounded-xl">
                  <img
                src="https://i.postimg.cc/VvXzVrhv/Depth-6-Frame-0-12.png"
                alt="Commercial real estate"

              />
                </div>
                <div>
                  <h3 className="font-inter font-medium text-base text-[#121417] leading-6">
                    Commercial Real Estate
                  </h3>
                  <p className="font-inter text-sm text-[#6B7582] leading-[21px]">
                    Reduced water costs by 20% through leak detection and
                    efficient usage monitoring.
                  </p>
                </div>
              </div>

              {/* Industrial Manufacturing */}
              <div className="space-y-4">
                <div className="h-[169px]  rounded-xl">
                  <img
                src="https://i.postimg.cc/mk3GwxcF/Depth-7-Frame-0-6.png
                "
                alt="Commercial building with modern architecture"

              />
                </div>
                <div>
                  <h3 className="font-inter font-medium text-base text-[#121417] leading-6">
                    Industrial Manufacturing
                  </h3>
                  <p className="font-inter text-sm text-[#6B7582] leading-[21px]">
                    Optimized water consumption in manufacturing processes,
                    saving 15% on water bills.
                  </p>
                </div>
              </div>

              {/* Agriculture */}
              <div className="space-y-4">
                <div className="h-[169px]  rounded-xl">
                   <img
                src="https://i.postimg.cc/sf5yyWnD/image-22-1.png"
                alt="Commercial building with modern architecture"

              />
                </div>
                <div>
                  <h3 className="font-inter font-medium text-base text-[#121417] leading-6">
                    Agriculture
                  </h3>
                  <p className="font-inter text-sm text-[#6B7582] leading-[21px]">
                    Improved irrigation efficiency by 25% with precise water
                    management and real-time data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Blue Meter for Business Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-40">
          <div className="py-5 px-4">
            <h2 className="font-inter font-bold text-[22px] text-[#121417] leading-7">
              Why Blue Meter for Business?
            </h2>
          </div>

          <div className="px-4 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {/* Real-time Monitoring */}
              <div className="p-4 bg-white rounded-lg border border-[#DEE0E3] space-y-3">
                <div className="w-6 h-6">
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.75 16.5C19.75 16.9142 19.4142 17.25 19 17.25H1C0.585786 17.25 0.25 16.9142 0.25 16.5V1.5C0.25 1.08579 0.585786 0.75 1 0.75C1.41421 0.75 1.75 1.08579 1.75 1.5V10.3472L6.50594 6.1875C6.77266 5.95401 7.16644 5.93915 7.45 6.15187L12.9634 10.2872L18.5059 5.4375C18.704 5.24149 18.9943 5.1714 19.2599 5.2555C19.5256 5.33959 19.7227 5.56402 19.7718 5.83828C19.8209 6.11254 19.714 6.39143 19.4941 6.5625L13.4941 11.8125C13.2273 12.046 12.8336 12.0608 12.55 11.8481L7.03656 7.71469L1.75 12.3403V15.75H19C19.4142 15.75 19.75 16.0858 19.75 16.5Z"
                      fill="#121417"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-inter font-bold text-base text-[#121417] leading-5">
                    Real-time Monitoring
                  </h3>
                  <p className="font-inter text-sm text-[#6B7582] leading-[21px]">
                    Track water usage in real-time from any device.
                  </p>
                </div>
              </div>

              {/* Automated Alerts */}
              <div className="p-4 bg-white rounded-lg border border-[#DEE0E3] space-y-3">
                <div className="w-6 h-6">
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
                      d="M17.7938 14.4944C17.2734 13.5981 16.5 11.0622 16.5 7.75C16.5 3.60786 13.1421 0.25 9 0.25C4.85786 0.25 1.5 3.60786 1.5 7.75C1.5 11.0631 0.725625 13.5981 0.205312 14.4944C-0.065134 14.9581 -0.067101 15.5311 0.200155 15.9967C0.467411 16.4623 0.963134 16.7496 1.5 16.75H5.32594C5.68267 18.4956 7.21835 19.7492 9 19.7492C10.7816 19.7492 12.3173 18.4956 12.6741 16.75H16.5C17.0367 16.7493 17.5321 16.4619 17.7991 15.9963C18.0662 15.5308 18.0641 14.958 17.7938 14.4944Z"
                      fill="#121417"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-inter font-bold text-base text-[#121417] leading-5">
                    Automated Alerts
                  </h3>
                  <p className="font-inter text-sm text-[#6B7582] leading-[21px]">
                    Receive instant notifications for leaks, unusual
                    consumption, and potential issues.
                  </p>
                </div>
              </div>

              {/* Enhanced Security */}
              <div className="p-4 bg-white rounded-lg border border-[#DEE0E3] space-y-3">
                <div className="w-6 h-6">
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
                      d="M16.5 0.75H1.5C0.671573 0.75 0 1.42157 0 2.25V7.76062C0 16.1616 7.10812 18.9487 8.53125 19.4222C8.8352 19.5256 9.1648 19.5256 9.46875 19.4222C10.8938 18.9487 18 16.1616 18 7.76062V2.25C18 1.42157 17.3284 0.75 16.5 0.75Z"
                      fill="#121417"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-inter font-bold text-base text-[#121417] leading-5">
                    Enhanced Security
                  </h3>
                  <p className="font-inter text-sm text-[#6B7582] leading-[21px]">
                    Secure and encrypted data transmission to protect your
                    information.
                  </p>
                </div>
              </div>

              {/* Multi-User Access */}
              <div className="p-4 bg-white rounded-lg border border-[#DEE0E3] space-y-3">
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
                      d="M10.9922 10.805C13.0561 9.43099 13.9769 6.86767 13.2592 4.49441C12.5414 2.12114 10.3544 0.497718 7.875 0.497718C5.39558 0.497718 3.20857 2.12114 2.49084 4.49441C1.7731 6.86767 2.69393 9.43099 4.75781 10.805C2.93952 11.4752 1.38666 12.7153 0.330938 14.3403"
                      fill="#121417"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-inter font-bold text-base text-[#121417] leading-5">
                    Multi-User Access
                  </h3>
                  <p className="font-inter text-sm text-[#6B7582] leading-[21px]">
                    Manage access for multiple users within your organization.
                  </p>
                </div>
              </div>

              {/* Historical Data */}
              <div className="p-4 bg-white rounded-lg border border-[#DEE0E3] space-y-3">
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
                      d="M10 0.25C4.61522 0.25 0.25 4.61522 0.25 10C0.25 15.3848 4.61522 19.75 10 19.75C15.3848 19.75 19.75 15.3848 19.75 10C19.7443 4.61758 15.3824 0.255684 10 0.25Z"
                      fill="#121417"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-inter font-bold text-base text-[#121417] leading-5">
                    Historical Data
                  </h3>
                  <p className="font-inter text-sm text-[#6B7582] leading-[21px]">
                    Analyze historical water usage data to identify trends and
                    optimize consumption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-40">
          <div className="py-5 px-4">
            <h2 className="font-inter font-bold text-[22px] text-[#121417] leading-7">
              Testimonials
            </h2>
          </div>

          <div className="px-4">
            <div className="flex flex-col lg:flex-row justify-between items-start rounded-xl gap-6">
              <div className="w-full lg:w-[608px] space-y-1">
                <p className="font-inter font-bold text-base text-[#121417] leading-5">
                  Blue Meter has revolutionized our water management. We've seen
                  significant cost savings and improved efficiency.
                </p>
                <p className="font-inter text-sm text-[#6B7582] leading-[21px]">
                  Priya Sharma, Property Manager at Green Spaces Inc.
                </p>
              </div>
              <div className="w-full lg:flex-1 h-[171px] rounded-xl">
                 <img
                src="https://i.postimg.cc/wjjdhG97/Depth-6-Frame-1-15.png"
                alt="Commercial building with modern architecture"
              />
              </div>
            </div>
            
          </div>

          <div className="px-4 py-3">
            <p className="text-center font-inter text-sm text-[#6B7582] leading-[21px]">
              Did you know? Industrial water waste accounts for over 20% of
              total water consumption globally.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-10 py-20">
          <div className="text-center space-y-8">
            <div className="space-y-2">
              <h2 className="font-inter font-black text-2xl lg:text-4xl text-[#121417] leading-tight tracking-[0px] max-w-[720px] mx-auto">
                Ready to Optimize Your Water Management?
              </h2>
              <p className="font-inter text-base text-[#121417] leading-6">
                Get started with Blue Meter today and take control of your water
                costs.
              </p>
            </div>
            <div className="flex justify-center">
              <Button className="h-12 px-5 bg-[#F2F2F5] hover:bg-[#F2F2F5]/80 text-[#121417] font-inter font-bold text-base rounded-xl">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="space-y-6">
            {/* Footer Links */}
            <div className="flex flex-wrap justify-center gap-6 text-center">
              {[
                "Product",
                "Solutions",
                "Pricing",
                "Resources",
                "About Us",
                "Contact Us",
                "Privacy Policy",
                "Terms of Service",
              ].map((item) => (
                <div key={item} className="w-40 min-w-40">
                  <span className="font-inter text-base text-[#6B7582] leading-6">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-4">
              <div className="w-6 h-6">
                <svg
                  width="21"
                  height="19"
                  viewBox="0 0 21 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.1928 3.46313C20.0768 3.18285 19.8033 3.00006 19.5 3H16.6472C15.8359 1.61972 14.3604 0.765791 12.7594 0.75C11.5747 0.734462 10.4339 1.19754 9.59531 2.03438C8.73219 2.88138 8.24717 4.04071 8.25 5.25V5.82094C4.47563 4.82531 1.38844 1.755 1.35563 1.72219C1.15019 1.51493 0.843182 1.44566 0.568648 1.54461C0.294115 1.64356 0.101905 1.89277 0.0759375 2.18344C-0.328125 6.66375 0.973125 9.66187 2.13844 11.3878C2.70664 12.241 3.39786 13.0055 4.18969 13.6566C2.76188 15.3 0.51375 16.1634 0.489375 16.1728C0.274975 16.2531 0.108995 16.4269 0.0386822 16.6448C-0.031631 16.8627 0.00142384 17.1008 0.128438 17.2913C0.19875 17.3962 0.48 17.7647 1.16719 18.1087C2.01656 18.5344 3.13875 18.75 4.5 18.75C11.1253 18.75 16.6612 13.6481 17.2266 7.08375L20.0306 4.28062C20.2451 4.06601 20.3091 3.74335 20.1928 3.46313Z"
                    fill="#6B7582"
                  />
                </svg>
              </div>
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
                    d="M18.25 0.25H1.75C0.921573 0.25 0.25 0.921573 0.25 1.75V18.25C0.25 19.0784 0.921573 19.75 1.75 19.75H18.25C19.0784 19.75 19.75 19.0784 19.75 18.25V1.75C19.75 0.921573 19.0784 0.25 18.25 0.25Z"
                    fill="#6B7582"
                  />
                </svg>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="font-inter text-base text-[#6B7582] leading-6">
                @2024 Blue Meter. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default Commercial;