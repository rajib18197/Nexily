import { getServicesData } from "@/lib/servicesData";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default async function ServicesSection() {
  const services = await getServicesData();

  return (
    <section id="services" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-sub">Services</h2>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-bold text-muted-foreground leading-tight sm:leading-normal max-w-full sm:max-w-3xl sm:text-left">
              We offer a wide range of services to help your business thrive in
              the digital age.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div
                className="h-full rounded-xl p-6 flex flex-col"
                style={{
                  backgroundColor: "hsl(221.2 83.2% 53.3%)",
                  color: "white",
                }}
              >
                <div className="mb-4 w-10 h-10 rounded-full bg-[#3d4675] flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      fill="white"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z"
                      fill="white"
                    />
                  </svg>
                  {/* {service.icon} */}
                </div>

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
                      className={`ml-2 h-4 w-4 transition-transform ${
                        hoveredCard === service.id ? "translate-x-1" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
