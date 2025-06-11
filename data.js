export const bio = [
  "Hello! I'm Ruby Hong, an Engineering and Computer Science student at Smith College passionate about leveraging technology to create impactful solutions.",
  "I am actively learning AI and ML. Through my leadership in social initiatives, I strive to drive innovation with both technical expertise and entrepreneurial thinking.",
  "Thanks for visiting!",
];

export const skills = [
  {
    title: "Languages",
    skillName: "Python, Java",
    color: "5",
    percentage: "85",
  },
  {
    title: "Skills",
    skillName: "Problem-Solving, Leadership, Initiative",
    color: "6",      
    percentage: "100",
    },
  {
    title: "Design",
    skillName: "HTML, CSS, JavaScript",
    color: "4",
    percentage: "40",
  },
  {
    title: "Statistics",
    skillName: "R, MatLab",
    color: "7",
    percentage: "20",
   },
  // 
  // {
  //   title: "Frameworks/Libraries",
  //   skillName: "Angular, RxJS, NGRX/NGXS",
  //   color: "6",
  //   percentage: "70",
  // },
  // {
  //   title: "Design",
  //   skillName: "HTML, Bootstrap, Tailwind",
  //   color: "4",
  //   percentage: "70",
  // },
  // {
  //   title: "Version Control",
  //   skillName: "GitHub, JIRA, Bitbucket",
  //   color: "7",
  //   percentage: "70",
  // },
  // {
  //   title: "Tools",
  //   skillName: "Debugging, Chrome DevTools",
  //   color: "3",
  //   percentage: "80",
  // },
//   {
//     title: "Analytics",
//     skillName: "CleverTap, Countly",
//     color: "5",
//     percentage: "50",
//   },
//   {
//     title: "IDE",
//     skillName: "VS Code",
//     color: "6",
//     percentage: "70",
//   },
];

export const projects = {
  webProjects: [
    {
      projectName: "EcoHer",
      image: "images/ecoher.png",
      summary:
        "Developed an educational website to help solve gender inequality in the context of climate crisis",
      preview: "https://nasaspaceappchallenge-eco-her-anannyagairola.replit.app/index.html",
      techStack: ["JavaScript"],
    },
    {
      projectName: "Jorge the Therapist",
      image: "images/char.png",
      summary:
        "Developed a web app for youth featuring an AI therapist to assist with panic attack management",
      preview: "https://devpost.com/software/jorge-the-therapist?ref_content=my-projects-tab&ref_feature=my_projects",
      techStack: ["NodeJS", "JavaScript"],
    },
    {
      projectName: "Web Portfolio",
      image: "images/portfolio.png",
      summary:
        "Web Portfolio to showcase academics, skills, projects and contact details in better manner.",
      preview: "https://rubysmac.github.io",
      techStack: ["HTML", "Bootstrap", "JavaScript"],
    },
    // {
    //   projectName: "Resume Builder",
    //   image: "images/resume-builder.png",
    //   summary:
    //     "Browser based editor to build and download Resumes in a customizable templates.",
    //   preview: "https://vinaysomawat.github.io/Resume-Builder",
    //   techStack: ["HTML", "Bootstrap", "JavaScript"],
    // },
  ],
  softwareProjects: [
    {
      projectName: "Pizza Ordering ChatBot",
      image: "images/pizzaorderchatbot.png",
      summary:
        "ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
      preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
      techStack: ["Dailogflow", "Firebase"],
    },
    {
      projectName: "WhatsApp-Bot",
      image: "images/whatsappbot.jpg",
      summary:
        "Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
      preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
      techStack: ["Selenium", "Chrome Webdriver", "Python"],
    },
    {
      projectName: "Bill Generator",
      image: "images/billgenerator.png",
      summary:
        "GUI to transfer data to excel sheets and generate bills on the local shops.",
      preview: "https://github.com/vinaysomawat/Bill-Generator",
      techStack: ["Tkinter", "Openxlpy", "Python"],
    },
  ],
  androidProjects: [
    {
      projectName: "NITW-CSE",
      image: "images/nitwcse.jpg",
      summary:
        "The Application display details of Department courses, reference books, research, publication and faculty profile.",
      preview: "https://github.com/vinaysomawat/NITW-CSE",
      techStack: ["JAVA", "XML", "Android"],
    },
    {
      projectName: "CareerHigh-App",
      image: "images/carrerhigh.png",
      summary:
        "The Application display the webpages of website careerhigh.in in android devices.",
      preview: "https://github.com/vinaysomawat/CareerHigh-Android",
      techStack: ["JAVA", "XML", "Android"],
    },
  ],
  freelanceProjects: [
    {
      projectName: "SnylloAir.com",
      image: "images/snylloair.png",
      summary:
        "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
      preview: "https://www.snylloair.com/",
      techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
    },
    {
      projectName: "Delivery+",
      image: "images/AM-Logo-.png",
      summary: "Android Application to display website in android devices.",
      preview:
        "https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
      techStack: ["Android", "JAVA", "Play Store"],
    },
  ],
};

