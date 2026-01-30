import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-scroll";

// Images
import arrow from "./Arrow.png";
import me from "./me.png";
import rocket from "./3dicons-rocket-dynamic-color.png";
import trophy from "./3dicons-trophy-dynamic-color.png";
import chart from "./3dicons-chart-iso-color.png";
import gradcap from "./Icon 1 - Graduation Hat.png";
import cloud from "./Cloud.png";
import ellipse from "./Ellipse 5.png";
import pythonIcon from "./Python.png";
import javaIcon from "./Java.png";
import jsIcon from "./JavaScript.png";
import cIcon from "./C.png";
import csharpIcon from "./CSharp.png";
import rIcon from "./R.png";
import htmlIcon from "./HTML5.png";
import cssIcon from "./CSS3.png";
import tailwindIcon from "./Tailwind CSS.png";
import postcssIcon from "./PostCSS.png";
import reactIcon from "./React.png";
import nodeIcon from "./Node.js.png";
import mongoIcon from "./MongoDB.png";
import mysqlIcon from "./MySQL.png";
import postgresIcon from "./PostgresSQL.png";
import vscodeIcon from "./Visual Studio Code (VS Code).png";
import gitIcon from "./Git.png";
import githubIcon from "./GitHub.png";
import awsIcon from "./aws.png";
import androidIcon from "./Android.png";
import androidStudioIcon from "./Android Studio.png";
import anacondaIcon from "./Anaconda.png";
import jupyterIcon from "./Jupyter.png";
import numpyIcon from "./NumPy.png";
import sqlDevIcon from "./SQL Developer.png";
import tfIcon from "./TensorFlow.png";
import latexIcon from "./LaTeX.png";
import figmaIcon from "./Figma.png";
import PowerBIIcon from "./PowerBI.png";
import githubSocialIcon from './icons8-github-50.png';
import instagramIcon from './icons8-instagram-50.png';
import linkedinSocialIcon from './icons8-linked-in-50.png';
import xIcon from './icons8-x-50.png';




