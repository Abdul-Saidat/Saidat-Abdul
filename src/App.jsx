import "./App.css";
import { MailIcon } from "lucide-react";
import { PhoneIcon } from "lucide-react";
import github from "./assets/icons8-github-24.png";
import x from "./assets/icons8-x-50 (1).png";
import linkedln from "./assets/icons8-linkedin-48.png";
import productPage from "./assets/E-commerce-Product-page-screenshot2.png";
import interiorDesign from "./assets/Interior-Web-Design-Website-2.png";
import space from "./assets/Space-Tourism-Website-screenshot.png";
import { MenuIcon } from "lucide-react";
function App() {
  return (
    <>
      <section className="py-8">
        <div className="w-full md:w-3xl mx-auto mb-10 bg-[#232323] flex justify-between px-5 py-5 rounded-sm ">
          <span className="md:text-xl text-[18px] text-fuchsia-600">
            <b> SAIDAT ABDUL </b>
          </span>
          <span className="text-white md:hidden">
            <MenuIcon />
          </span>
          <div className="hidden md:flex">
            <nav className="flex gap-10">
              <a
                className="text-white hover:text-gray-300 cursor-pointer"
                href="#projects"
              >
                MY PROJECTS
              </a>
              <a
                className="text-white hover:text-gray-300 cursor-pointer"
                href="#about"
              >
                ABOUT ME
              </a>
              <a
                className="text-white hover:text-gray-300 cursor-pointer"
                href="#contactme"
              >
                CONTACT
              </a>
            </nav>
          </div>
        </div>
        <div className="w-[350px] md:w-3xl mx-auto flex flex-col gap-10 ">
          <div className=" py-12 px-8 bg-[#232323] rounded-md border-2 border-[#2C2C2C] ">
            <p className="text-white text-[29px] md:text-5xl">
              {" "}
              Hi, I'm Saidat Abdul,{" "}
            </p>
            <p className="text-white text-[29px] md:text-5xl">
              I'm a <span className="text-fuchsia-600">Frontend Engineer.</span>
            </p>
          </div>

          <section id="projects" className="mt-10">
            <h2 className="text-white mb-5">MY PROJECTS</h2>
            <div className="bg-[#1e1e1e] py-5 md:py-0 flex flex-col sm:flex-row items-center shadow-lg hover:shadow-xl transition-shadow rounded-2xl border-2 border-[#2C2C2C] overflow-hidden px-6">
              <img
                className="w-full sm:w-[400px] h-full sm:h-auto object-cover rounded-l-2xl"
                src={productPage}
                alt=""
              />
              <div className="text-white py-6 sm:p-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 hover:text-gray-300 transition-colors">
                  <a
                    href="https://e-commerce-product-page-oaic.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    E-commerce-product page
                  </a>
                </h3>
                <p className="mb-2">
                  This project showcases a product page for an E-commerce
                  website
                </p>
                <p className="mb-2">
                  Features: A lightbox product gallery and cart functionality
                </p>
                <p className="text-gray-400 text-sm">
                  Built with: HTML, CSS and TypeScript
                </p>
                <a
                  href="https://e-commerce-product-page-oaic.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-white inline-block bg-fuchsia-500 hover:bg-fuchsia-600 px-4 py-2 rounded-lg w-fit "
                >
                  Live Demo
                </a>
              </div>
            </div>
            <div className="bg-[#1e1e1e] py-5 md:py-0 flex flex-col sm:flex-row items-center shadow-lg hover:shadow-xl transition-shadow rounded-2xl border-2 border-[#2C2C2C] overflow-hidden px-6 mt-5">
              <img
                className="w-full sm:w-[400px] h-full sm:h-auto object-cover rounded-l-2xl"
                src={interiorDesign}
                alt=""
              />
              <div className="text-white py-6 sm:p-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 hover:text-gray-300 transition-colors">
                  <a
                    href="https://interior-web-design-delta.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Interior Design (In progress)
                  </a>
                </h3>
                <p className="mb-2">
                  A website for a business that offers interior decoration
                  services
                </p>
                <p className="mb-2">
                  Features: Showcases the core servives offered by the business,
                  smooth UI
                </p>
                <p className="text-gray-400 text-sm">
                  Built with: HtML and CSS
                </p>
                <a
                  href="https://interior-web-design-delta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-white inline-block bg-fuchsia-500 hover:bg-fuchsia-600 px-4 py-2 rounded-lg w-fit "
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className="bg-[#1e1e1e] py-5 md:py-0 flex flex-col sm:flex-row items-center shadow-lg hover:shadow-xl transition-shadow rounded-2xl border-2 border-[#2C2C2C] overflow-hidden px-6 mt-5">
              <img
                className="w-full sm:w-[400px] h-full sm:h-auto object-cover rounded-l-2xl"
                src={space}
                alt=""
              />
              <div className="text-white py-6 sm:p-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 hover:text-gray-300 transition-colors">
                  <a
                    href="https://space-tourism-website-snowy-phi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Space Tourism Website
                  </a>
                </h3>
                <p className="mb-2">
                  A responsive and interactive space exploration website that
                  introduces users to space destinations, crew members and
                  technology details.
                </p>
                <p className="text-gray-400 text-sm">
                  Built with HTML, CSS and TypeScript, React Router for optimal
                  routing.
                </p>
                <a
                  href="https://space-tourism-website-snowy-phi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-white inline-block bg-fuchsia-500 hover:bg-fuchsia-600 px-4 py-2 rounded-lg w-fit "
                >
                  Live Demo
                </a>
              </div>
            </div>
          </section>
          <section id="about">
            <h3 className="text-white mb-5"> ABOUT ME </h3>
            <div className="px-8 py-12 bg-[#232323] text-white border-2 border-[#2C2C2C] rounded-md">
              <p>
                I'm Saidat Abdul, a{" "}
                <span className="text-fuchsia-600"> Frontend Engineer </span>{" "}
                and a Computer Science student, passionate about building
                scalable, engaging web applications with JavaScript, TypeScript,
                and React. I'm currently deepening my JS/TS skills and exploring
                Next.js soon to help me build more SEO-friendly and flexible
                applications. I'm also interested in expanding into mobile
                development with React Native. Feel free to explore my projects
                and reach out for collaborations.
              </p>
            </div>
          </section>

          <section id="contactme">
            <h3 className="text-white mb-5"> CONTACT ME </h3>
            <div className="flex items-center justify-between px-3 md:px-5 py-5 md:py-10 bg-[#232323] border-2 border-[#2C2C2C] rounded-md text-white ">
              <div className="flex flex-col gap-2 md:gap-5">
                <span className="hidden md:flex text-wrap gap-1 md:gap-2">
                  <MailIcon />
                  yewandeabdul822@gmail.com
                </span>
                <span className="flex gap-1 md:gap-2">
                  <PhoneIcon />
                  +234 9165 9002 64
                </span>
                <span className="flex gap-1 md:gap-2">
                  <img className="w-[25px]" src={linkedln} alt="" />
                  <a
                    href="https://www.linkedin.com/in/saidat-abdul/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Saidat Abdul
                  </a>
                </span>
              </div>
              <div className="flex flex-col gap-5">
                <span className="flex items-center gap-1 md:gap-2">
                  <img src={github} alt="" />
                  <a
                    href="https://github.com/Abdul-Saidat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abdul-Saidat
                  </a>
                </span>
                <span className="flex items-center gap-1 md:gap-2">
                  <img className="w-[25px]" src={x} alt="" />
                  <a
                    href="https://x.com/Sahhyddahabdul"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Saidat Abdul
                  </a>
                </span>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default App;
