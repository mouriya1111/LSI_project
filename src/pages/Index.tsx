import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[600px] lg:min-h-[800px] bg-blue-meter-gray">
        <div className="max-w-6xl mx-auto px-6 lg:px-40 py-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-8">
            {/* Hero Image */}
            <div className="w-full lg:min-w-[400px] h-[280px] rounded-xl overflow-hidden order-2 lg:order-1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/16570d251b0998443a23786385d5dd44cad70360?placeholderIfAbsent=true"
                alt="Smart Water Meter Device"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Hero Content */}
            <div className="w-full lg:min-w-[400px] flex flex-col justify-center gap-6 lg:gap-8 order-1 lg:order-2">
              <div className="space-y-4">
                <div>
                  <h1 className="font-inter font-black text-3xl sm:text-4xl lg:text-5xl text-blue-meter-dark leading-tight lg:leading-[60px] tracking-[1px] lg:tracking-[0px]">
                    Smart Water  Smarter Living.
                  </h1>
                </div>
                <div>
                  <p className="font-inter font-normal text-base lg:text-base text-blue-meter-dark leading-6">
                    Take control of your water usage with Blue Meter's
                    innovative solutions. Monitor, manage, and conserve water
                    effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="mt-6 lg:mt-14">
            <div className="flex justify-center">
              <p className="font-inter font-normal text-base text-blue-meter-dark leading-6 max-w-4xl text-center">
                Blue Meter empowers users to manage water like electricity—pay,
                track, and control usage in real time. Connect smart devices,
                monitor water quality (TDS, pH), and receive instant alerts.
                Choose from flexible plans for homes, communities, and
                businesses—sustainable water made simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Monitoring Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-40 py-8">
        <div className="mb-6">
          <h2 className="font-inter font-bold text-xl lg:text-[22px] text-blue-meter-dark leading-7">
            Live Monitoring
          </h2>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Real-time Water Usage Card */}
            <div className="flex flex-col gap-4">
              <div className="h-[200px] lg:h-[265px] p-2.5 flex items-center bg-blue-meter-gray rounded-[14px]">
                <div className="w-full h-full bg-[#4569A1] rounded-xl"></div>
              </div>
              <div className="space-y-2">
                <h3 className="font-inter font-medium text-base text-blue-meter-dark leading-6">
                  Real-time Water Usage
                </h3>
                <p className="font-inter font-normal text-sm text-blue-meter-text leading-[21px]">
                  Monitor your water consumption in real-time with our intuitive
                  dashboard. Track usage patterns and identify potential leaks.
                </p>
              </div>
            </div>

            {/* Instant Alerts Card */}
            <div className="flex flex-col gap-4">
              <div className="h-[200px] lg:h-[265px] p-2.5 flex items-center bg-blue-meter-gray rounded-[14px]">
                <div className="w-full h-full bg-[#20ABBC] rounded-xl"></div>
              </div>
              <div className="space-y-2">
                <h3 className="font-inter font-medium text-base text-blue-meter-dark leading-6">
                  Instant Alerts
                </h3>
                <p className="font-inter font-normal text-sm text-blue-meter-text leading-[21px]">
                  Receive instant alerts for unusual water activity, such as
                  leaks or excessive usage, directly on your smartphone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Node Mapping & Admin Features Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-40 py-8">
        <div className="mb-6">
          <h2 className="font-inter font-bold text-xl lg:text-[22px] text-blue-meter-dark leading-7">
            Node Mapping & Admin Features
          </h2>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Node Mapping Card */}
            <div className="flex flex-col gap-4">
              <div className="h-[200px] lg:h-[250px] flex justify-center items-center bg-blue-meter-gray rounded-xl">
                <div className="w-full h-full bg-[#CAD2D3] rounded-xl"></div>
              </div>
              <div className="space-y-2">
                <h3 className="font-inter font-medium text-base text-blue-meter-dark leading-6">
                  Node Mapping
                </h3>
                <p className="font-inter font-normal text-sm text-blue-meter-text leading-[21px]">
                  Visualize your water distribution network with our interactive
                  node mapping feature. Easily identify and manage individual
                  nodes.
                </p>
              </div>
            </div>

            {/* Admin Dashboard Card */}
            <div className="flex flex-col gap-4">
              <div className="h-[200px] lg:h-[250px] flex justify-center items-center bg-blue-meter-gray rounded-xl">
                <div className="w-full h-full bg-[#121217] rounded-xl"></div>
              </div>
              <div className="space-y-2">
                <h3 className="font-inter font-medium text-base text-blue-meter-dark leading-6">
                  Admin Dashboard
                </h3>
                <p className="font-inter font-normal text-sm text-blue-meter-text leading-[21px]">
                  Access comprehensive admin features through our desktop UI.
                  Manage user accounts, monitor system performance, and generate
                  reports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Blue Meter Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-4 py-8">
        <div className="space-y-6">
          <h2 className="font-inter font-bold text-2xl lg:text-[32px] text-blue-meter-dark-alt leading-tight lg:leading-10">
            Why Choose Blue Meter?
          </h2>

          <div className="space-y-6">
            {/* First Row of Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex-1 h-[167px] p-4 flex flex-col gap-3 rounded-lg border border-blue-meter-border-gray bg-white">
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
                      d="M10 5.5C7.51472 5.5 5.5 7.51472 5.5 10C5.5 12.4853 7.51472 14.5 10 14.5C12.4853 14.5 14.5 12.4853 14.5 10C14.4974 7.51579 12.4842 5.50258 10 5.5ZM10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10C13 11.6569 11.6569 13 10 13ZM18.25 10.2025C18.2537 10.0675 18.2537 9.9325 18.25 9.7975L19.6488 8.05C19.7975 7.86393 19.849 7.61827 19.7875 7.38813C19.5582 6.52619 19.2152 5.69861 18.7675 4.92719C18.6486 4.72249 18.4401 4.58592 18.205 4.55875L15.9813 4.31125C15.8888 4.21375 15.795 4.12 15.7 4.03L15.4375 1.80063C15.4101 1.56531 15.2732 1.35677 15.0681 1.23813C14.2964 0.791263 13.4689 0.448595 12.6072 0.219063C12.3769 0.157836 12.1312 0.209687 11.9453 0.35875L10.2025 1.75C10.0675 1.75 9.9325 1.75 9.7975 1.75L8.05 0.354063C7.86393 0.205326 7.61827 0.153827 7.38813 0.215312C6.52633 0.445025 5.6988 0.788016 4.92719 1.23531C4.72249 1.35417 4.58592 1.56268 4.55875 1.79781L4.31125 4.02531C4.21375 4.11844 4.12 4.21219 4.03 4.30656L1.80063 4.5625C1.56531 4.58988 1.35677 4.72682 1.23813 4.93188C0.791263 5.70359 0.448595 6.5311 0.219063 7.39281C0.157836 7.6231 0.209687 7.86878 0.35875 8.05469L1.75 9.7975C1.75 9.9325 1.75 10.0675 1.75 10.2025L0.354063 11.95C0.205326 12.1361 0.153827 12.3817 0.215312 12.6119C0.444615 13.4738 0.787627 14.3014 1.23531 15.0728C1.35417 15.2775 1.56268 15.4141 1.79781 15.4412L4.02156 15.6887C4.11469 15.7862 4.20844 15.88 4.30281 15.97L4.5625 18.1994C4.58988 18.4347 4.72682 18.6432 4.93188 18.7619C5.70359 19.2087 6.5311 19.5514 7.39281 19.7809C7.6231 19.8422 7.86878 19.7903 8.05469 19.6413L9.7975 18.25C9.9325 18.2537 10.0675 18.2537 10.2025 18.25L11.95 19.6488C12.1361 19.7975 12.3817 19.849 12.6119 19.7875C13.4738 19.5582 14.3014 19.2152 15.0728 18.7675C15.2775 18.6486 15.4141 18.4401 15.4412 18.205L15.6887 15.9813C15.7862 15.8888 15.88 15.795 15.97 15.7L18.1994 15.4375C18.4347 15.4101 18.6432 15.2732 18.7619 15.0681C19.2087 14.2964 19.5514 13.4689 19.7809 12.6072C19.8422 12.3769 19.7903 12.1312 19.6413 11.9453L18.25 10.2025Z"
                      fill="#121217"
                    />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h3 className="font-inter font-bold text-base text-blue-meter-dark-alt leading-5">
                    Custom Recharge Models
                  </h3>
                  <p className="font-inter font-normal text-sm text-blue-meter-text-secondary leading-[21px]">
                    Choose from a variety of recharge models tailored to your
                    specific needs, offering flexibility and convenience.
                  </p>
                </div>
              </div>

              <div className="flex-1 h-[167px] p-4 flex flex-col gap-3 rounded-lg border border-blue-meter-border-gray bg-white">
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
                      d="M19 15.75H18.25V0.75C18.25 0.335786 17.9142 0 17.5 0H12.25C11.8358 0 11.5 0.335786 11.5 0.75V4.5H7C6.58579 4.5 6.25 4.83579 6.25 5.25V9H2.5C2.08579 9 1.75 9.33579 1.75 9.75V15.75H1C0.585786 15.75 0.25 16.0858 0.25 16.5C0.25 16.9142 0.585786 17.25 1 17.25H19C19.4142 17.25 19.75 16.9142 19.75 16.5C19.75 16.0858 19.4142 15.75 19 15.75ZM13 1.5H16.75V15.75H13V1.5ZM7.75 6H11.5V15.75H7.75V6ZM3.25 10.5H6.25V15.75H3.25V10.5Z"
                      fill="#121217"
                    />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h3 className="font-inter font-bold text-base text-blue-meter-dark-alt leading-5">
                    Real-Time Data Access
                  </h3>
                  <p className="font-inter font-normal text-sm text-blue-meter-text-secondary leading-[21px]">
                    Access real-time data on your water consumption and quality,
                    empowering you to make informed decisions and manage your
                    resources effectively.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Row of Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex-1 h-[151px] p-4 flex flex-col gap-3 rounded-lg border border-blue-meter-border-gray bg-white">
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
                      d="M16.5 0.75H1.5C0.671573 0.75 0 1.42157 0 2.25V7.76062C0 16.1616 7.10812 18.9487 8.53125 19.4222C8.8352 19.5256 9.1648 19.5256 9.46875 19.4222C10.8938 18.9487 18 16.1616 18 7.76062V2.25C18 1.42157 17.3284 0.75 16.5 0.75ZM16.5 7.76156C16.5 15.1134 10.2797 17.5697 9 17.9972C7.73156 17.5744 1.5 15.12 1.5 7.76156V2.25H16.5V7.76156ZM4.71938 10.2806C4.42632 9.98757 4.42632 9.51243 4.71938 9.21937C5.01243 8.92632 5.48757 8.92632 5.78063 9.21937L7.5 10.9388L12.2194 6.21937C12.5124 5.92632 12.9876 5.92632 13.2806 6.21937C13.5737 6.51243 13.5737 6.98757 13.2806 7.28063L8.03063 12.5306C7.88995 12.6715 7.69906 12.7506 7.5 12.7506C7.30094 12.7506 7.11005 12.6715 6.96937 12.5306L4.71938 10.2806Z"
                      fill="#121217"
                    />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h3 className="font-inter font-bold text-base text-blue-meter-dark-alt leading-5">
                    Secure Usage Tracking
                  </h3>
                  <p className="font-inter font-normal text-sm text-blue-meter-text-secondary leading-[21px]">
                    Our platform ensures secure and accurate tracking of your
                    water usage, providing transparency and peace of mind.
                  </p>
                </div>
              </div>

              <div className="flex-1 h-[151px] p-4 flex flex-col gap-3 rounded-lg border border-blue-meter-border-gray bg-white">
                <div className="w-6 h-6">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.9484 0.756562C17.9263 0.376768 17.6232 0.0737419 17.2434 0.0515625C10.1062 -0.3675 4.38938 1.78125 1.95188 5.8125C1.10697 7.19148 0.690616 8.79032 0.755625 10.4062C0.809062 11.8988 1.24406 13.4062 2.04844 14.8922L0.219375 16.7203C0.0298009 16.9099 -0.0442362 17.1862 0.0251527 17.4452C0.0945415 17.7041 0.296815 17.9064 0.555778 17.9758C0.814741 18.0452 1.09105 17.9711 1.28062 17.7816L3.10875 15.9525C4.59375 16.7559 6.10219 17.1909 7.59375 17.2444C7.69812 17.2481 7.80219 17.25 7.90594 17.25C9.41695 17.254 10.8993 16.8379 12.1875 16.0481C16.2188 13.6106 18.3684 7.89469 17.9484 0.756562ZM11.4141 14.7656C9.28125 16.0575 6.75656 16.0781 4.2225 14.8378L12.5316 6.52969C12.8246 6.23663 12.8246 5.76149 12.5316 5.46844C12.2385 5.17538 11.7634 5.17538 11.4703 5.46844L3.16219 13.7812C1.92562 11.25 1.94344 8.71875 3.23438 6.58969C5.30531 3.17062 10.2281 1.29844 16.4822 1.52156C16.7062 7.77094 14.8331 12.6947 11.4141 14.7656Z"
                      fill="#121217"
                    />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h3 className="font-inter font-bold text-base text-blue-meter-dark-alt leading-5">
                    Eco-Friendly & Efficient
                  </h3>
                  <p className="font-inter font-normal text-sm text-blue-meter-text-secondary leading-[21px]">
                    By optimizing water usage and reducing waste, Blue Meter
                    contributes to a more sustainable and eco-friendly
                    lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="my-10 px-6">
        {/* Empowering Every Resident */}
        <div className="min-h-[400px] lg:h-[520px] rounded-[24px] bg-white shadow-[4px_6px_0px_rgba(0,0,0,0.10),10px_15px_0px_rgba(0,0,0,0.10)] relative overflow-hidden">
          <div className="lg:absolute lg:right-40 lg:top-[61px] w-full lg:w-[245px] h-[200px] lg:h-[283px] p-6 lg:p-0">
            <div className="w-full h-full bg-[#20ABBC] rounded-xl"></div>
          </div>
          <div className="lg:absolute lg:left-[71px] lg:top-[152px] w-full lg:w-[599px] p-6 lg:p-0 space-y-4">
            <h2 className="font-poppins font-bold text-xl lg:text-2xl text-blue-meter-dark-alt leading-tight">
              Empowering Every Resident
            </h2>
            <p className="font-poppins font-normal text-lg lg:text-[22px] text-gray-600 leading-relaxed">
              Smart meters for every apartment enable transparent, fair water
              usage tracking. Residents and managers access real-time dashboards
              on any device, boosting satisfaction and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <div className="flex items-center gap-2">
                <svg
                  width="18"
                  height="24"
                  viewBox="0 0 18 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.75 3C0.75 1.34531 2.09531 0 3.75 0H14.25C15.9047 0 17.25 1.34531 17.25 3V21C17.25 22.6547 15.9047 24 14.25 24H3.75C2.09531 24 0.75 22.6547 0.75 21V3ZM6.75 21C6.75 21.4125 7.0875 21.75 7.5 21.75H10.5C10.9125 21.75 11.25 21.4125 11.25 21C11.25 20.5875 10.9125 20.25 10.5 20.25H7.5C7.0875 20.25 6.75 20.5875 6.75 21ZM14.25 3H3.75V18H14.25V3Z"
                    fill="black"
                  />
                </svg>
                <span className="font-poppins font-medium text-base text-black">
                  Mobile Access
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="28"
                  height="24"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.96875 0C2.31406 0 0.96875 1.34531 0.96875 3V16.5C0.96875 18.1547 2.31406 19.5 3.96875 19.5H12.2188L11.7172 21H8.46875C7.63906 21 6.96875 21.6703 6.96875 22.5C6.96875 23.3297 7.63906 24 8.46875 24H20.4688C21.2984 24 21.9688 23.3297 21.9688 22.5C21.9688 21.6703 21.2984 21 20.4688 21H17.2203L16.7188 19.5H24.9688C26.6234 19.5 27.9688 18.1547 27.9688 16.5V3C27.9688 1.34531 26.6234 0 24.9688 0H3.96875ZM24.9688 3V13.5H3.96875V3H24.9688Z"
                    fill="black"
                  />
                </svg>
                <span className="font-poppins font-medium text-base text-black">
                  Desktop Dashboard
                </span>
              </div>
            </div>
          </div>
          <div className="absolute right-24 top-16 w-auto h-[440px] flex items-center">
            <div className="absolute left-[-221px] top-[301px] w-[312px] h-7 flex items-center gap-3">
              <svg
                width="15"
                height="20"
                viewBox="0 0 12 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.875 0C0.839844 0 0 0.839844 0 1.875V18.125C0 19.1602 0.839844 20 1.875 20H5.625V16.875C5.625 15.8398 6.46484 15 7.5 15C8.53516 15 9.375 15.8398 9.375 16.875V20H13.125C14.1602 20 15 19.1602 15 18.125V1.875C15 0.839844 14.1602 0 13.125 0H1.875Z"
                  fill="black"
                />
              </svg>
              <span className="font-poppins font-semibold text-lg text-black">
                Community Smart Meter Setup
              </span>
            </div>
          </div>
        </div>

        {/* IoT Network for Water Grids */}
        <div className="min-h-[400px] lg:h-[461px] rounded-[24px] bg-white shadow-[4px_6px_0px_rgba(0,0,0,0.10),10px_15px_0px_rgba(0,0,0,0.10)] my-10 relative overflow-hidden">
          <div className="lg:absolute lg:left-[49px] lg:top-[132px] w-full lg:w-[512px] p-6 lg:p-0 space-y-4">
            <h2 className="font-poppins font-bold text-xl lg:text-2xl text-black leading-tight tracking-[-0.5px] lg:tracking-[-1.1px]">
              IoT Network for Water Grids
            </h2>
            <p className="font-poppins font-normal text-lg lg:text-[18px] text-gray-600 leading-relaxed">
              Illustration depicts a smart water grid with IoT nodes monitoring
              underground pipes, real-time alerts, and networked data
              transmission to the cloud. Features a clean, professional map-like
              background.
            </p>
            <div className="absolute left-[4px] top-[192px] flex items-center gap-6">
              <div className="flex items-center gap-2">
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1.75H10.5V3.5H7V1.75ZM6.5625 0C5.83789 0 5.25 0.587891 5.25 1.3125V3.9375C5.25 4.66211 5.83789 5.25 6.5625 5.25H7.875V6.125H0.875C0.391016 6.125 0 6.51602 0 7C0 7.48398 0.391016 7.875 0.875 7.875H3.5V8.75H2.1875C1.46289 8.75 0.875 9.33789 0.875 10.0625V12.6875C0.875 13.4121 1.46289 14 2.1875 14H6.5625C7.28711 14 7.875 13.4121 7.875 12.6875V10.0625C7.875 9.33789 7.28711 8.75 6.5625 8.75H5.25V7.875H12.25V8.75H10.9375C10.2129 8.75 9.625 9.33789 9.625 10.0625V12.6875C9.625 13.4121 10.2129 14 10.9375 14H15.3125C16.0371 14 16.625 13.4121 16.625 12.6875V10.0625C16.625 9.33789 16.0371 8.75 15.3125 8.75H14V7.875H16.625C17.109 7.875 17.5 7.48398 17.5 7C17.5 6.51602 17.109 6.125 16.625 6.125H9.625V5.25H10.9375C11.6621 5.25 12.25 4.66211 12.25 3.9375V1.3125C12.25 0.587891 11.6621 0 10.9375 0H6.5625Z"
                    fill="black"
                  />
                </svg>
                <span className="font-poppins font-medium text-base text-black">
                  Grid Monitoring
                </span>
              </div>
              <span className="font-poppins font-medium text-base text-black">
                Alert Node
              </span>
            </div>
          </div>
          <div className="lg:absolute lg:right-40 lg:top-[69px] w-full lg:w-[295px] h-[250px] lg:h-[326px] bg-[#CAD2D3] rounded-xl flex items-center justify-center mx-6 lg:mx-0 mt-6 lg:mt-0">
            <svg
              width="19"
              height="26"
              viewBox="0 0 19 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.1665 0C4.07379 0 -0.000366211 4.18679 -0.000366211 9.42028C-0.000366211 14.6538 4.07379 18.8406 9.1665 25.1207C14.2592 18.8406 18.3334 14.6538 18.3334 9.42028C18.3334 4.18679 14.2592 0 9.1665 0ZM9.1665 6.28019C10.8571 6.28019 12.2221 7.68291 12.2221 9.42028C12.2221 11.1576 10.8571 12.5604 9.1665 12.5604C7.47586 12.5604 6.11087 11.1576 6.11087 9.42028C6.11087 7.68291 7.47586 6.28019 9.1665 6.28019Z"
                fill="#00113C"
              />
            </svg>
          </div>
        </div>

        {/* Water Quality Sensor Calibration */}
        <div className="w-full min-h-[400px] lg:h-[465px] rounded-[24px] bg-white shadow-[4px_6px_0px_rgba(0,0,0,0.10),10px_15px_0px_rgba(0,0,0,0.10)] my-10 relative overflow-hidden">
          <div className="lg:absolute lg:right-40 lg:top-[68px] w-full lg:w-[263px] h-[250px] lg:h-[317px] p-6 lg:p-0">
            <div className="w-full lg:w-[241px] h-full lg:h-[269px] bg-[#4B5563] rounded-xl lg:absolute lg:left-[22px] lg:top-0"></div>
          </div>
          <div className="lg:absolute lg:left-[66px] lg:top-[94px] w-full lg:w-[493px] p-6 lg:p-0 space-y-4">
            <h2 className="font-poppins font-bold text-xl lg:text-2xl text-black leading-tight lg:leading-[30px]">
              Water Quality Sensor Calibration
            </h2>
            <p className="font-poppins font-normal text-lg lg:text-[18px] text-gray-600 leading-relaxed">
              Ensure accuracy and reliability of water quality readings with
              easy, guided calibration for every smart sensor. Designed for
              field techs and dashboard admins alike.
            </p>
          </div>
          <div className="absolute left-[66px] top-[267px] w-[420px] h-[88px] space-y-2">
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1C5 0.446875 5.44688 0 6 0H7C7.55312 0 8 0.446875 8 1C8.55313 1 9 1.44687 9 2V9C9 9.55313 8.55313 10 8 10C8 10.5531 7.55312 11 7 11H6C5.44688 11 5 10.5531 5 10C4.44688 10 4 9.55313 4 9V2C4 1.44687 4.44688 1 5 1Z"
                  fill="black"
                />
              </svg>
              <span className="font-poppins font-semibold text-base text-black">
                Precision calibration tools
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.4219 2.18531C8.76877 1.93844 9.23127 1.93844 9.57815 2.18531C10.2813 2.66969 11.1406 3.00094 12 3.00094C12.8406 3.00094 13.7313 2.66344 14.4188 2.18531C14.7906 1.91969 15.2969 1.94156 15.6438 2.23844C16.0938 2.61031 16.6594 2.89469 17.225 3.02594C17.7625 3.15094 18.0969 3.68844 17.9719 4.22594C17.8469 4.76344 17.3094 5.09781 16.7719 4.97281C16.0063 4.79469 15.3688 4.45719 14.9531 4.19156C14.0469 4.67906 13.0313 5.00094 12 5.00094C11.0031 5.00094 10.1063 4.69156 9.48752 4.41031C9.30627 4.32594 9.14065 4.24469 9.00002 4.16969C8.8594 4.24469 8.6969 4.32906 8.51252 4.41031C7.89377 4.69156 6.9969 5.00094 6.00002 5.00094C4.96877 5.00094 3.95315 4.67906 3.0469 4.19469C2.62815 4.45719 1.99377 4.79781 1.22815 4.97594C0.690648 5.10094 0.153148 4.76656 0.0281485 4.22906C-0.0968515 3.69156 0.237523 3.15406 0.775023 3.02906C1.33752 2.89469 1.90627 2.61031 2.35315 2.23844C2.70002 1.94156 3.20627 1.92281 3.57815 2.18531C4.2719 2.66344 5.1594 3.00094 6.00002 3.00094C6.8594 3.00094 7.71877 2.66969 8.4219 2.18531Z"
                  fill="black"
                />
              </svg>
              <span className="font-poppins font-semibold text-base text-black">
                TDS & chemical content checks
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="12"
                height="16"
                viewBox="0 0 12 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 2C0.5 0.896875 1.39688 0 2.5 0H9.5C10.6031 0 11.5 0.896875 11.5 2V14C11.5 15.1031 10.6031 16 9.5 16H2.5C1.39688 16 0.5 15.1031 0.5 14V2Z"
                  fill="black"
                />
              </svg>
              <span className="font-poppins font-semibold text-base text-black">
                Handheld & dashboard views
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="min-h-[400px] lg:h-[588px] bg-blue-meter-primary relative py-12">
        {/* Footer Content */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="py-10 space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
              {[
                "About Us",
                "Contact",
                "Support",
                "Terms of Service",
                "Privacy Policy",
              ].map((item) => (
                <div key={item}>
                  <span className="font-inter font-normal text-base text-black leading-6">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="font-inter font-normal text-base text-black leading-6">
                @2024 Blue Meter. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="lg:absolute lg:left-[91px] lg:bottom-20 w-full lg:w-auto px-6 lg:px-0">
          <div className="space-y-6 lg:space-y-10">
            <h3 className="font-dm-sans font-bold text-xl text-[#120202] leading-[22px]">
              Product
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-[18px]">
              {["Features", "Pricing", "Case studies", "Reviews"].map(
                (item) => (
                  <div key={item}>
                    <span className="font-dm-sans font-normal text-lg text-[#020000] leading-5">
                      {item}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default Index;
