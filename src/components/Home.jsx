import React from "react";
import DescriptionContainer from "./DescriptionContainer";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Eduction from "./Eduction";
import Certifications from "./Certifications";
import Experience from "./Experience";
import ContactMe from "./ContactMe";
import LeetCodeStreak from "./LeetCodeStreak";

const Home = () => {
  const projectsInfo = [
    {
      id: "1",
      projectName: "Build Your Bio",
      tagline: "All-in-one link management and bio generation platform",
      techStack: ["React", "Express", "Firebase (Fireauth & Firebase)"],
      description:
        "Architected and developed a comprehensive full-stack platform for Vizhva (Garitech) combining three core services: ZapLink (link-in-bio tool), ZURL (URL shortener), and Biogram (AI bio generator).",
      features: [
        "Users can shorten their long URLs and get real-time analytics for the shortened URLs.",
        "Link-in-Bio allows users to display all their important links on a single page, with analytics available for that page.",
        "Users can customize their Link-in-Bio page using the template editor.",
        "Integrated AI features using Hugging Face models, visible in the ZapLink form.",
        "BioGram helps users create their portfolio by filling out a form, with the option to change the template.",
        "Users can generate a resume from BioGram using the details previously filled in the form.",
        "Secure user authentication and data storage.",
      ],
      screenshots: [
        "https://res.cloudinary.com/datvfcnme/image/upload/v1757756801/Screenshot_416_jrpstq.png",
        "https://res.cloudinary.com/datvfcnme/image/upload/v1757756801/Screenshot_415_izl90z.png",
        "https://res.cloudinary.com/datvfcnme/image/upload/v1757756800/Screenshot_414_kzmm0l.png",
      ],
      liveDemo: "https://buildyourbio.vizhva.com/bio-gram/portfolios",
      githubRepo: "https://github.com/Adhithya200503/agent-sync",
      challenges: [
        "Integrating three services seamlessly",
        "Implementing real-time preview for links",
        "Designing scalable backend architecture",
      ],
      contributors: [
        {
          name: "Arun D",
          role: "Frontend Developer",
          profile:
            "https://res.cloudinary.com/datvfcnme/image/upload/v1756367945/zaplink/link_images/gf2m96ntv2chtagpyzgj.png",
        },
        {
          name: "Boobesh AG",
          role: "UI Developer",
          profile:
            "https://res.cloudinary.com/datvfcnme/image/upload/v1753098701/nhfem9jjrvckqiutzmhj.jpg",
        },
      ],
    },
    {
      id: "2",
      projectName: "MyChatTwin",
      tagline: "A chatbot that speaks your mind, built from your data.",
      techStack: ["Python", "Gemini API", "FAISS"],
      description:
        "MyChatTwin is a terminal-based chatbot that uses my personal data stored locally to answer user queries. It leverages Facebook’s FAISS library to store and search vector representations on my laptop, reducing the cost of using external vector databases, and utilizes the Gemini API to convert data into vectors for efficient retrieval. The chatbot mimics my knowledge and responds based on the provided data, and if a user asks something outside its scope, it replies with “Adhithya didn’t mention that.” The accuracy of the responses depends on the amount of data supplied, making it a cost-effective, personalized AI solution built with open-source tools",
      features: [
        "The chatbot uses the data stored in the local files to answer user queries. It leverages my personal data, and if a user asks something out of context, it will respond with 'Adhithya didn't mention that.'",
        "I used Facebook’s FAISS to store vectors locally on my laptop, reducing the cost of storing the vector matrix in an external vector database.",
        "I used the Gemini API to convert the data into vectors for efficient searching.",
        "This is a terminal-based application.",
        "The accuracy of the answers depends on the amount of data provided by the user.",
      ],

      screenshots: [
        "https://res.cloudinary.com/datvfcnme/image/upload/v1757774312/Screenshot_429_vofgrr.png",
      ],
      liveDemo: "",
      githubRepo: "https://github.com/Adhithya200503/MyChatTwin",
      challenges: [
        "I didn’t face major problems because I mainly used the Gemini API key, but I spent extra time searching for a free API key.",
      ],
      contributors: [],
      
    },
    {
      id: "3",
      projectName: "E-Commerce Platform",
      tagline: "Full-featured E commerce Website",
      techStack: ["React", "Firebase"],
      description:
        "Developed a full-featured e-commerce website with user authentication, product catalog and shopping cart. Stored user and order data securely in Firestore.",
      features: [
        "Users can buy and sell products on the website.",
        "Delivery is managed using a round-robin system, where the least busy delivery person gets higher priority.",
        "Implemented product filters to help users sort and find their desired items.",
        "Created a seller dashboard to view product performance and manage listings.",
        "Used Firebase Authentication for secure user login.",
        "Implemented a coupon system to apply discounts to products.",
        "Firestore is used as the backend for orders and inventory management.",
      ],

      screenshots: [
        "https://res.cloudinary.com/datvfcnme/image/upload/v1757769620/Screenshot_423_hqsfca.png",
        "https://res.cloudinary.com/datvfcnme/image/upload/v1757769596/Screenshot_424_kuixpr.png",
        "https://res.cloudinary.com/datvfcnme/image/upload/v1757769596/Screenshot_427_nhz0gf.png",
        "https://res.cloudinary.com/datvfcnme/image/upload/v1757769596/Screenshot_426_h2ommw.png",
        "https://res.cloudinary.com/datvfcnme/image/upload/v1757769595/Screenshot_425_ajgdnk.png",
        "https://res.cloudinary.com/datvfcnme/image/upload/v1757769596/Screenshot_428_r4hdnz.png",
      ],
      liveDemo: "https://ecommerce-app-ee36e.web.app/",
      githubRepo: "https://github.com/Adhithya200503/ecommerce-website",
      challenges: [
        "I faced many challenges during the development process as this was my first project.",
        "I referred to multiple documentation sources, YouTube videos, and AI tools to learn.",
        "Structuring the website in an organized way was difficult.",
        "Managing state across the product took considerable time and effort.",
        "I integrated Cloudinary for image storage, which helped me learn how to use it effectively.",
      ],

      contributors: [],
     
    },
    {
      id: "4",
      projectName: "Automated Employee Selection with n8n",
      tagline: "From Applications to Selection — Automatically",
      techStack: ["n8n"],
      description:
        "Automated Employee Selection with n8n is a workflow-based system that streamlines the recruitment process by automatically analyzing resumes, storing applicant data in Google Sheets, generating AI-driven insights, notifying HR with detailed reports, and sending personalized responses to applicants, thereby reducing manual effort, saving time, and ensuring a faster and more consistent hiring experience.",
      features: [
        "Automatically analyzes resumes submitted through the job application form.",
        "Extracts applicant details and stores them in Google Sheets for easy tracking.",
        "Uses AI models to generate insights and evaluation messages about each candidate.",
        "Sends automated email notifications to HR with applicant analysis reports.",
        "Sends personalized responses to applicants based on their application status.",
        "Updates or appends applicant records in Google Sheets to maintain accurate data.",
        "Reduces manual effort and speeds up the recruitment process with end-to-end automation.",
      ],

      screenshots: [
        "https://res.cloudinary.com/datvfcnme/image/upload/v1758546394/Screenshot_571_pvwws2.png",
      ],
      liveDemo: "",
      githubRepo: "",
      challenges: [
        "Faced initial difficulties in configuring n8n workflows for resume parsing and email automation.",
        "Spent extra time testing different nodes to ensure proper data flow between form submissions, Google Sheets, and email services.",
        "Had to fine-tune the AI model prompts to generate clear and useful applicant insights.",
        "Encountered challenges in handling edge cases like incomplete resumes or missing form fields.",
      ],

      contributors: [],
      
    },
  ];
  const EducationInfo = [
    {
      institutionName: "Panimalar Engineering College",
      standard: "B.Tech Computer Science and Business System",
      description:
        "I am currently pursuing my bachelor's degree at Panimalar Engineering College with a CGPA of 8.3. I also participated in an internal hackathon at our college and secured 30th place",
      year: 2027,
      marks: "CGPA 8.3",
      location: "Chennai, Tamil Nadu",
    },
    ,
    {
      institutionName: "Velammal Matriculation Higher Secondary School",
      standard: "12th Grade – Science",
      description:
        "I have completed my schooling at Velammal Matriculation Higher Secondary School, where I studied the Bio-Maths group in 11th and 12th standards.",
      marks: "506 / 600",
      year: 2023,
      location: "Chennai, Tamil Nadu",
    },
    {
      institutionName: "Velammal Matriculation Higher Secondary School",
      standard: "10th Grade",
      description:
        "I completed my schooling at Velammal Matriculation Higher Secondary School. Due to the COVID-19 lockdown, the Tamil Nadu board exams for 10th standard were not conducted.",
      marks: "No Exam due to corona lockdown",
      year: 2020,
      location: "Chennai, Tamil Nadu",
    },
  ];
  const experience = [
    {
      role: "Web Application Developer Intern",
      company: "Robo Waves",
      location: "Chennai, India",
      duration: "Feb 202 – March 2024",
      description:
        "Implemented responsive designs and optimized user interactions using modern web technologies.",
      responsibilities: [
        "Developed responsive web components using React.js and Tailwind CSS.",
        "Built RESTful APIs to support user authentication and data management.",
        "Performed bug fixes and optimized existing code for better performance.",
        "Collaborated with the design team to enhance UI/UX across web pages.",
      ],
      achievements: [
        "Improved application load time by 25%.",
        "Automated repetitive tasks using scripts, saving 10+ hours per week.",
        "Received appreciation from team leads for quick problem-solving.",
      ],
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Firebase", "Git"],
    },
    {
      role: "Backend Web Developer",
      company: "Vizhva",
      location: "Remote",
      duration: "Ongoing",
      description:
        "Working as Backend Developer in Vizhvz , Vizhva's main idea is to build Educational platform for Genz kids",

      responsibilities: [
        "Analyzed large datasets to identify trends and patterns using Python and Pandas.",
        "Created data visualizations with Matplotlib and Seaborn for stakeholder presentations.",
        "Cleaned and validated datasets to improve accuracy and consistency.",
        "Assisted in creating automated reports that reduced manual effort.",
      ],
      achievements: [
        "Identified key customer behavior trends that led to improved marketing strategies.",
        "Enhanced data reporting speed by 40% through automation tools.",
        "Collaborated with cross-functional teams to ensure data-driven decision-making.",
      ],
      technologies: ["Express", "MongoDB", "SQL", "Github"],
    },
  ];
  const courses = [
    {
      id: 1,
      name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      provider: "Oracle",
      platform: "Oracle University",
      expiryDate: "August 03, 2027",
      DownloadLink:
        "https://drive.google.com/file/d/1pDJgeazuXzD4AycFWgtTyEla1sNVHIoL/view?usp=sharing",
      learnedTopics: [
        "OCI Architecture",
        "OCI security",
        "cloud concepts",
        "administration",
      ],
    },
    {
      id: 2,
      name: "Data Science for Beginners",
      provider: "NASSCOM",
      category: "Gold Category",
      expiryDate: "2025-11-30",
      DownloadLink:
        "https://drive.google.com/file/d/1DCySF1sYMuWggWCUQZK197Cq43geoXzX/view?usp=sharing",
      learnedTopics: ["Python", "Data Analysis", "Machine Learning Basics"],
    },
    {
      id: 3,
      name: "The Complete 2024 Web Dev Bootcamp",
      provider: "Udemy",
      learnedTopics: ["HTML", "CSS", "JavaScript", "React", "Express", "SQL"],
      DownloadLink:
        "https://drive.google.com/file/d/1BEkh2tlZZy7fcTfN5B0Qapfak9zpcG8H/view?usp=sharing",
    },
    {
      id: 4,
      name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      provider: "Oracle",
      platform: "Oracle University",
      expiryDate: "September 06, 2027",
      DownloadLink:
        "https://drive.google.com/file/d/1kORYU8KoaX5I03vwW7TPzfLRUWrRy1ih/view?usp=sharing",
      learnedTopics: ["OCI AI Services", "Basics of AI (ML ,DL , GenAI)"],
    },
  ];
  return (
    <div className="w-screen flex flex-col justify-center">
      <DescriptionContainer />
      <div className="divider text-amber-950"></div>
      <TechStack />
      <div className="divider text-amber-950"></div>
      <Projects projectsInfo={projectsInfo} />
      <div className="divider text-amber-950"></div>
      <Eduction EducationInfo={EducationInfo} />
      <div className="divider text-amber-950"></div>
      <Experience experience={experience} />
      <div className="divider text-amber-950"></div>
      <Certifications courses={courses} />
      <div className="divider text-amber-950"></div>
      <LeetCodeStreak />
      <div className="divider text-amber-950"></div>
      <ContactMe />
    </div>
  );
};

export default Home;
