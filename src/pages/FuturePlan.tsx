import Layout from "@/components/Layout";

const FuturePlan = () => {
  return (
    <Layout>
     <div className="min-h-screen bg-white">
  {/* Hero Section */}
  <section className="bg-gradient-to-b from-blue-50 to-white py-20">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://i.postimg.cc/VNMFJ7yh/Depth-6-Frame-0-9.png"
            alt="Blue Meter"
            className="w-[500px] h-auto"
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="font-inter font-black text4xl md:text-5xl text-[#121417] leading-tight mb-5">
            Empowering the Future of Water with AI & IoT
          </h1>
          <p className="font-inter font-normal text-xl text-[#61758a] leading-relaxed">
            Discover how Blue Meter is pioneering the next generation of smart
            water management through cutting-edge artificial intelligence and
            Internet of Things technologies.
          </p>
        </div>
      </div>
    </div>
  </section>
        {/* Our Vision Section */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="font-inter font-bold text-4xl text-[#121417] mb-6">
        Our Vision
      </h2>
      <p className="font-inter font-normal text-lg text-[#61758a] max-w-4xl mx-auto leading-relaxed mb-10">
        We envision a world where every drop of water is intelligently
        monitored, efficiently distributed, and sustainably managed. Through
        the power of AI and IoT, we're building the infrastructure for a
        water-secure future that serves communities, businesses, and the planet.
      </p>
      <div className="flex justify-center">
        <img
          src="https://i.postimg.cc/9XBQ9fSp/Frame-11808811.png"
          alt="Our Vision"
          className="w-full max-w-5xl rounded-xl"
        />
      </div>
    </div>
  </div>
</section>

        {/* AI & Machine Learning Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-inter font-bold text-4xl text-[#121417] mb-6">
                AI & Machine Learning
              </h2>
              <p className="font-inter font-normal text-lg text-[#61758a] max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform raw
                water data into actionable insights and predictive intelligence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
                      fill="#1282eb"
                    />
                  </svg>
                </div>
                <h3 className="font-inter font-bold text-xl text-[#121417] mb-4">
                  Predictive Analytics
                </h3>
                <p className="font-inter text-[#61758a] leading-relaxed">
                  Advanced algorithms predict water demand patterns, potential
                  system failures, and maintenance needs before they occur.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 17V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V17H3ZM5 19V19H19V19H5ZM16.5 9.5L15.09 8.09L10.5 12.68L8.91 11.09L7.5 12.5L10.5 15.5L16.5 9.5Z"
                      fill="#10b981"
                    />
                  </svg>
                </div>
                <h3 className="font-inter font-bold text-xl text-[#121417] mb-4">
                  Demand Forecasting
                </h3>
                <p className="font-inter text-[#61758a] leading-relaxed">
                  Machine learning models analyze consumption patterns to
                  optimize water distribution and prevent shortages.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V8.5L19 9V9ZM15 9.5V7.5L9 8V10L15 9.5ZM5 12C6.1 12 7 12.9 7 14C7 15.1 6.1 16 5 16C3.9 16 3 15.1 3 14C3 12.9 3.9 12 5 12ZM19 12C20.1 12 21 12.9 21 14C21 15.1 20.1 16 19 16C17.9 16 17 15.1 17 14C17 12.9 17.9 12 19 12ZM12 18C13.1 18 14 18.9 14 20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20C10 18.9 10.9 18 12 18Z"
                      fill="#8b5cf6"
                    />
                  </svg>
                </div>
                <h3 className="font-inter font-bold text-xl text-[#121417] mb-4">
                  Resource Optimization
                </h3>
                <p className="font-inter text-[#61758a] leading-relaxed">
                  AI-driven optimization ensures efficient resource allocation
                  and minimizes waste across the entire water network.
                </p>
              </div>
            </div>
          </div>
        </section> 
    {/* Automation & Control Section */}
<section className="py-20 bg-gray-50">
  <div className="max-w-3xl mx-auto px-6 text-center">
    
    {/* Heading */}
    <h2 className="font-inter font-bold text-4xl text-[#121417] mb-4">
      Automation & Control
    </h2>
    {/* Paragraph */}
    <p className="font-inter font-normal text-lg text-[#61758a] mb-8 leading-relaxed">
      Intelligent automation systems respond to real-time data, adjusting water flow,
      pressure, and distribution to maintain optimal performance while reducing manual intervention.
    </p>

    {/* Image */}
    <div className="w-full h-96 rounded-xl overflow-hidden">
      <img
        src="https://i.postimg.cc/XYNTGj5T/Depth-6-Frame-0-17.png"
        alt="Automation and Control"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</section>
        {/* Our Solutions Section */}
<section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="font-inter font-bold text-4xl text-[#121417] mb-6">
        Our Solutions
      </h2>
      <p className="font-inter font-normal text-lg text-[#61758a] max-w-3xl mx-auto">
        Comprehensive water management solutions powered by cutting-edge
        technology and designed for real-world applications.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Borewell Monitoring */}
      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
        <div className="w-full h-40 mb-6 flex items-center justify-center">
          <img
            src="https://i.postimg.cc/HLGr2ht4/Depth-6-Frame-1-17.png" 
            alt="Borewell Monitoring"
            className="h-full object-contain"
          />
        </div>
        <h3 className="font-inter font-bold text-lg text-[#121417] mb-3">
          Borewell Monitoring
        </h3>
        <p className="font-inter text-[#61758a] text-sm leading-relaxed">
          Real-time monitoring of groundwater levels, quality, and
          pumping efficiency for sustainable extraction.
        </p>
      </div>

      {/* Water Quality Analysis */}
      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
        <div className="w-full h-40 mb-6 flex items-center justify-center">
          <img
            src="https://i.postimg.cc/3wgdbFSM/Depth-6-Frame-1-19.png" 
            alt="Water Quality Analysis"
            className="h-full object-contain"
          />
        </div>
        <h3 className="font-inter font-bold text-lg text-[#121417] mb-3">
          Water Quality Analysis
        </h3>
        <p className="font-inter text-[#61758a] text-sm leading-relaxed">
          Continuous monitoring of pH, turbidity, chlorine levels, and
          other critical water quality parameters.
        </p>
      </div>

      {/* Water Flow Tracking */}
      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
        <div className="w-full h-40 mb-6 flex items-center justify-center">
          <img
            src="https://i.postimg.cc/s2hGprdJ/Depth-6-Frame-1-25.png" 
            alt="Water Flow Tracking"
            className="h-full object-contain"
          />
        </div>
        <h3 className="font-inter font-bold text-lg text-[#121417] mb-3">
          Water Flow Tracking
        </h3>
        <p className="font-inter text-[#61758a] text-sm leading-relaxed">
          Precise measurement and tracking of water flow rates across
          distribution networks and consumption points.
        </p>
      </div>
    </div>
  </div>
</section>

         {/* Use Cases Section */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="font-inter font-bold text-4xl text-[#121417] mb-6">
        Use Cases
      </h2>
      <p className="font-inter font-normal text-lg text-[#61758a] max-w-3xl mx-auto">
        Our technology adapts to diverse environments and requirements,
        serving various sectors with tailored solutions.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Agriculture */}
      <div className="text-center">
        <div className="w-30 h-30 mx-auto mb-6">
          <img
            src="https://i.postimg.cc/PJqJJsth/Depth-6-Frame-1-21.png" 
            alt="Agriculture"
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="font-inter font-bold text-xl text-[#121417] mb-4">
          Agriculture
        </h3>
        <p className="font-inter text-[#61758a] leading-relaxed">
          Optimize irrigation systems, monitor soil moisture, and ensure
          sustainable water usage for crop production.
        </p>
      </div>

      {/* Urban Water Supply */}
      <div className="text-center">
        <div className="w-30 h-30 mx-auto mb-6">
          <img
            src="https://i.postimg.cc/tJmTVST6/Depth-6-Frame-1-22.png" 
            alt="Urban Water Supply"
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="font-inter font-bold text-xl text-[#121417] mb-4">
          Urban Water Supply
        </h3>
        <p className="font-inter text-[#61758a] leading-relaxed">
          Manage municipal water distribution, detect leaks early, and
          ensure reliable water supply to urban communities.
        </p>
      </div>

      {/* Industry */}
      <div className="text-center">
        <div className="w-30 h-30 mx-auto mb-6">
          <img
            src="https://i.postimg.cc/8kys35HC/Depth-6-Frame-1-23.png" 
            alt="Industry"
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="font-inter font-bold text-xl text-[#121417] mb-4">
          Industry
        </h3>
        <p className="font-inter text-[#61758a] leading-relaxed">
          Monitor industrial water usage, ensure compliance with
          regulations, and optimize water efficiency in manufacturing.
        </p>
      </div>
    </div>
  </div>
</section>

        <footer className="py-20 bg-blue-meter-primary relative py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2.5 text-white font-inter font-semibold text-lg mb-4">
                  <div className="w-[22px] h-[22px] flex items-center justify-center">
                    <svg
                      width="17"
                      height="22"
                      viewBox="0 0 17 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.8125 4.47656C11.6545 3.13916 10.3511 1.93486 8.92656 0.885938C8.66823 0.704968 8.32427 0.704968 8.06594 0.885938C6.64399 1.9353 5.34317 3.13958 4.1875 4.47656C1.61031 7.43625 0.25 10.5562 0.25 13.5C0.25 18.0563 3.94365 21.75 8.5 21.75C13.0563 21.75 16.75 18.0563 16.75 13.5C16.75 10.5562 15.3897 7.43625 12.8125 4.47656ZM8.5 20.25C4.77379 20.2459 1.75413 17.2262 1.75 13.5C1.75 8.13469 6.95031 3.65625 8.5 2.4375C10.0497 3.65625 15.25 8.13281 15.25 13.5C15.2459 17.2262 12.2262 20.2459 8.5 20.25ZM13.7397 14.3756C13.3414 16.6005 11.5996 18.3419 9.37469 18.7397C9.33345 18.7463 9.29176 18.7497 9.25 18.75C8.85993 18.7499 8.53506 18.4508 8.50277 18.0621C8.47048 17.6734 8.74155 17.3248 9.12625 17.2603C10.6797 16.9988 11.9978 15.6806 12.2612 14.1244C12.3306 13.7159 12.718 13.4409 13.1266 13.5103C13.5351 13.5797 13.81 13.9671 13.7406 14.3756H13.7397Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <span>Blue Meter</span>
                </div>
                <p className="text-white font-inter text-sm leading-relaxed max-w-md">
                  Pioneering the future of water management through innovative
                  IoT and AI solutions. Building a sustainable, water-secure
                  world for future generations.
                </p>
              </div>

              <div>
                <h4 className="text-white font-inter font-semibold mb-4">
                  Quick Links
                </h4>
                <div className="space-y-2">
                  <a
                    href="/about-us"
                    className="block text-white hover:text-white font-inter text-sm transition-colors"
                  >
                    About Us
                  </a>
                  <a
                    href="/our-products"
                    className="block text-white hover:text-white font-inter text-sm transition-colors"
                  >
                    Our Products
                  </a>
                  <a
                    href="/contact"
                    className="block text-white hover:text-white font-inter text-sm transition-colors"
                  >
                    Contact
                  </a>
                  <a
                    href="/future-plan"
                    className="block text-white hover:text-white font-inter text-sm transition-colors"
                  >
                    Future Plan
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-white font-inter font-semibold mb-4">
                  Follow Us
                </h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 8.04889C16 3.60444 12.4178 0 8 0C3.58222 0 0 3.60444 0 8.04889C0 12.0533 2.92556 15.3956 6.75 16V10.3756H4.71875V8.04889H6.75V6.27556C6.75 4.25778 7.94444 3.14667 9.77111 3.14667C10.6489 3.14667 11.5625 3.30222 11.5625 3.30222V5.28H10.5533C9.56 5.28 9.25 5.90222 9.25 6.53778V8.04889H11.4689L11.1133 10.3756H9.25V16C13.0744 15.3956 16 12.0533 16 8.04889Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 3.53778C15.4089 3.80444 14.7711 3.98222 14.1067 4.06222C14.7911 3.64889 15.3133 2.99556 15.5578 2.21333C14.9111 2.60444 14.2089 2.88889 13.4733 3.05333C12.8711 2.40444 12.0178 2 11.0756 2C9.26222 2 7.79556 3.47556 7.79556 5.29778C7.79556 5.56 7.82667 5.81333 7.88889 6.05333C5.15111 5.90222 2.73333 4.58222 1.11556 2.58222C0.831111 3.07556 0.668889 3.64889 0.668889 4.26222C0.668889 5.42222 1.26222 6.44444 2.15556 7.03556C1.60444 7.01778 1.08889 6.87556 0.64 6.64V6.68889C0.64 8.28444 1.77778 9.61333 3.27556 9.92444C3 10 2.71111 10.04 2.41333 10.04C2.20444 10.04 2 10.02 1.80444 9.98222C2.21333 11.2889 3.42667 12.2444 4.86222 12.2711C3.73333 13.1511 2.32 13.6711 0.782222 13.6711C0.515556 13.6711 0.253333 13.6533 0 13.6222C1.45333 14.5511 3.17778 15.08 5.03111 15.08C11.0667 15.08 14.3733 10.0889 14.3733 5.68444C14.3733 5.53778 14.37 5.39111 14.3622 5.24889C15.0178 4.78222 15.5578 4.20444 16 3.53778Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.8178 0H1.18222C0.528889 0 0 0.515556 0 1.15556V14.8444C0 15.4844 0.528889 16 1.18222 16H14.8178C15.4711 16 16 15.4844 16 14.8444V1.15556C16 0.515556 15.4711 0 14.8178 0ZM4.74667 13.6356H2.37333V6.00444H4.74667V13.6356ZM3.56 4.96889C2.80444 4.96889 2.19556 4.36 2.19556 3.60444C2.19556 2.84889 2.80444 2.24 3.56 2.24C4.31556 2.24 4.92444 2.84889 4.92444 3.60444C4.92444 4.36 4.31556 4.96889 3.56 4.96889ZM13.6356 13.6356H11.2622V9.92444C11.2622 9.03556 11.2444 7.90222 10.0356 7.90222C8.80889 7.90222 8.62667 8.84 8.62667 9.86222V13.6356H6.25333V6.00444H8.54667V7.07556H8.58222C8.90667 6.46222 9.71111 5.82222 10.9022 5.82222C13.3067 5.82222 13.6356 7.38667 13.6356 9.44V13.6356Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-white-700 mt-12 pt-8 text-center">
              <p className="text-white font-inter text-sm">
                © 2024 Blue Meter. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default FuturePlan;