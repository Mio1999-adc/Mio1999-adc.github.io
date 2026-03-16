import type { ResumeData } from "@/lib/types";


export const RESUME_DATA: ResumeData = {
  name: "Lan Anh Nguyen",
  initials: "LA",
  location: "Hanoi, Vietnam",
  locationLink: "",
  personalWebsiteUrl: "https://scholar.google.com/citations?user=nfuNA3wAAAAJ&hl=en",
  about:
    "PhD candidate in high-performance computing (distributed, parallel, and quantum computing), operating systems, and machine learning systems.",
  summary: <></>,
  avatarUrl:
    // "https://github.com/user-attachments/assets/18d72214-b40e-4a52-bf5f-4db89176872d",
    "https://github.com/user-attachments/assets/2beb2e83-2713-4636-8d21-552865bdf7fb",
  contact: {
    email: "",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/loglamo",
        icon: "github",
      },
    ],
  },

  education: [
    {
      school: "Hanoi University of Science and Technology",
      degree: "Engineer’s Degree in Information Systems",
      start: "2014",
      end: "2019",
    },
    {
      school: "Chung-Ang University",
      degree: "Integrated MS-Ph.D in Computer Science and Engineering",
      start: "2022",
      end: "2025-Transfering",
    },
    {
      school: "Hongik University",
      degree: "Integrated MS-Ph.D in Software and Communications Engineering",
      start: "2026",
      end: "Present",
    },
  ],

  work: [
    {
      company: "Viettel Military Industry and Telecoms Group",
      badges: ["Data Engineering", "Big Data", "Spark"],
      title: "Data Engineer",
      start: "2019",
      end: "2020",
      description: "Worked on large-scale data processing pipelines and analytics systems using Apache Spark.",
      link: ""
    },
  ],

  skills: [
    "C/C++",
    "Python",
    "Linux Kernel",
    "ReactJS / AngularJS / NodeJS",
    "Flask",
    "Spark",
    "Kubernetes",
    "System Design",
    "System Architecture",
  ],

  projects: [
    {
      title: "YOLO/SAM Improvement for 3D Reconstruction",
      techStack: ["YOLO", "SAM", "Object Detection", "3D Alignment", "Pix3D"],
      description: "",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Acceleration for Quantum Simulation on GPUs",
      techStack: [
        "PennyLane",
        "TorchQuantum",
        "Qiskit",
        "Variational Quantum Classifier",
        "GPUs",
	"Scheduling",
	"Computational Graphs",
      ],
      description: "",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Scalable Machine Learning Systems for O-RAN",
      techStack: [
        "Network Slicing",
        "Reinforcement Learning",
        "Federated Learning",
        "Distributed and Parallel Learning",
      ],
      description: "",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Automatic Quantization for VLMs/LLMs",
      techStack: ["Quantization", "LLM", "VLM", "Edge Devices",],
      description: "",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Haan.Ocean",
      techStack: ["Local Brand", "Fashion Design", "Vietnam"],
      description: "This is a fashion project from my twin sister",
      link: {
        label: "",
        href: "https://www.instagram.com/haan.ocean.official/",
      },
    },
    {
      title: "Haan.L'art",
      techStack: ["Da Nang", "Art Workshops", "Drawing Classes for Kids", "Creativity",],
      description: "This is an art project from my twin sister. Visit to enjoy a friendly and cozy env. Plus, to be recommended to wonderful local places",
      link: {
        label: "",
        href: "https://www.instagram.com/haanlart.danang/",
      },
    },
  ],
