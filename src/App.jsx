import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./responsive.css";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal"; // <-- IMPORT MODAL
import Aurora from "./components/Aurora/Aurora";
import AOS from 'aos';
import ChatRoom from "./components/ChatRoom";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Certificates from "./components/Certificates";
// ..


function App() {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true
  });
}, []);
  const aboutRef = useRef(null);
  const [startAnim, setStartAnim] = useState(false)
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
  const timer = setTimeout(() => {
    setStartAnim(true)
  }, 4000)

  return () => clearTimeout(timer)
}, [])

  const [selectedProject, setSelectedProject] = useState(null); // null = modal tertutup

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  // -------------------------

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      // Ambil path tanpa hash
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Aurora
          colorStops={["#2563eb", "#7c3aed", "#ec4899"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
  className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1"
  initial={{ opacity: 0 }}
  animate={startAnim ? { opacity: 1 } : {}}
  transition={{ duration: 1 }}
>
  
  
          <motion.div
  initial={{ opacity: 0, x: 80 }}
animate={startAnim ? { opacity: 1, x: 0 } : {}}
transition={{ duration: 1.2 }}
>
            <div className="flex items-center gap-3 mb-6 bg bg-zinc-800 w-fit p-4 rounded-2xl">
              <img src="/assets/faris1.png" className="w-10 rounded-md" />
              <q>Keep building. Keep improving</q>
            </div>
                       <h1 className="text-5xl font-bold mb-6">
              <ShinyText text="Hi I'm jamalul husnil mubaraq" disabled={false} speed={3} className='custom-class' />
            </h1>
{startAnim && (
  <BlurText
    text="A highly motivated application and web developer committed to delivering modern, high-performance digital experiences by combining innovation, efficiency, and user-centered design."
    delay={100}
    animateBy="words"
    direction="top"
    className="mb-6"
  />
)}
            <div className="flex items-center sm:gap-4 gap-2">
              <a 
                href="/assets/CV.pdf" 
                download="JamalulHusnilCV.pdf" 
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
              </a>
              

              <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
                <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
              </a>
<a href="#certificates" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
  <ShinyText text="My Certificates" disabled={false} speed={3} className="custom-class" />
</a>
            </div>

          </motion.div>
          <motion.div
  className="md:ml-auto"
  initial={{ opacity: 0, x: 120, scale: 0.9 }}
  animate={
  startAnim
    ? { opacity: 1, x: 0, scale: 1, y: [0, -15, 0] }
    : {}
}
  transition={{
    duration: 1.5,
    delay: 0.6,
    ease: "easeOut",
    y: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }}
>          <ProfileCard
              name=""
              title=""
              handle="JamalulHusnil"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/assets/faris.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </motion.div>
        </motion.div>
        {/* tentang */}
        <div className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.35)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6" id="about">
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 pt-0 px-8">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 md:pl-8 border-b md:border-b-0 md:border-l border-violet-500/30">
              {/* Kolom kiri */}
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  About Me
                </h2>

                <BlurText
                  text="I’m Jamalul Husnil Mubaraq,
I'm an Informatics Engineering student specializing in front-end development. I'm focused on creating engaging digital experiences and always strive to deliver the best solutions in every project I work on."
                  delay={50}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                    <h1 className="text-3xl md:text-4xl mb-1">
                      10<span className="text-violet-500">+</span>
                    </h1>
                    <p>Project Finished</p>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                    <h1 className="text-3xl md:text-4xl mb-1">
                      2<span className="text-violet-500">+</span>
                    </h1>
                    <p>Years of Experience</p>
                  </div>
                  <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                    <h1 className="text-3xl md:text-4xl mb-1">
                      3.98<span className="text-violet-500">/4.00</span>
                    </h1>
                    <p>GPA</p>
                  </div>
                </div>


                <ShinyText
                  text="Working with heart, creating with mind."
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-violet-400"
                />
              </div>
            </div>

            {/* Kolom kanan */}
            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>

        </div>
        <div className="tools mt-32">

<h1 className="text-5xl font-bold mb-4">
Tech Stack & Creative Toolkit
</h1>

<p className="text-zinc-400 mb-12 max-w-2xl">
Technologies I use to build web applications,
IoT systems and AI-powered solutions.
</p>


<div className="tools-box grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">

{listTools.map((tool)=>(

<div
key={tool.id}
data-aos="fade-up"
data-aos-delay={tool.dad}
className={`
rounded-3xl
border border-white/10
bg-white/5
backdrop-blur-xl
p-6
transition duration-500
hover:-translate-y-3
hover:shadow-[0_0_35px_rgba(168,85,247,.35)]
${tool.featured ? "lg:col-span-2" : ""}
`}
>

<div className="flex items-center gap-4 mb-5">
<img
src={tool.gambar}
alt={tool.nama}
className="w-14 h-14 object-contain"
/>

<div>
<h3 className="text-xl font-bold">
{tool.nama}
</h3>

<p className="text-zinc-400 text-sm">
{tool.ket}
</p>
</div>
</div>


<div className="flex justify-between text-sm mb-2">
<span className="text-zinc-400">
Proficiency
</span>

<span>
{tool.level}%
</span>
</div>


<div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
<div
className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
style={{width:`${tool.level}%`}}
></div>
</div>

</div>

))}

</div>
</div>
        {/* tentang */}

        {/* Certificates */}
<Certificates />

        {/* Proyek */}
        <div className="proyek mt-32 py-10" id="project" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"></div>
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Showcasing a selection of projects that reflect my skills, creativity, and passion for building meaningful digital experiences.</p>
        <div className="proyek-box mt-14" >

          <div style={{ height: 'auto', position: 'relative' }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true" >
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick} // Kirim fungsi untuk handle klik
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
        {/* Proyek */}


        {/* Kontak */}
        <div className="kontak mt-32 sm:p-10 p-0" id="contact">
          <h1
            className="text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Contact & Chat
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Get in touch with me or chat in real-time
          </p>

          {/* Container dua kolom */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Chat Room di kiri */}
            <div className="flex-1 bg-zinc-800 p-6 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
              <ChatRoom />
            </div>

            {/* Contact Form di kanan */}
            <div className="flex-1">
              <form
                action="https://formsubmit.co/husnil050123@gmail.com"
                method="POST"
                className="bg-zinc-800 p-10 w-full rounded-md"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Full Name</label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Input Name..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email</label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="Input Email..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="45"
                      rows="7"
                      placeholder="Message..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full w-full cursor-pointer border border-gray-700 hover:bg-[#222] transition-colors"
                    >
                      <ShinyText text="Send" disabled={false} speed={3} className="custom-class" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Kontak */}
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  )
}

export default App
