import type { ResumeData } from "@/lib/types";


export const RESUME_DATA: ResumeData = {
  name: "Lan Anh Nguyen",
  initials: "LA",
  location: "Hanoi, Vietnam",
  locationLink: "",
  personalWebsiteUrl: "https://mio1999-adc.github.io",
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
      end: "2024-Transfering",
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
      title: "Acceleration for Quantum Simulation",
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
  ],
publications: [
    {
      title: "TwinBooster: Fine-Grained Operator-Level Partitioning and Multi-Stream Scheduling for Large-Scale LLM Training",
      venue: "Under Review, 2025",
      link: {
        label: "arXiv",
        href: "#",
      },
    },
    {
      title: "GPU-Accelerated Quantum Simulation via Dynamic Kernel Fusion and State Vector Optimization",
      venue: "Under Review, 2024",
      link: {
        label: "arXiv",
        href: "#",
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