publications: [
     {
      title: "Comprehensive survey of sensor data verification in internet of things",
      venue: "Published, 2023",
      link: {
        label: "IEEE Access",
        href: "https://ieeexplore.ieee.org/document/10130670",
      },
    },
    {
      title: "EdgeUP: Utilization and Priority-Aware Load Balancing in Edge Computing",
      venue: "Published, 2025",
      link: {
        label: "Electronics",
        href: "https://www.mdpi.com/2079-9292/14/3/565",
      },
    },
     {
      title: "Toward Acceleration of Variational Quantum Classifier Simulation on GPUs",
      venue: "Accepted, 2025",
      link: {
        label: "SOICT'25 Proceedings",
        href: "",
      },
    },
     {
      title: "YOLO-PT: One-Shot Framework for 3D-based Progress Tracking",
      venue: "Accepted, 2026",
      link: {
        label: "ICGHIT'26 Proceedings",
        href: "",
      },
    },
     {
      title: "QuSim-Sed: Scheduling-Driven Acceleration for Hybrid Classical Quantum Simulation on GPU",
      venue: "Under-review, 2026",
      link: {
        label: "Euro-Par'26",
        href: "",
      },
    },
     {
      title: "High-Performance Variational Quantum Circuit Simulation on GPUs",
      venue: "Under-review, 2026",
      link: {
        label: "IEEE Access",
        href: "",
      },
    },
  ],
} as const;



// import type { ResumeData } from "@/lib/types";

// export const RESUME_DATA: ResumeData = {
//   name: "Lan Anh Nguyen",
//   initials: "LA Nguyen",
//   location: "Hanoi, Vietnam",
//   locationLink: "https://scholar.google.com/citations?user=nfuNA3wAAAAJ&hl=en",
//   about: "PhD candidate in high-performance computing (distributed, parallel, quantum computing), Operating systems, machine learning systems",
//   summary: (
//     <>
//   	</>
//   ),
//   avatarUrl: "https://github.com/user-attachments/assets/18d72214-b40e-4a52-bf5f-4db89176872d",
//   contact: {
//     email: "",
//     tel: "",
//     social: [
//       {
//         name: "GitHub",
//         url: "https://github.com/loglamo",
//         icon: "github",
//       },
//     ],
//   },
//   education: [
//     {
//       school: "Hanoi University of Science and Technologies",
//       degree: "Engineer's Degree in Information Systems",
//       start: "2014",
//       end: "2019",
//     },
//     {
// 	school: "Chung-Ang University",
// 	degree: "Computer Science and Engineering",
// 	start: "2022",
// 	end: "2024",
//     },
//     {
// 	 school: "Hongik University",
// 	degree: "Software and Communications Engineering",
// 	start: "2026",
// 	end: "Now",
//     },
//   ],
//   work: [
//     {
//       company: "Viettel Telecomunication Cooperation",
//       badges: ["Data Engineering", "Big Data", "Spark"],
//       title: "Data Engineer",
//       start: "2019",
//       end: "2020",
//       description: ("blah blah"
//       ),
//     },
//   ],
//   skills: [
// "C/C++",
// "Python",
// "ReactJS/AngularJS/NodeJS",
// "Flask",
// "Spark",
// "Kubernetes",
// "Design Systems",
// "System Architecture",
//   ],
//   projects: [
//     {
//       title: "YOLO/SAM improvement for 3D",
//       techStack: ["YOLO", "Object detection", "3D alignment", "Pix3D",],
//       description:
//         "",
//       link: {
//         label: "",
//         href: "",
//       },
//     },
//     {
//       title: "Acceleration for Quantum Simulation",
//       techStack: ["PennyLane", "TorchQuantum", "Qiskit", "Variational Quantum Classifier", "GPUs",],
//       description:
//         "",
//       link: {
//         label: "",
//         href: "",
//       },
//     },
//     {
//       title: "Scalable Machine Learning Systems for O-RAN",
//       techStack: ["Network Slicing", "Reinforcement Learning", "Federated Learning", "Distributed and Parallel Learning",],
//       description:
//         "",
//       link: {
//         label: "",
//         href: "",
//       },
//     },
//     {
//       title: "VLM/LLM automatic quantization",
//       techStack: ["Quantization",],
//       description:
//         "",
//       link: {
//         label: "",
//         href: "",
//       },
//     },
//   ],
//   ],
//   ],
//   ],
// } as const;
