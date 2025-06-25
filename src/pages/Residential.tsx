import Layout from "@/components/Layout";

const Residential = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-20 py-20">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-20">
            {/* Hero Image */}
            <div className="flex-1 min-w-[400px] flex justify-center items-center bg-[#67b6cd] border border-[#23276a] rounded-xl p-8">
              <img
                src="https://placehold.co/331x331/67B6CD/67B6CD"
                alt="Water Analytics Dashboard"
                className="w-full max-w-[331px] h-auto"
              />
            </div>

            {/* Hero Content */}
            <div className="flex-1 min-w-[400px] space-y-8">
              <div className="space-y-2">
                <h1 className="font-inter text-5xl lg:text-4xl font-black text-[#141414] leading-[50px] tracking-[0px]">
                  Smart Water for Smart Homes
                </h1>
                <p className="font-inter text-base text-[#141414] leading-6">
                  Take control of your water usage with Blue Meter. Monitor,
                  manage, and conserve water effortlessly.
                </p>
              </div>
              <button className="bg-white rounded-3xl px-5 py-3 font-inter font-bold text-base text-[#141414] shadow-sm hover:shadow-md transition-shadow">
                View Plans
              </button>
            </div>
          </div>

          {/* Residential Plans Comparison */}
          <div className="mb-20">
            <h2 className="font-inter text-2xl font-bold text-[#141414] leading-7 mb-5">
              Residential Plans Comparison
            </h2>

            <div className="grid md:grid-cols-3 gap-3">
              {/* Basic Plan */}
              <div className="bg-white border border-[#e0e0e0] rounded-xl p-6 space-y-4">
                <div className="space-y-1">
                  <h3 className="font-inter text-base font-bold text-[#141414]">
                    Basic
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="font-inter text-4xl font-black text-[#141414] leading-[45px] tracking-[-1px]">
                      ₹749
                    </span>
                    <span className="font-inter text-base font-bold text-[#141414]">
                      /month
                    </span>
                  </div>
                </div>

                <button className="w-full h-10 bg-[#f2f2f2] rounded-[20px] font-inter font-bold text-sm text-[#141414]">
                  Choose Plan
                </button>

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
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
                        fill="#141414"
                      />
                    </svg>
                    <span className="font-inter text-sm text-[#141414]">
                      Real-time monitoring
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
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
                        fill="#141414"
                      />
                    </svg>
                    <span className="font-inter text-sm text-[#141414]">
                      Basic alerts
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
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
                        fill="#141414"
                      />
                    </svg>
                    <span className="font-inter text-sm text-[#141414]">
                      Monthly reports
                    </span>
                  </div>
                </div>
              </div>

              {/* Medium Plan */}
              <div className="bg-white border border-[#e0e0e0] rounded-xl p-6 space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-inter text-base font-bold text-[#141414]">
                      Medium
                    </h3>
                    <div className="bg-white rounded-xl px-3 py-1">
                      <span className="font-inter text-xs font-medium text-[#141414]">
                        Recommended
                      </span>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-inter text-4xl font-black text-[#141414] leading-[45px] tracking-[-1px]">
                      ₹1499
                    </span>
                    <span className="font-inter text-base font-bold text-[#141414]">
                      /month
                    </span>
                  </div>
                </div>

                <button className="w-full h-10 bg-[#f2f2f2] rounded-[20px] font-inter font-bold text-sm text-[#141414]">
                  Choose Plan
                </button>

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
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
                        d="M15.6087 1.06719L5.60869 11.0672C5.49146 11.1845 5.33238 11.2505 5.1665 11.2505C5.00062 11.2505 4.84155 11.1845 4.72432 11.0672L0.349316 6.69219C0.105103 6.44797 0.105103 6.05203 0.349316 5.80781C0.59353 5.5636 0.989478 5.5636 1.23369 5.80781L5.1665 9.74141L14.7243 0.182813C14.9685 -0.0614009 15.3645 -0.0614009 15.6087 0.182813C15.8529 0.427026 15.8529 0.822974 15.6087 1.06719Z"
                        fill="#141414"
                      />
                    </svg>
                    <span className="font-inter text-sm text-[#141414]">
                      Real-time monitoring
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
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
                        d="M15.6087 1.06719L5.60869 11.0672C5.49146 11.1845 5.33238 11.2505 5.1665 11.2505C5.00062 11.2505 4.84155 11.1845 4.72432 11.0672L0.349316 6.69219C0.105103 6.44797 0.105103 6.05203 0.349316 5.80781C0.59353 5.5636 0.989478 5.5636 1.23369 5.80781L5.1665 9.74141L14.7243 0.182813C14.9685 -0.0614009 15.3645 -0.0614009 15.6087 0.182813C15.8529 0.427026 15.8529 0.822974 15.6087 1.06719Z"
                        fill="#141414"
                      />
                    </svg>
                    <span className="font-inter text-sm text-[#141414]">
                      Advanced alerts
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
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
                        d="M15.6087 1.06719L5.60869 11.0672C5.49146 11.1845 5.33238 11.2505 5.1665 11.2505C5.00062 11.2505 4.84155 11.1845 4.72432 11.0672L0.349316 6.69219C0.105103 6.44797 0.105103 6.05203 0.349316 5.80781C0.59353 5.5636 0.989478 5.5636 1.23369 5.80781L5.1665 9.74141L14.7243 0.182813C14.9685 -0.0614009 15.3645 -0.0614009 15.6087 0.182813C15.8529 0.427026 15.8529 0.822974 15.6087 1.06719Z"
                        fill="#141414"
                      />
                    </svg>
                    <span className="font-inter text-sm text-[#141414]">
                      Weekly reports
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
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
                        d="M15.6087 1.06719L5.60869 11.0672C5.49146 11.1845 5.33238 11.2505 5.1665 11.2505C5.00062 11.2505 4.84155 11.1845 4.72432 11.0672L0.349316 6.69219C0.105103 6.44797 0.105103 6.05203 0.349316 5.80781C0.59353 5.5636 0.989478 5.5636 1.23369 5.80781L5.1665 9.74141L14.7243 0.182813C14.9685 -0.0614009 15.3645 -0.0614009 15.6087 0.182813C15.8529 0.427026 15.8529 0.822974 15.6087 1.06719Z"
                        fill="#141414"
                      />
                    </svg>
                    <span className="font-inter text-sm text-[#141414]">
                      Usage insights
                    </span>
                  </div>
                </div>
              </div>

              {/* Premium Plan */}
              <div className="bg-white border border-[#e0e0e0] rounded-xl p-6 space-y-4">
                <div className="space-y-1">
                  <h3 className="font-inter text-base font-bold text-[#141414]">
                    Premium
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="font-inter text-4xl font-black text-[#141414] leading-[45px] tracking-[-1px]">
                      ₹2249
                    </span>
                    <span className="font-inter text-base font-bold text-[#141414]">
                      /month
                    </span>
                  </div>
                </div>

                <button className="w-full h-10 bg-[#f2f2f2] rounded-[20px] font-inter font-bold text-sm text-[#141414]">
                  Choose Plan
                </button>

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
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
                        d="M16.2757 1.06719L6.27568 11.0672C6.15845 11.1845 5.99938 11.2505 5.8335 11.2505C5.66762 11.2505 5.50854 11.1845 5.39131 11.0672L1.01631 6.69219C0.772095 6.44797 0.772095 6.05203 1.01631 5.80781C1.26052 5.5636 1.65647 5.5636 1.90068 5.80781L5.8335 9.74141L15.3913 0.182813C15.6355 -0.0614009 16.0315 -0.0614009 16.2757 0.182813C16.5199 0.427026 16.5199 0.822974 16.2757 1.06719Z"
                        fill="#141414"
                      />
                    </svg>
                    <span className="font-inter text-sm text-[#141414]">
                      Real-time monitoring
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
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
                        d="M16.2757 1.06719L6.27568 11.0672C6.15845 11.1845 5.99938 11.2505 5.8335 11.2505C5.66762 11.2505 5.50854 11.1845 5.39131 11.0672L1.01631 6.69219C0.772095 6.44797 0.772095 6.05203 1.01631 5.80781C1.26052 5.5636 1.65647 5.5636 1.90068 5.80781L5.8335 9.74141L15.3913 0.182813C15.6355 -0.0614009 16.0315 -0.0614009 16.2757 0.182813C16.5199 0.427026 16.5199 0.822974 16.2757 1.06719Z"
                        fill="#141414"
                      />
                    </svg>
                    <span className="font-inter text-sm text-[#141414]">
                      Premium alerts
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
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
                        d="M16.2757 1.06719L6.27568 11.0672C6.15845 11.1845 5.99938 11.2505 5.8335 11.2505C5.66762 11.2505 5.50854 11.1845 5.39131 11.0672L1.01631 6.69219C0.772095 6.44797 0.772095 6.05203 1.01631 5.80781C1.26052 5.5636 1.65647 5.5636 1.90068 5.80781L5.8335 9.74141L15.3913 0.182813C15.6355 -0.0614009 16.0315 -0.0614009 16.2757 0.182813C16.5199 0.427026 16.5199 0.822974 16.2757 1.06719Z"
                        fill="#141414"
                      />
                    </svg>
                    <span className="font-inter text-sm text-[#141414]">
                      Daily reports
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
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
                        d="M16.2757 1.06719L6.27568 11.0672C6.15845 11.1845 5.99938 11.2505 5.8335 11.2505C5.66762 11.2505 5.50854 11.1845 5.39131 11.0672L1.01631 6.69219C0.772095 6.44797 0.772095 6.05203 1.01631 5.80781C1.26052 5.5636 1.65647 5.5636 1.90068 5.80781L5.8335 9.74141L15.3913 0.182813C15.6355 -0.0614009 16.0315 -0.0614009 16.2757 0.182813C16.5199 0.427026 16.5199 0.822974 16.2757 1.06719Z"
                        fill="#141414"
                      />
                    </svg>
                    <span className="font-inter text-sm text-[#141414]">
                      Water quality insights
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
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
                        d="M16.2757 1.06719L6.27568 11.0672C6.15845 11.1845 5.99938 11.2505 5.8335 11.2505C5.66762 11.2505 5.50854 11.1845 5.39131 11.0672L1.01631 6.69219C0.772095 6.44797 0.772095 6.05203 1.01631 5.80781C1.26052 5.5636 1.65647 5.5636 1.90068 5.80781L5.8335 9.74141L15.3913 0.182813C15.6355 -0.0614009 16.0315 -0.0614009 16.2757 0.182813C16.5199 0.427026 16.5199 0.822974 16.2757 1.06719Z"
                        fill="#141414"
                      />
                    </svg>
                    <span className="font-inter text-sm text-[#141414]">
                      Personalized recommendations
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Savings & Usage Graph */}
          <div className="mb-8">
            <h2 className="font-inter text-2xl font-bold text-[#141414] leading-7 mb-5">
              Savings &amp; Usage Graph
            </h2>

            <div className="bg-white border border-[#e0e0e0] rounded-xl p-6 min-w-[288px]">
              <div className="space-y-2 mb-4">
                <h3 className="font-inter text-base font-medium text-[#141414]">
                  Water Usage &amp; Savings
                </h3>
                <div className="font-inter text-3xl font-bold text-[#141414]">
                  ₹11250
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-inter text-base text-[#757575]">
                    Last 12 Months
                  </span>
                  <span className="font-inter text-base font-medium text-[#088708]">
                    +20%
                  </span>
                </div>
              </div>

              {/* Simple bar chart mockup */}
              <div className="flex items-end justify-between h-32 gap-2 px-3">
                {[
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ].map((month, index) => (
                  <div key={month} className="flex flex-col items-center gap-6">
                    <div
                      className="w-4 bg-[#f2f2f2] border-t-2 border-[#757575]"
                      style={{ height: `${Math.random() * 80 + 20}px` }}
                    ></div>
                    <span className="font-inter text-xs font-bold text-[#757575]">
                      {month}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Analytics Dashboard Image */}
          <div className="mb-8">
            <div className="w-full h-[497px] bg-[#63a6a7] rounded-xl overflow-hidden">
              <img
                src="https://placehold.co/944x497/63A6A7/63A6A7"
                alt="Analytics Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="font-inter text-2xl font-bold text-[#141414] leading-7 mb-10">
              Features
            </h2>

            <div className="grid md:grid-cols-3 gap-3">
              {/* Instant Alerts */}
              <div className="bg-white border border-[#e0e0e0] rounded-lg p-4 space-y-3">
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
                    d="M17.7938 14.4944C17.2734 13.5981 16.5 11.0622 16.5 7.75C16.5 3.60786 13.1421 0.25 9 0.25C4.85786 0.25 1.5 3.60786 1.5 7.75C1.5 11.0631 0.725625 13.5981 0.205312 14.4944C-0.065134 14.9581 -0.067101 15.5311 0.200155 15.9967C0.467411 16.4623 0.963134 16.7496 1.5 16.75H5.32594C5.68267 18.4956 7.21835 19.7492 9 19.7492C10.7816 19.7492 12.3173 18.4956 12.6741 16.75H16.5C17.0367 16.7493 17.5321 16.4619 17.7991 15.9963C18.0662 15.5308 18.0641 14.958 17.7938 14.4944ZM9 18.25C8.04674 18.2497 7.19713 17.6487 6.87938 16.75H11.1206C10.8029 17.6487 9.95326 18.2497 9 18.25ZM1.5 15.25C2.22188 14.0088 3 11.1325 3 7.75C3 4.43629 5.68629 1.75 9 1.75C12.3137 1.75 15 4.43629 15 7.75C15 11.1297 15.7763 14.0059 16.5 15.25H1.5Z"
                    fill="#141414"
                  />
                </svg>
                <div className="space-y-1">
                  <h3 className="font-inter text-base font-bold text-[#141414]">
                    Instant Alerts
                  </h3>
                  <p className="font-inter text-sm text-[#757575] leading-[21px]">
                    Receive immediate notifications for leaks, unusual usage,
                    and potential issues.
                  </p>
                </div>
              </div>

              {/* Water Quality Insights */}
              <div className="bg-white border border-[#e0e0e0] rounded-lg p-4 space-y-3">
                <svg
                  width="18"
                  height="22"
                  viewBox="0 0 18 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.3125 4.47656C12.1545 3.13916 10.8511 1.93486 9.42656 0.885938C9.16823 0.704968 8.82427 0.704968 8.56594 0.885938C7.14399 1.9353 5.84317 3.13958 4.6875 4.47656C2.11031 7.43625 0.75 10.5562 0.75 13.5C0.75 18.0563 4.44365 21.75 9 21.75C13.5563 21.75 17.25 18.0563 17.25 13.5C17.25 10.5562 15.8897 7.43625 13.3125 4.47656ZM9 20.25C5.27379 20.2459 2.25413 17.2262 2.25 13.5C2.25 8.13469 7.45031 3.65625 9 2.4375C10.5497 3.65625 15.75 8.13281 15.75 13.5C15.7459 17.2262 12.7262 20.2459 9 20.25ZM14.2397 14.3756C13.8414 16.6005 12.0996 18.3419 9.87469 18.7397C9.83345 18.7463 9.79176 18.7497 9.75 18.75C9.35993 18.7499 9.03506 18.4508 9.00277 18.0621C8.97048 17.6734 9.24155 17.3248 9.62625 17.2603C11.1797 16.9988 12.4978 15.6806 12.7612 14.1244C12.8306 13.7159 13.218 13.4409 13.6266 13.5103C14.0351 13.5797 14.31 13.9671 14.2406 14.3756H14.2397Z"
                    fill="#141414"
                  />
                </svg>
                <div className="space-y-1">
                  <h3 className="font-inter text-base font-bold text-[#141414]">
                    Water Quality Insights
                  </h3>
                  <p className="font-inter text-sm text-[#757575] leading-[21px]">
                    Get detailed information about your water quality, including
                    hardness, pH levels, and more.
                  </p>
                </div>
              </div>

              {/* Daily Usage Tracking */}
              <div className="bg-white border border-[#e0e0e0] rounded-lg p-4 space-y-3">
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
                    fill="#141414"
                  />
                </svg>
                <div className="space-y-1">
                  <h3 className="font-inter text-base font-bold text-[#141414]">
                    Daily Usage Tracking
                  </h3>
                  <p className="font-inter text-sm text-[#757575] leading-[21px]">
                    Monitor your daily water consumption and identify patterns
                    to optimize usage.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Real-Life Use Cases */}
          <div className="mb-8">
            <h2 className="font-inter text-2xl font-bold text-[#141414] leading-7 mb-4">
              Real-Life Use Cases
            </h2>

            <div className="grid md:grid-cols-3 gap-3">
              {/* Apartment Living */}
              <div className="space-y-3">
                <img
                  src="https://placehold.co/301x169/4A90E2/4A90E2"
                  alt="Apartment Living"
                  className="w-full h-[169px] object-cover rounded-xl"
                />
                <div className="space-y-1">
                  <h3 className="font-inter text-base font-medium text-[#141414]">
                    Apartment Living
                  </h3>
                  <p className="font-inter text-sm text-[#757575] leading-[21px]">
                    Track water usage in your apartment and split bills fairly
                    among residents.
                  </p>
                </div>
              </div>

              {/* Bungalow Bliss */}
              <div className="space-y-3">
                <img
                  src="https://placehold.co/301x169/7ED321/7ED321"
                  alt="Bungalow Bliss"
                  className="w-full h-[169px] object-cover rounded-xl"
                />
                <div className="space-y-1">
                  <h3 className="font-inter text-base font-medium text-[#141414]">
                    Bungalow Bliss
                  </h3>
                  <p className="font-inter text-sm text-[#757575] leading-[21px]">
                    Monitor your bungalow's water consumption and identify areas
                    for conservation.
                  </p>
                </div>
              </div>

              {/* Gated Community */}
              <div className="space-y-3">
                <img
                  src="https://placehold.co/301x170/50E3C2/50E3C2"
                  alt="Gated Community"
                  className="w-full h-[170px] object-cover rounded-xl"
                />
                <div className="space-y-1">
                  <h3 className="font-inter text-base font-medium text-[#141414]">
                    Gated Community
                  </h3>
                  <p className="font-inter text-sm text-[#757575] leading-[21px]">
                    Manage water usage across multiple homes in your gated
                    community with ease.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Did You Know? */}
          <div className="mb-8">
            <div className="bg-white border border-[#e0e0e0] rounded-xl p-5 space-y-1">
              <h3 className="font-inter text-base font-bold text-[#141414]">
                Did You Know?
              </h3>
              <p className="font-inter text-base text-[#757575] leading-6">
                A leaky faucet can waste up to 3,000 gallons of water per year.
                Blue Meter helps you identify and fix leaks quickly.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-8 py-20">
            <div className="space-y-2">
              <h2 className="font-inter text-4xl font-black text-[#141414] leading-[45px] tracking-[-1px] max-w-[720px] mx-auto">
                Ready to Take Control of Your Water?
              </h2>
              <p className="font-inter text-base text-[#141414] leading-6">
                Join thousands of homeowners who are saving water and money with
                Blue Meter.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <button className="bg-white rounded-3xl px-5 py-3 font-inter font-bold text-base text-[#141414] shadow-sm hover:shadow-md transition-shadow">
                Start with Blue Meter
              </button>
              <button className="bg-[#f2f2f2] rounded-3xl px-5 py-3 font-inter font-bold text-base text-[#141414] hover:bg-gray-300 transition-colors">
                Contact Support
              </button>
            </div>
          </div>

          {/* Family Illustration */}
          <div className="mb-8">
            <div className="w-full h-[619px] bg-[#F0F8FF] rounded-xl overflow-hidden">
              <img
                src="https://placehold.co/944x619/F0F8FF/F0F8FF"
                alt="Family at Home"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white">
          <div className="max-w-6xl mx-auto px-5 py-10">
            <div className="flex flex-wrap justify-center gap-8 mb-6">
              <a
                href="#"
                className="font-inter text-base text-[#757575] text-center hover:text-[#141414] transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="font-inter text-base text-[#757575] text-center hover:text-[#141414] transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="font-inter text-base text-[#757575] text-center hover:text-[#141414] transition-colors"
              >
                Support
              </a>
              <a
                href="#"
                className="font-inter text-base text-[#757575] text-center hover:text-[#141414] transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="font-inter text-base text-[#757575] text-center hover:text-[#141414] transition-colors"
              >
                Privacy Policy
              </a>
            </div>
            <div className="text-center">
              <p className="font-inter text-base text-[#757575]">
                @2024 Blue Meter. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Residential;