export default function Portfolio() {

 const techStack = [
     { name: "Python", img: pythonIcon },
     { name: "Java", img: javaIcon },
     { name: "JavaScript", img: jsIcon },
     { name: "C", img: cIcon },
     { name: "C#", img: csharpIcon },
     { name: "R", img: rIcon },
     { name: "HTML5", img: htmlIcon },
     { name: "CSS", img: cssIcon },
     { name: "Tailwind CSS", img: tailwindIcon },
     { name: "PostCSS", img: postcssIcon },
     { name: "ReactJS", img: reactIcon },
     { name: "Node.js", img: nodeIcon },
     { name: "MongoDB", img: mongoIcon },
     { name: "MySQL", img: mysqlIcon },
     { name: "PostgreSQL", img: postgresIcon },
     { name: "VS Code", img: vscodeIcon },
     { name: "Git", img: gitIcon },
     { name: "GitHub", img: githubIcon },
     { name: "AWS", img: awsIcon },
     { name: "Android", img: androidIcon },
     { name: "Android Studio", img: androidStudioIcon },
     { name: "Anaconda", img: anacondaIcon },
     { name: "Jupyter", img: jupyterIcon },
     { name: "NumPy", img: numpyIcon },
     { name: "SQL Developer", img: sqlDevIcon },
     { name: "TensorFlow", img: tfIcon },
     { name: "LaTeX", img: latexIcon },
     { name: "Figma", img: figmaIcon },
     { name: "PowerBI", img: PowerBIIcon },
   ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
  
    const templateParams = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
  
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

      .then(() => {
        toast.success("Message sent successfully! 🚀");
        e.target.reset();
      })
      .catch((error) => {
        console.error("🔥 EmailJS send() error:", error);
        toast.error("Oops! Something went wrong 😥");
      });
  };  

  return (
    <div className="text-white font-comic overflow-x-hidden">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 bg-[#1c0a33] bg-opacity-90 fixed top-0 left-0 w-full z-50 backdrop-blur-md">
        <div className="text-2xl font-bold">Glawin Alva</div>
        <div className="space-x-6">
          <Link to="home" smooth offset={-70} duration={500} className="cursor-pointer hover:underline">Home</Link>
          <Link to="journey" smooth offset={-70} duration={500} className="cursor-pointer hover:underline">Journey</Link>
          <Link to="skills" smooth offset={-70} duration={500} className="cursor-pointer hover:underline">Skills</Link>
          <Link to="projects" smooth offset={-70} duration={500} className="cursor-pointer hover:underline">Projects</Link>
          <Link to="contact" smooth offset={-70} duration={500} className="cursor-pointer hover:underline">Contact</Link>
          <a href="/Glawin_Data_Engineer_CV.pdf" download className="cursor-pointer hover:underline">Resume</a>
        </div>
      </nav>

            {/* Hero Section */}
            <section id="home" className="pt-40 pb-24 bg-[#0b0b1f] px-6">
        <div className="flex flex-col md:flex-row items-center justify-center text-left">
          {/* Left: Profile Image */}
          <div className="relative mb-10 md:mb-0 md:mr-20">
            <div className="rounded-full w-fit mx-auto transition-all duration-300 hover:shadow-[0_0_40px_15px_rgba(168,85,247,0.6)]">
              <img src={me} alt="me" className="w-42 md:w-65 rounded-full" />
            </div>
            <p className="absolute -top-6 left-[225px] text-sm md:text-base text-white font-semibold whitespace-nowrap">
              Hi, I’m Glawin<span className="text-purple-400">Glawin</span>
            </p>
            <img src={arrow} alt="arrow" className="absolute -top-7 left-[129px] w-34 rotate-[-380deg]" />
          </div>

          {/* Right: Intro Text */}
          <div className="text-center md:text-left max-w-xl relative">
             <p className="text-lg font-semibold mb-2 text-purple-300">
               Data Engineer working across AI and analytics </p>
               <h1 className="text-3xl md:text-4xl font-extrabold leading-tight relative z-10">
                Turning messy data into <span className="text-purple-400">something useful.</span></h1>
                <p className="mt-2 text-base md:text-lg text-[#dddddd]">
                  I focus on ETL, data pipelines, and cloud analytics using Python, SQL and AWS.</p>


            {/* Social Media Icons */}
            <div className="mt-4 flex justify-center md:justify-start gap-6">
              <a href="https://www.linkedin.com/in/glawin-alva-88a93b212/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinSocialIcon} alt="LinkedIn" className="w-6 h-6 hover:scale-150 transition-transform duration-300" />
              </a>
              <a href="https://github.com/GlawinAlva24" target="_blank" rel="noopener noreferrer">
                <img src={githubSocialIcon} alt="GitHub" className="w-6 h-6 hover:scale-150 transition-transform duration-300" />
              </a>
              <a href="https://x.com/GlawinAlva" target="_blank" rel="noopener noreferrer">
                <img src={xIcon} alt="Twitter/X" className="w-6 h-6 hover:scale-150 transition-transform duration-300" />
              </a>
              <a href="https://www.instagram.com/just_glawin/" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" className="w-6 h-6 hover:scale-150 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
           {/* About Section */}
<section id="about" className="px-6 pt-8 pb-60 bg-[#0b0b1f] w-full flex justify-center">
  <div className="max-w-4xl text-left">
    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
      I'm a <span className="text-purple-400">
        <Typewriter
          words={[
            "Data Engineer.",
            "AWS Certified Data Engineer.",
            "Data & Analytics Specialist.",
            "Machine Learning Enthusiast.",
            "Master's Graduate in AI & Business Strategy🎓.",
            "Meme-powered Debugger.",
            "Certified Coffee Coder☕.",
             "Occasional over-thinker of data models.",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={2000}
          cursorClassName="typewriter-cursor"
        />
      </span>
    </h2>
    <p className="text-base md:text-lg text-[#cccccc] leading-relaxed">
      I’m an AWS Certified Data Engineer with a Master’s in AI and Business Strategy (Distinction).
      I enjoy building reliable data pipelines, cleaning up messy datasets, and making sure
      reporting is clear and dependable for the people who rely on it.
      <br />
      I’ve worked with Python, SQL and AWS services, and I’m comfortable moving between
      technical work and practical business needs. I tend to focus on keeping things simple, maintainable, and well thought through.</p>

    <div className="mt-12 flex justify-center">
      <a
        href="/Glawin_CV.pdf"
        download
        className="inline-block px-6 py-3 font-semibold rounded-md bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-white shadow-md"
      >
        Download CV
      </a>
    </div>
  </div>
</section>
      
          {/* Journey Section */}
<section id="journey" className="px-6 pt-16 pb-24 bg-[#0b0b1f] relative">
  <div className="relative -mt-5 mb-16 flex justify-center" data-aos="fade-in" data-aos-delay="300" data-aos-duration="1500">
    <h2 className="text-3xl font-bold text-center text-white z-10">Life's Conquests So Far</h2>
    <img
      src={ellipse}
      alt="ellipse"
      className="absolute -top-6 w-[420px] h-[80px] z-0 opacity-50"
      data-aos="fade-in"
      data-aos-delay="300"
      data-aos-duration="1500"
    />
  </div>

  {/* Floating Icons */}
  <img src={rocket} alt="rocket" className="absolute right-[10rem] top-[6%] w-[18rem] z-10 object-contain" data-aos="fade-up" />
  <img src={trophy} alt="trophy" className="absolute left-[10rem] top-[23%] w-[18rem] z-10 object-contain" data-aos="fade-up" />
  <img src={chart} alt="chart" className="absolute right-[10rem] top-[38%] w-[18rem] z-10 object-contain" data-aos="fade-up" />
  <img src={gradcap} alt="graduation hat" className="absolute left-[11rem] top-[53%] w-[20rem] z-10 object-contain" data-aos="fade-up" />
  <img src={cloud} alt="cloud" className="absolute right-[10rem] top-[72%] w-[20rem] z-10 object-contain" data-aos="fade-up" />

  {/* Timeline Entries */}
  <div className="relative z-10">
    {[
      {
        side: "left",
        title: "My journey began with a BSc in Information Technology",
        content: "Dove into the world of computers, mastering Java, Python, and the math behind it all. It sparked the beginning."
      },
      {
        side: "right",
        title: "NIIT — National Institute of Information Technology",
        content: "Learned full-stack dev and mobile apps. This is where ideas turned into actual, usable software."
      },
      {
        side: "left",
        title: "Associate IT Role @ Tata AIG",
        content: "ETL pipelines, Power BI dashboards, automation, and data. This is where I fell in love with impact."
      },
      {
        side: "right",
        title: "Master’s in AI & Business Strategy",
        content: "Blending machine learning with cloud and business sense at Aston University, UK. The next level."
      },
      {
        side: "left",
        title: "Currently pursuing AWS certification",
        content: "Mastering scalable systems in the cloud — S3, Lambda, IAM, and beyond."
      }
    ].map((entry, index) => (
      <div key={index} className={`relative flex md:items-center w-full mb-24 ${entry.side === 'left' ? 'justify-start' : 'justify-end'}`} data-aos={entry.side === 'left' ? 'fade-right' : 'fade-left'}>
        <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-purple-400 rounded-full z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className={`w-full md:w-1/2 flex ${entry.side === 'left' ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
          <div className="bg-[#1c0a33] border border-purple-500 p-6 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-[0_0_30px_10px_rgba(168,85,247,0.4)]">
            <h3 className="text-white text-lg font-bold">{entry.title}</h3>
            <p className="text-white text-sm mt-2">{entry.content}</p>
          </div>
        </div>
      </div>
    ))}
    <div className="absolute left-1/2 transform -translate-x-1/2 top-[70px] bottom-[60px] w-1 bg-purple-400 z-0"></div>
  </div>
</section>
{/* Skills / Tech Stack Section */}
<section id="skills" className="px-6 pt-20 pb-24 bg-[#0b0b1f] relative z-10">
  <div className="relative mb-12 text-center" data-aos="fade-in">
    <p className="text-lg text-[#ccc] uppercase tracking-widest mb-2">
      I constantly try to improve
    </p>
    <h2 className="text-4xl font-bold text-white">My Tech Stack</h2>
  </div>

  <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
    {techStack.map((tech, index) => (
      <div
        key={index}
        data-aos="fade-up"
        data-aos-delay={index * 100}
        data-aos-duration="600"
        className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[#1f1f2e] transition duration-300 transform hover:rotate-[-3deg] hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(168,85,247,0.4)]"
      >
        <img
          src={tech.img}
          alt={tech.name}
          className="w-5 h-5 object-contain transition-transform duration-300 group-hover:scale-150"
        />
        <span className="text-white text-sm font-medium transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-indigo-400 group-hover:bg-clip-text group-hover:text-transparent">
          {tech.name}
        </span>
      </div>
    ))}
  </div>
</section>
{/* Projects Section */}
<section id="projects" className="px-6 pt-20 pb-24 bg-[#0b0b1f] text-white">
  <div className="text-center mb-12" data-aos="fade-in">
    <h2 className="text-4xl font-bold">Projects</h2>
    <p className="text-lg text-gray-400 mt-2">Some things I've built recently</p>
  </div>

  <div className="grid gap-10 max-w-6xl mx-auto">
    {[
      {
        title: "Energy Consumption Forecasting & Anomaly Detection",
        description: "Built an end-to-end pipeline to process and analyse energy consumption data. Implemented forecasting and anomaly detection models to identify unusual usage patterns, supporting better monitoring and decision-making.",
        link: "https://github.com/GlawinAlva24/Energy-Consumption-Forecasting-Anomaly-Detection"
      },
      {
        title: "Big Data for UK Road Safety Risk Prediction",
        description: "Developed data pipelines and predictive models to assess road safety risks using large-scale UK datasets. The project focuses on identifying high-risk patterns to support data-driven insurance and safety analysis.",
        link: "https://github.com/GlawinAlva24/Big-Data-Road-Safety-Risk-Prediction"
      },
      {
        title: "UK E-Commerce Customer Segmentation and Fraud Detection",
        description: "Analysed UK e-commerce data to segment customers and detect fraudulent behaviour. Applied clustering and machine learning models to improve customer understanding and support more reliable fraud detection.",
        link: "https://github.com/GlawinAlva24/UK-E-Commerce-Customer-Segmentation-Fraud-Detection-and-ML-Applications"
      }
    ].map((project, index) => (
      <div
        key={index}
        className="bg-[#1c0a33] border border-purple-500 p-8 rounded-xl shadow-md hover:shadow-[0_0_30px_10px_rgba(168,85,247,0.4)] transition-all duration-300"
        data-aos="fade-up"
        data-aos-delay={index * 200}
      >
        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
        <p className="text-gray-300 mb-6">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition"
        >
          View Project
        </a>
      </div>
    ))}
  </div>
</section>

{/* Contact Section */}
<section id="contact" className="bg-[#0b0b1f] px-6 py-20">
  <div className="max-w-3xl mx-auto text-center" data-aos="fade-in">
    <h2 className="text-4xl font-bold text-white mb-4">Get in touch</h2>
    <p className="text-[#ccc] text-lg mb-10">
      If you’d like to chat about data engineering, projects, or roles, feel free to get in touch.
    </p>

    {/* Social Reach Buttons */}
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16">
      <span className="text-white font-semibold">Have a chat:</span>
      <a
        href="mailto:glawin24@gmail.com"
        className="px-6 py-2 border rounded-md font-bold text-white hover:scale-105 transition-all duration-300 group"
        style={{ borderImage: "linear-gradient(to right, #FDE68A, #8B5CF6) 1", borderImageSlice: 1 }}
      >
        <span className="group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-indigo-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          EMAIL
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/glawin-alva-88a93b212/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 border rounded-md font-bold text-white hover:scale-105 transition-all duration-300 group"
        style={{ borderImage: "linear-gradient(to right, #6EE7B7, #9333EA) 1", borderImageSlice: 1 }}
      >
        <span className="group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-indigo-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          LINKEDIN
        </span>
      </a>
    </div>
  </div>

  {/* Contact Form */}
  <form
    onSubmit={sendEmail}
    className="max-w-2xl mx-auto bg-[#1c0a33] p-8 rounded-xl shadow-lg border border-purple-500"
    data-aos="fade-up"
    data-aos-delay="300"
    data-aos-duration="1000"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div>
        <label className="block text-white mb-2 font-semibold">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full px-4 py-3 rounded-md bg-[#2d2d44] text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>
      <div>
        <label className="block text-white mb-2 font-semibold">Email</label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          required
          className="w-full px-4 py-3 rounded-md bg-[#2d2d44] text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>
    </div>
    <div className="mb-6">
      <label className="block text-white mb-2 font-semibold">Message</label>
      <textarea
        name="message"
        rows="5"
        placeholder="Let's build something great..."
        required
        className="w-full px-4 py-3 rounded-md bg-[#2d2d44] text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
      ></textarea>
    </div>
    <button
      type="submit"
      className="w-full py-3 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-bold text-white"
    >
      SEND MESSAGE
    </button>
  </form>

  {/* Toastify Notifications */}
  <ToastContainer
    position="bottom-right"
    autoClose={4000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
  />
</section>

    </div>
  );
}
