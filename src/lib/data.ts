export const personalInfo = {
  name: "B S Puneeth",
  location: "Boston, USA",
  email: "puneethbs8270@gmail.com",
  github: "https://github.com/puneeth-bs",
  linkedin: "https://www.linkedin.com/in/b-s-puneeth-099878194/",
  leetcode: "https://leetcode.com/u/puneethbs007/",
};

export const workExperience = [
  {
    company: "Hewlett Packard Enterprise",
    location: "Bengaluru, India",
    position: "Software Engineer 1",
    period: "Sept 2022 - June 2024",
    achievements: [
      "Architected and launched a Datacenter Sustainability Platform using the MERN stack and FastAPI, achieving a 20% carbon footprint reduction through automated server hibernation for underutilized resources.",
      "Engineered and enhanced backend services with Python, FastAPI, RESTful APIs, GraphQL, and gRPC, boosting data retrieval speed by 25% for real-time monitoring across 10,000+ servers.",
      "Deployed Kafka for real-time data streaming, integrated with Celery and RabbitMQ to handle 500,000+ daily API requests, reducing latency by 30%.",
      "Streamlined deployments by containerizing microservices with Docker and automating orchestration using Kubernetes, leading to a 40% improvement in deployment speed and high availability.",
      "Integrated the ELK Stack (Elasticsearch, Logstash, Kibana) for aggregating and visualizing system performance data, reducing troubleshooting time by 15% and improving system uptime.",
      "Followed SDLC in an Agile environment, collaborating in sprint planning, stand-ups, and retrospectives to deliver high-quality features and adapt to evolving requirements.",
    ],
  },
  {
    company: "Hewlett Packard Enterprise",
    location: "Bengaluru, India",
    position: "Software Engineer Intern",
    period: "Mar 2022 - Sept 2022",
    achievements: [
      "Developed enhancements for HPE’s ISM tool for vulnerability assessment and management, leveraging the MERN stack to improve functionality.",
      "Revamped the UI with React and Grommet, resulting in a 40% increase in user engagement and easier navigation for vulnerability tracking.",
      "Automated vulnerability scanning by integrating Nessus APIs into the ISM tool, reducing scanning time by 10% for 1,000+ hosts.",
      "Engineered a prioritization system for vulnerabilities using CVSS scores and asset criticality, decreasing SLA violations by 30% and enhancing security efficiency.",
    ],
  },
];

export const education = [
  {
    institution: "Northeastern University",
    location: "Boston, USA",
    degree: "Master of Science in Computer Science",
    period: "Sept 2024 - May 2026",
    // achievements: [
    //   "President of the Department of Information Technology",
    //   "G20 student delegate",
    //   "Organized multiple technical workshops and events",
    //   "Represented my college in multiple national and international hackathons and won.",
    // ],
  },
  {
    institution: "JSS Science and Technology University",
    location: "Mysuru, India",
    degree: "Bachelors in  Electronics and Communication Engineering",
    period: "Jun 2021 - Jun 2025",
    // achievements: [
    //   "President of the Department of Information Technology",
    //   "G20 student delegate",
    //   "Organized multiple technical workshops and events",
    //   "Represented my college in multiple national and international hackathons and won.",
    // ],
  },
];
export const skills = {
  programmingLanguages: ["Java", "JavaScript/Typescript", "Python"],
  frontendDevelopment: ["Reactjs", "Tailwind CSS", "HTML", "CSS"],
  backendDevelopment: ["Nodejs", "Flask", "FastAPI"],
  databaseAndStorage: ["MySQL", "MongoDB", "Firebase", "InfluxDB"],
  cloudAndDevOps: ["AWS", "Ansible", "Jenkins", "Github Actions"],
  // toolsAndServices: [
  //   "Clerk (Auth)",
  //   "Sanity (CMS)",
  //   "Tinybird (analytics)",
  //   "Zod",
  //   "Sentry",
  //   "Mixpanel",
  //   "Trigger.dev",
  // ],
};

export const projects = [
  {
    title: "Image Manipulation and Enhancement App",
    github: "https://github.com/puneeth-bs/image-manipulation-app",
    description: [
      "Designed and implemented a scalable image processing application leveraging Object-Oriented Programming (OOP) principles and MVC architecture for modularity and maintainability.",
      "Employed multiple design patterns, including Strategy and Factory patterns to ensure flexibility and extensibility in image transformation, filtering, and enhancement operations.",
      "Ensured robustness and code quality through rigorous unit testing, adherence to Java best practices, and well-structured code, facilitating reliable performance and easy maintenance.",
    ],
  },
  {
    title: "QuickMart",
    github: "https://github.com/puneeth-bs/quickmart-react-app.git",
    description: [
      "Developed a full-stack marketplace application enabling buyers, sellers, and admins to interact seamlessly, leveraging React (Vite) and Tailwind CSS for a responsive, intuitive UI and Node.js/Express.js for robust backend APIs.",
      "Integrated MongoDB for scalable data storage, AWS S3 for secure image hosting, and advanced search/filtering features to enhance product discovery and user engagement.",
      "Implemented role-based functionalities for buyers, sellers, and admins, including secure authentication, profile management, product listing management, and review systems to ensure a complete e-commerce experience.",
    ],
  },
  {
    title: "Covid Tracker Android App",
    github: "https://github.com/puneeth-bs/Covid19_tracker-android-app",
    description: [
      "Developed an Android application to track COVID-19 cases by region, allowing users to view daily case updates.",
      "Built REST APIs using Flask with asynchronous callbacks to handle concurrent user requests, increasing API throughput.",
      "Implemented Redis caching to store frequently queried results, significantly reducing read response times.",
    ],
  },
];

// export const awards = [
//   {
//     name: "IEEE YESIST12 Hackathon",
//     issuer: "IEEE",
//     date: "Sep 2022",
//     type: "International",
//     position: "Second Place",
//   },
//   {
//     name: "Prodigi Cognizant Hackathon",
//     issuer: "Cognizant",
//     date: "Feb 2023",
//     type: "National",
//     position: "Second Runner-up",
//   },
//   {
//     name: "Cisco Thingqbator Hackathon",
//     issuer: "Cisco",
//     date: "Jan 2023",
//     type: "National",
//     position: "First Runner-up",
//   },
//   {
//     name: "Innovators Day",
//     issuer: "Sri Manakula Vinayagar Engineering College, Pondicherry",
//     date: "Sep 2022",
//     type: "National",
//     position: "First Prize",
//   },
//   {
//     name: "KG Hackfest'22",
//     issuer: "KGiSL Institute of Technology, Coimbatore",
//     date: "Sep 2022",
//     type: "National",
//     position: "Second Prize",
//   },
//   {
//     name: "Innohacks'22",
//     issuer: "Innogeeks, KIET Group of Institutions, New Delhi",
//     date: "May 2022",
//     type: "National",
//     position: "Second Runner-up",
//   },
//   {
//     name: "Hack @ SKCET",
//     issuer: "Hackclub SKCET, SKCET, Coimbatore",
//     date: "Feb 2022",
//     type: "National",
//     position: "Most Impactful Hack",
//   },
// ];
