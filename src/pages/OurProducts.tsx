import Layout from "@/components/Layout";

const OurProducts = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-blue-meter-gray">
        <div className="max-w-4xl mx-auto px-6 lg:px-20 py-20">
          {/* Hero Section */}
          <div className="mb-16">
            <div className="max-w-lg">
              <h1 className="text-blue-meter-dark font-['Public_Sans'] text-2xl md:text-3xl font-bold leading-10 mb-3">
                Choose the Right Smart Water Meter for Your Needs
              </h1>
              <p className="text-[#4d7399] font-['Public_Sans'] text-sm leading-[21px]">
                Our range of smart water meters offers solutions for every
                household, from basic monitoring to advanced control and
                analytics. Select the model that best fits your needs and
                upgrade as your requirements evolve.
              </p>
            </div>
          </div>

          {/* Model 1: Basic Meter */}
          <div className="mb-8">
            <h2 className="text-blue-meter-dark font-['Public_Sans'] text-xl font-bold leading-7 mb-4 px-4">
              Model 1: Basic Meter
            </h2>
            <div className="px-4">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-8">
                <div className="flex flex-col gap-4 flex-1 max-w-lg">
                  <div className="space-y-1">
                    <h3 className="text-blue-meter-dark font-['Public_Sans'] text-base font-bold leading-5">
                      Basic Meter
                    </h3>
                    <p className="text-[#4d7399] font-['Public_Sans'] text-sm leading-[21px]">
                      Precise volume tracking (L), Email alerts for usage
                      thresholds , Manual valve control. Ideal for small
                      homeowners focused on basic monitoring.
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
                    src="https://placehold.co/300x171/6B8CAE/6B8CAE"
                    alt="Basic Water Meter"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Model 2: Borewell Meter */}
          <div className="mb-8">
            <h2 className="text-blue-meter-dark font-['Public_Sans'] text-xl font-bold leading-7 mb-4 px-4">
              Model 2: Borewell Meter
            </h2>
            <div className="px-4">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-8">
                <div className="flex flex-col gap-4 flex-1 max-w-lg">
                  <div className="space-y-1">
                    <h3 className="text-blue-meter-dark font-['Public_Sans'] text-base font-bold leading-5">
                      Borewell Meter
                    </h3>
                    <p className="text-[#4d7399] font-['Public_Sans'] text-sm leading-[21px]">
                      Adds: Specialized sensors for borewell water level and
                      quality monitoring, Integration with existing borewell
                      infrastructure, Real-time data on water availability and
                      quality. Ideal for users managing borewells, seeking to
                      optimize usage and monitor water conditions.
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
                    src="https://placehold.co/300x171/4ECDC4/4ECDC4"
                    alt="Borewell Water Meter"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Model 3: Secure Meter */}
          <div className="mb-8">
            <h2 className="text-blue-meter-dark font-['Public_Sans'] text-xl font-bold leading-7 mb-4 px-4">
              Model 3: Secure Meter
            </h2>
            <div className="px-4">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-8">
                <div className="flex flex-col gap-4 flex-1 max-w-lg">
                  <div className="space-y-1">
                    <h3 className="text-blue-meter-dark font-['Public_Sans'] text-base font-bold leading-5">
                      Secure Meter
                    </h3>
                    <p className="text-[#4d7399] font-['Public_Sans'] text-sm leading-[21px]">
                      Adds: Encrypted communications (device↔cloud), SOC-2
                      compliant data handling. Designed for privacy-focused
                      users (e.g., rental properties).
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
                    src="https://placehold.co/300x171/5A6C7D/5A6C7D"
                    alt="Secure Water Meter"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Model 4: Analytics Meter */}
          <div className="mb-8">
            <h2 className="text-blue-meter-dark font-['Public_Sans'] text-xl font-bold leading-7 mb-4 px-4">
              Model 4: Analytics Meter
            </h2>
            <div className="px-4">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-8">
                <div className="flex flex-col gap-4 flex-1 max-w-lg">
                  <div className="space-y-1">
                    <h3 className="text-blue-meter-dark font-['Public_Sans'] text-base font-bold leading-5">
                      Analytics Meter
                    </h3>
                    <p className="text-[#4d7399] font-['Public_Sans'] text-sm leading-[21px]">
                      Adds: Cloud analytics: real-time flow rate, trend graphs,
                      daily/monthly reports, Leak pattern detection using AI.
                      Great for eco-conscious households, detects abnormal usage
                      trends.
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
                    src="https://placehold.co/300x171/7FB069/7FB069"
                    alt="Analytics Water Meter"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Model 5: Smart Meter with Top-up & Automation */}
          <div className="mb-8">
            <h2 className="text-blue-meter-dark font-['Public_Sans'] text-xl font-bold leading-7 mb-4 px-4">
              Model 5: Smart Meter with Top-up &amp; Automation
            </h2>
            <div className="px-4">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-8">
                <div className="flex flex-col gap-4 flex-1 max-w-lg">
                  <div className="space-y-1">
                    <h3 className="text-blue-meter-dark font-['Public_Sans'] text-base font-bold leading-5">
                      Smart Meter with Top-up &amp; Automation
                    </h3>
                    <p className="text-[#4d7399] font-['Public_Sans'] text-sm leading-[21px]">
                      Adds: Configurable usage caps with auto-top-up, Auto valve
                      shut-off on cap breach followed by alert. Ideal for
                      pre-paid setups or strict usage control.
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
                    src="https://placehold.co/300x171/6B8CAE/6B8CAE"
                    alt="Smart Meter with Automation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Model 6: Pro Valve Meter */}
          <div className="mb-12">
            <h2 className="text-blue-meter-dark font-['Public_Sans'] text-xl font-bold leading-7 mb-4 px-4">
              Model 6: Pro Valve Meter
            </h2>
            <div className="px-4">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-8">
                <div className="flex flex-col gap-4 flex-1 max-w-lg">
                  <div className="space-y-1">
                    <h3 className="text-blue-meter-dark font-['Public_Sans'] text-base font-bold leading-5">
                      Pro Valve Meter
                    </h3>
                    <p className="text-[#4d7399] font-['Public_Sans'] text-sm leading-[21px]">
                      Adds: High-pressure valve actuator with remote/manual
                      override, Programmable schedules (e.g., irrigation time
                      windows), Multi-parameter monitoring (flow + pressure).
                      Suited for sophisticated smart-home systems or small
                      commercial setups.
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
                    src="https://placehold.co/300x171/8B7355/8B7355"
                    alt="Pro Valve Water Meter"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mb-8">
            <h2 className="text-blue-meter-dark font-['Public_Sans'] text-xl font-bold leading-7 mb-4 px-4">
              Comparison Table
            </h2>
            <div className="px-3">
              <div className="border border-[#cfdbe8] rounded-xl bg-blue-meter-gray overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[800px]">
                    {/* Table Header */}
                    <thead>
                      <tr className="bg-blue-meter-gray">
                        <th className="text-left p-3 text-blue-meter-dark font-['Public_Sans'] text-sm font-medium w-[105px]">
                          Model
                        </th>
                        <th className="text-left p-3 text-blue-meter-dark font-['Public_Sans'] text-sm font-medium w-[126px]">
                          Connectivity
                        </th>
                        <th className="text-left p-3 text-blue-meter-dark font-['Public_Sans'] text-sm font-medium w-[109px]">
                          Analytics &amp; Reporting
                        </th>
                        <th className="text-left p-3 text-blue-meter-dark font-['Public_Sans'] text-sm font-medium w-[146px]">
                          Auto-Top-Up / Scheduling
                        </th>
                        <th className="text-left p-3 text-blue-meter-dark font-['Public_Sans'] text-sm font-medium w-[103px]">
                          Pro Valve Control
                        </th>
                        <th className="text-left p-3 text-blue-meter-dark font-['Public_Sans'] text-sm font-medium w-[128px]">
                          Encryption
                        </th>
                        <th className="text-left p-3 text-blue-meter-dark font-['Public_Sans'] text-sm font-medium w-[111px]">
                          Target Use Case
                        </th>
                      </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                      <tr className="border-t border-[#e5e8eb]">
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          Basic Meter
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          ---
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          ---
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          ---
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          Manual
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          ---
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          Simple water tracking
                        </td>
                      </tr>
                      <tr className="border-t border-[#e5e8eb]">
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          Borewell Meter
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          Wi-Fi/NB-IoT
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          ---
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          ---
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          Manual
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          ---
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          Remote access homes
                        </td>
                      </tr>
                      <tr className="border-t border-[#e5e8eb]">
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          Secure Meter
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          Wi-Fi/NB-IoT
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          ---
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          ---
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          Manual
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          Encrypted
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          Privacy-sensitive users
                        </td>
                      </tr>
                      <tr className="border-t border-[#e5e8eb]">
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          Analytics Meter
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          Cloud
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          Usage trends, leak detection
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          ---
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          Manual
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          Encrypted
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          Eco-conscious families
                        </td>
                      </tr>
                      <tr className="border-t border-[#e5e8eb]">
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-25">
                          Smart Meter
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-25">
                          Cloud
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-25">
                          ---
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-25">
                          Yes
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-25">
                          Auto cap recharge + email
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-25">
                          Auto/Manual
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-25">
                          Encrypted
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-25">
                          Caps-based water budgeting
                        </td>
                      </tr>
                      <tr className="border-t border-[#e5e8eb]">
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          Pro Valve Meter
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          Cloud
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          Yes
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          Auto/scheduled valve control
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          High-pressure valve
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          Encrypted
                        </td>
                        <td className="p-3 text-blue-meter-dark font-['Public_Sans'] text-sm h-20">
                          Smart home &amp; small biz
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OurProducts;