export const experience = [
  {
    title: "Break Through Tech @MIT",
    duration: "May 2025 - April 2026",
    subtitle: "Machine Learning Fellow",
    details: ["Participated in eCornell course, and worked on a group ML project."],
    tags: ["Python", "AI/ML"],
    icon: "heartbeat",
  },
  {
    title: "The Hatchery",
    duration: "August 2024 - Present",
    subtitle: "Entrepreneurial Project Lead/Web Developer",
    details: ["Worked on a startup idea for social good, developing platform for youth mental health. Also, designed a sustainable perfume brand with $1000 funding."],
    tags: ["Leadership"],
    icon: "heartbeat",
  },
  // {
  //   title: "Novopay Solutions Private Limited",
  //   duration: "June 2020 - April 2022",
  //   subtitle: "Software Engineer",
  //   details: [
  //     `Implemented AePS Services, including Bio-metric eKYC, Cash Withdrawal, Balance Enquiry, Mini-Statements,
  //           and Money transfer.`,
  //     `Implemented QR Code integration for retailer wallet money loading, Clevertap events for user action tracking,
  //           Freshdesk ticketing, Chatbot services, and Retailer onboarding/admin interfaces.`,
  //     `Developed retailer QR code system for seamless money loading into wallets, resulting in improved user transactions.`,
  //     `Achieved 70 percent code coverage of the entire application by writing unit tests for legacy code.`,
  //   ],
  //   tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
  //   icon: "qrcode",
  // },
];

export const education = [
  {
    title: "Smith College",
    duration: "2024 - 2028",
    subtitle: "B.S. in Engineering and Computer Science",
    details: ["First Yr Representative of Google Developer Student Club", "Girls Who Code", "Society of Women Engineers", "Investment Club"],
    tags: [
      "Data Structures",
      "Fundamental Engineering Principles",
      "Objected Oriented Programming",
      "Engineering for Everyone",
      "Intro to Macroeconomics",
    ],
    icon: "graduation-cap",
  },
  {
    title: "Hankuk Academy of Foreign Studies",
    duration: "2021-2024",
    subtitle: "International Track",
    details: ["Founder and President of the school official environmental club", "School YouTube Channel Ambassador", "Lacrosse Varsity Team MVP"],
    tags: ["AP Computer Science A", "AP Statistics", "AP Calculus BC", "AP Biology", "AP Chemistry", "AP Psychology"],
    icon: "book",
  },
];

export const footer = [
  {
    label: "Dev Profiles",
    data: [
      {
        text: "GitHub",
        link: "https://github.com/rubysmac",
      },
      // {
      //   text: "LeetCode",
      //   link: "https://leetcode.com/somawatvinay/",
      // },
    ],
  },
//   {
//     label: "Resources",
//     data: [
//       {
//         text: "Enable Dark/Light Mode",
//         func: "enableDarkMode()",
//       },
//       {
//         text: "Print this page",
//         func: "window.print()",
//       },
//       {
//         text: "Clone this page",
//         link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
//       },
//     ],
//   },
  {
    label: "Links",
    data: [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/ruby-hong-639143326/",
      },
    //   {
    //     text: "Twitter",
    //     link: "https://twitter.com/thesigmakid",
    //   },
      {
        text: "Github/rubysmac.github.io",
        link: "https://github.com/vinaysomawat/rubysmac.github.io",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Made with &hearts; by Vinay Somawat.",
      "&copy; No Copyrights. Feel free to use this template.",
    ],
  },
];
