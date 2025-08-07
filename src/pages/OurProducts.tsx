import Layout from "@/components/Layout";

const OurProducts = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-blue-meter-gray">
        <div className="max-w-4xl mx-auto px-6 lg:px-20 py-20">
          {/* Hero Section */}
          <div className="mb-16 max-w-lg">
            <h1 className="text-blue-meter-dark font-['Public_Sans'] text-2xl md:text-3xl font-bold leading-10 mb-3">
              Choose the Right Smart Water Meter for Your Needs
            </h1>
            <p className="text-[#4d7399] font-['Public_Sans'] text-sm leading-[21px]">
              Our range of smart water meters offers solutions for every
              household, from basic monitoring to advanced control and
              analytics. Select the model that best fits your needs and upgrade
              as your requirements evolve.
            </p>
          </div>

          {/* Product Models */}
          {[
            {
              title: "Model 1: Basic Meter",
              name: "Basic Meter",
              desc: "Precise volume tracking (L), Email alerts for usage thresholds , Manual valve control. Ideal for small homeowners focused on basic monitoring.",
              img: "https://i.postimg.cc/0jn713TT/Depth-6-Frame-1-7.png",
              alt: "Basic Water Meter",
            },
            {
              title: "Model 2: Borewell Meter",
              name: "Borewell Meter",
              desc: "Adds: Specialized sensors for borewell water level and quality monitoring, Integration with existing borewell infrastructure, Real-time data on water availability and quality. Ideal for users managing borewells, seeking to optimize usage and monitor water conditions.",
              img: "https://i.postimg.cc/gJn02769/Depth-6-Frame-1-8.png",
              alt: "Borewell Water Meter",
            },
            {
              title: "Model 3: Secure Meter",
              name: "Secure Meter",
              desc: "Adds: Encrypted communications (device↔cloud), SOC-2 compliant data handling. Designed for privacy-focused users (e.g., rental properties).",
              img: "https://i.postimg.cc/yxRYFSPv/Depth-6-Frame-1-9.png",
              alt: "Secure Water Meter",
            },
            {
              title: "Model 4: Analytics Meter",
              name: "Analytics Meter",
              desc: "Adds: Cloud analytics: real-time flow rate, trend graphs, daily/monthly reports, Leak pattern detection using AI. Great for eco-conscious households, detects abnormal usage trends.",
              img: "https://i.postimg.cc/1tky53Q6/Depth-6-Frame-1-10.png",
              alt: "Analytics Water Meter",
            },
            {
              title: "Model 5: Smart Meter with Top-up & Automation",
              name: "Smart Meter with Top-up & Automation",
              desc: "Adds: Configurable usage caps with auto-top-up, Auto valve shut-off on cap breach followed by alert. Ideal for pre-paid setups or strict usage control.",
              img: "https://i.postimg.cc/pr35vH01/Depth-6-Frame-1-13.png",
              alt: "Smart Meter with Automation",
            },
            {
              title: "Model 6: Pro Valve Meter",
              name: "Pro Valve Meter",
              desc: "Adds: High-pressure valve actuator with remote/manual override, Programmable schedules (e.g., irrigation time windows), Multi-parameter monitoring (flow + pressure). Suited for sophisticated smart-home systems or small commercial setups.",
              img: "https://i.postimg.cc/wvfsWJDz/Depth-6-Frame-1-14.png",
              alt: "Pro Valve Water Meter",
            },
          ].map((model, index) => (
            <div className={`mb-${index === 5 ? 12 : 8}`} key={model.title}>
              <h2 className="text-blue-meter-dark font-['Public_Sans'] text-xl font-bold leading-7 mb-4 px-4">
                {model.title}
              </h2>
              <div className="px-4">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-8">
                  <div className="flex flex-col gap-4 flex-1 max-w-lg">
                    <div className="space-y-1">
                      <h3 className="text-blue-meter-dark font-['Public_Sans'] text-base font-bold leading-5">
                        {model.name}
                      </h3>
                      <p className="text-[#4d7399] font-['Public_Sans'] text-sm leading-[21px]">
                        {model.desc}
                      </p>
                    </div>
                    <button className="w-21 h-8 px-4 bg-[#e8edf2] rounded-2xl flex items-center justify-center">
                      <span className="text-blue-meter-dark font-['Public_Sans'] text-sm font-medium">
                        Choose
                      </span>
                    </button>
                  </div>
                  <div className="w-full lg:w-80 h-[171px] rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={model.img}
                      alt={model.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default OurProducts;