import { ArrowRight } from "lucide-react";
import { Motion, MotionHeading } from "./Motion";
import connectToDatabase from "@/lib/mongodb";
import Service from "@/models/Service";

async function ServicesSection() {
  await connectToDatabase();

  const servicesRes = await Service.find({ isActive: true }).sort({ order: 1 });
  const services = JSON.parse(JSON.stringify(servicesRes));

  return (
    <section id="services" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16">
          <MotionHeading>
            <h2 className="heading-sub">Services</h2>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-bold text-muted-foreground leading-tight sm:leading-normal max-w-full sm:max-w-3xl sm:text-left">
              We offer a wide range of services to help your business thrive in
              the digital age.
            </p>
          </MotionHeading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Motion index={index} key={service._id}>
              <div
                className="h-full rounded-xl p-6 flex flex-col"
                style={{
                  backgroundColor: "hsl(221.2 83.2% 53.3%)",
                  color: "white",
                }}
              >
                <div className="mb-4 w-10 h-10 rounded-full bg-[#3d4675] flex items-center justify-center"></div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>

                <p className="text-sm text-white mb-6">{service.description}</p>

                {service.bulletPoints.length > 0 && (
                  <ul className="mb-6 space-y-1 text-sm text-gray-100">
                    {service.bulletPoints.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-white">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto">
                  <button
                    className={`group flex text-center items-center justify-center text-sm font-medium hover:text-white transition-colors`}
                    style={{
                      textAlign: "center",
                      width: "100%",
                      background: "white",
                      color: "#101d28",
                      padding: "10px 20px",
                      borderRadius: "100px",
                      cursor: "pointer",
                    }}
                  >
                    {service.buttonText}
                    <ArrowRight
                      className={`ml-2 h-4 w-4 transition-transform`}
                    />
                  </button>
                </div>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
