import Section from "./Section";
import { motion } from "framer-motion";
import { forTheseIndustries, conferenceTheme } from "../constants";
import { Gradient } from "./design/Services";
import { service3 } from "../assets";
import ParticleNetwork from "./ParticleNetwork";

const AboutUs = () => {
  return (
    <Section crosses id="about">
      <Gradient />
      
      <div className="container px-4 md:px-6 py-8 md:py-16">
        <div className="relative z-1 items-center min-h-[20rem] mb-8 md:mb-12 bg-conic-gradient p-0.25 rounded-[2.5rem] overflow-hidden">
          <div className="relative p-4 md:p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
            <div className="relative z-1">
              <div className="relative lg:left-40 z-2 mx-auto">
                <motion.div 
                  className="max-w-[50rem] mx-auto text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 1, delay: 0.1 }}
                >
                  <motion.h2 
                    className="h2 text-center mb-6 md:mb-8 text-2xl md:text-4xl"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
                  >
                    Summit At A Glance 
                  </motion.h2>
                  <motion.div
                    className="space-y-4 md:space-y-6 px-3 md:px-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    {[0, 1, 2].map((index) => (
                      <p key={index} className="body-2 text-n-2 text-center text-sm md:text-base">
                        {index === 0 && "Over the last few years, UAE has swiftly positioned itself as a global hub for technology and innovation, with a strong focus on AI, cybersecurity and digital evolution. The country's vision is not just to keep pace with technological advancements but to lead the way in shaping the future. UAE's leadership has consistently emphasized its ambition to be a global leader in digital transformation. The country is committed to being at the forefront of global digital transformation and become an international centre of excellence for future industries. This vision is backed by robust infrastructure, a growth-friendly environment, and an open-door policy to attract top global technology firms. The region has become a magnet for entrepreneurs, tech giants, and industry leaders from across the world, eager to collaborate and build cutting-edge solutions."}
                        {index === 1 && "AI has emerged as one of the cornerstones of the UAE's digital transformation. The government has already introduced AI-driven projects like self-driving vehicles, predictive policing, and smart healthcare systems. These innovations reflect the UAE's commitment to creating a future where AI not only thrives but also operates safely and responsibly within a well-defined regulatory framework. The UAE's dedication to AI extends across multiple sectors, including transportation, law enforcement, healthcare, and education, all aimed at improving efficiency and quality of life for its citizens."}
                        {index === 2 && "Paying heed to the above, Let's TalkB2B is bringing the 13th Middle East Enterprise AI & Analytics Summit & Awards 2025. Through this UAE edition you will discover how the integration of data, analytics and AI is revolutionizing industries. By combining these powerful tools, how can organizations unlock new insights, enhance decision making and drive innovation like never before. Register now to experience industry perspectives and discussion on integrating AI & Analytics, Created by and for the leaders in the region."}
                      </p>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
            
            <div className="absolute left-0 top-0 w-full h-full pointer-events-none hidden md:block">
              <img
                className="w-full h-full object-contain object-left opacity-30"
                width={150}
                height={100}
                alt="Smartest AI"
                src={service3}
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <div id="theme" className="relative z-1 grid gap-8 lg:grid-cols-2 mt-12 md:mt-16">
            {/* For These Industries Section */}
            <div className="relative min-h-[28rem] md:min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
            <ParticleNetwork />
            <div className="relative z-10 py-6 md:py-12 px-4 md:px-8">
                <p className="h2 mb-6 md:mb-12 text-xl md:text-2xl text-center">For These Industries</p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-8 md:gap-8 max-w-[95%] mx-auto">
                  {forTheseIndustries.slice(0, 9).map((item, index) => (
                    <motion.li
                      key={index}
                      className={`flex flex-col items-center justify-center ${
                        index === conferenceTheme.length - 1 && conferenceTheme.length % 2 !== 0
                          ? 'col-span-2 sm:col-span-1'
                          : ''
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div 
                        className="rounded-2xl w-[3.5rem] h-[3.5rem] md:w-[4.5rem] md:h-[4.5rem] p-0.25 bg-conic-gradient cursor-pointer"
                        whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(255,255,255,0.15)" }}
                      >
                        <div className="flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]">
                          <img 
                            src={item.icon} 
                            width={24}
                            height={24}
                            alt={item.tag}
                            className="w-9 md:w-12"
                          />
                        </div>
                      </motion.div>
                      <span className="mt-2 text-center text-xs md:text-sm font-medium text-gray-400">
                        {item.name}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Conference Theme Section */}
            <div className="relative min-h-[28rem] md:min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden mb-8 md:mb-0">
              <ParticleNetwork />
              <div className="relative z-10 py-6 md:py-12 px-4 md:px-8">
                <p className="h2 mb-6 md:mb-12 text-xl md:text-2xl text-center">Conference Theme</p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-8 md:gap-8 max-w-[95%] mx-auto">
                  {conferenceTheme.slice(0, 9).map((item, index) => (
                    <motion.li
                      key={index}
                      className={`flex flex-col items-center justify-center ${
                        index === conferenceTheme.length - 1 && conferenceTheme.length % 2 !== 0
                          ? 'col-span-2 sm:col-span-1'
                          : ''
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div 
                        className="rounded-2xl w-[3.5rem] h-[3.5rem] md:w-[4.5rem] md:h-[4.5rem] p-0.25 bg-conic-gradient cursor-pointer"
                        whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(255,255,255,0.15)" }}
                      >
                        <div className="flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]">
                          <img 
                            src={item.icon} 
                            width={24}
                            height={24}
                            alt={item.name}
                            className="w-9 md:w-12"
                          />
                        </div>
                      </motion.div>
                      <span className="mt-2 text-center text-xs md:text-sm font-medium text-gray-400">
                        {item.name}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;