import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Certificate from "./Certificate";
import EducationCard from "./Education";
import LanguageCard from "./LanguageCard";

const education = [
  {
    imgSrc: "/school.jpg",
    title: "Akash Model School",
    description:
      "Akash Model School has been more than just an institution — it's been a long, drawn-out endurance test disguised as education. From outdated teaching methods to a near-complete absence of creativity, the system prioritizes rote memorization over understanding, obedience over curiosity, and conformity over skill development. Despite this, the experience has instilled in me a deep appreciation for independent thinking, self-learning, and the value of true education — the kind that isn't confined to textbooks or limited by rigid rules. It taught me how to question the system, adapt on my own, and cultivate resilience in a place where mediocrity is celebrated and innovation is often silenced. My time here didn't just teach me what I want to learn — it made it clear what I refuse to become.",
    schoolWebsite: "http://www.akashmodelschool.in/",
    duration: "2017 - present",
    skillsLearned: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "English",
      "Physical education",
    ].join(" • "),
    grade: "93.7%",
  },
];

const certificates = [
  {
    imgSrc: "/certificate.png",
    title: "React Foundations by vercel",
    issuedBy: "Vercel",
    date: "May 2025",
    credentialId: "RFC-2025-0421",
    credentialUrl: "https://vercel.com/certificates/react-foundations",
    description:
      "Mastered core React concepts including components, hooks, state management, and Next.js integration for building modern web applications.",
  },
  {
    imgSrc: "/certificate.png",
    title: "Advanced JS by meta",
    issuedBy: "Meta",
    date: "March 2025",
    credentialId: "META-JS-ADV-2025",
    credentialUrl: "https://coursera.org/certificates/javascript-advanced",
    description:
      "Completed advanced JavaScript training covering closures, prototypes, asynchronous programming, and modern ES6+ features.",
  },
  {
    imgSrc: "/certificate.png",
    title: "UI/UX Design Specialization",
    issuedBy: "Google",
    date: "January 2025",
    credentialId: "GOOGLE-UX-7583",
    credentialUrl:
      "https://coursera.org/professional-certificates/google-ux-design",
    description:
      "Gained expertise in user-centered design principles, wireframing, prototyping, and conducting usability studies.",
  },
];

const languages = [
  {
    title: "English",
    description:
      "My go-to language for learning, coding, and memeing. From tech docs to late-night deep dives on YouTube, English has basically become my second brain.",
    rating: "⭐⭐⭐⭐", // out of 5
    level: "Fluent",
    helloInLanguage: "Hello",
  },
  {
    title: "Hindi",
    description:
      "My mother tongue and emotional core. This is the language that shaped my childhood, my sarcasm, and my sense of timing in jokes. I dream in Hindi, argue in Hindi, and win in Hindi.",
    rating: "⭐⭐⭐⭐⭐",
    level: "Native",
    helloInLanguage: "नमस्ते",
  },
  {
    title: "German",
    description:
      "Started learning thanks to my sister repping Germany. It’s logical, intense, and sometimes feels like you’re casting spells when you speak it. Still learning, still fascinated.",
    rating: "⭐⭐⭐",
    level: "Beginner",
    helloInLanguage: "Hallo",
  },
  {
    title: "Italian",
    description:
      "Not fluent, but deeply in love with the rhythm. I got pulled in by the food, stayed for the flair. One day I’ll order pasta in Italian without Google Translate. Manifesting that.",
    rating: "⭐⭐⭐",
    level: "Beginner",
    helloInLanguage: "Ciao",
  },
];

const skills = [
  { title: "Web development" },
  { title: "Software development" },
  { title: "App development" },
  { title: "Game development" },
  { title: "Artificial intelligence" },
  { title: "Machine learning" },
];

const page = () => {
  return (
    <>
      <div className="h-[100%] w-full mt-15 ">
        <div className="relative  flex flex-col items-center">
          <Image
            width={500}
            height={500}
            priority
            className="w-full pointer-events-none h-60 select-none object-cover"
            src="/Banner/Banner-1.jpg"
            alt="Banner image"
          />
          <Image
            width={500}
            height={500}
            priority
            className="absolute pointer-events-none select-none -z-100 blur-3xl top-0  w-full h-60 object-cover"
            src="/Banner/Banner-1.jpg"
            alt="Banner image"
          />
          <div className="absolute left-1/2 top-[100%] -translate-1/2 h-70   rounded-full flex justify-center items-center">
            <Image
              width={200}
              height={100}
              priority
              className="image h-[70%] pointer-events-none select-none rounded-full  "
              src="/Creator.jpg"
              alt=""
            />
            <div className="absolute  -translate-1/2 top-[100%] w-full text-center  cursor-default left-[50%]  ">
              <h1 className="text-3xl font-bold ">Pratik Jha</h1>

              <h3 className="text-zinc-400">New Delhi, India</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-5 h-[60%] mt-45 flex-col ">
        <h1 className="text-3xl  text-center mt-10 font-bold">Who am i?</h1>

        <p className=" text-center w-[70%] ">
          Hey, I’m Pratik — a creator, explorer, and tech enthusiast obsessed
          with turning ideas into reality. My journey began with curiosity and a
          keyboard, and ever since, I’ve been diving into everything from web
          development and game design to experimenting with new tech. I don’t
          just build for the sake of it — I build to learn, grow, and push the
          boundaries of what’s possible. Every bug I fix, every game I release,
          every project I launch — it’s all part of the thrill. This arcade is
          more than just games — it’s a piece of my journey, and it’s only
          getting started.
        </p>

        <h1 className=" text-3xl  text-center mt-10 font-bold ">
          Licences and certificates
        </h1>

        <div className="flex gap-2">
          {certificates.map((data, index) => (
            <Certificate key={index} data={data} />
          ))}
        </div>

        <h1 className=" text-3xl  text-center mt-10 font-bold ">Education</h1>
        <div className="w-[80%]">
          {education.map((items, index) => (
            <EducationCard key={index} educationData={items} />
          ))}
        </div>

        <h1 className=" text-3xl  text-center mt-10 font-bold ">Skills</h1>
        <div className="flex flex-col w-[75%] border-1 border-zinc-800 rounded-xl ">
          {skills.map((items, index) => (
            <div key={index} className="h-15 px-4 w-full flex items-center  border-b border-zinc-800 cursor-pointer">
              <p className="w-full ">{items.title}</p>
            </div>
          ))}

          <div className="h-15 w-full flex hover:bg-zinc-900/60 cursor-pointer transition-colors duration-300  items-center justify-center font-semibold ">
            <p className="">View all 40 skills</p>
          </div>
        </div>

        <h1 className=" text-3xl  text-center mt-10 font-bold ">
          Languages (Not programming)
        </h1>

        <div className="flex gap-8 pb-20">
          {languages.map((items, index) => (
            <LanguageCard key={index} languageData={items} />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
