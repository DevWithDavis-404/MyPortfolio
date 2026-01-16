import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "student-portal",
    title: "Student Portal",
    description:
      "A centralized academic portal designed to enhance the overall student experience through improved accessibility and usability. The platform provides essential features such as account management, registration, and a personalized dashboard for academic information. It was developed with a focus on streamlining student interactions and delivering a more efficient, user-friendly digital environment.",
    href: "/projects/student-portal",
    badge: {
      variant: "default",
      text: "School",
    },
    thumbnail: "/assets/student-portal/dashboard.png",
    images: [
      {
        title: "Login Page",
        url: "/assets/student-portal/login.png",
      },
      {
        title: "Registration Page",
        url: "/assets/student-portal/register.png",
      },
      {
        title: "Dashboard Page",
        url: "/assets/student-portal/dashboard.png",
      },
    ],
    technologies: ["Laravel", "Blade Templates", "Bootstrap"],
  },
  {
    slug: "pe-web-system",
    title: "PE Web System",
    description:
      "A web-based system created to support Physical Education classes through structured course and quiz management. The platform allows instructors to organize lessons, create assessments, and monitor student progress, while students can access courses and complete quizzes in one place. It centralizes learning activities and simplifies the management of PE academic workflows.",
    href: "/projects/pe-web-system",
    badge: {
      variant: "default",
      text: "Personal",
    },
    thumbnail: "/assets/pe-web-system/stu.png",
    images: [
      {
        title: "Student Dashboard",
        url: "/assets/pe-web-system/stu.png",
      },
      {
        title: "Quiz",
        url: "/assets/pe-web-system/quiz.png",
      },
      {
        title: "Admin Dashboard",
        url: "/assets/pe-web-system/admin-dashboard.png",
      },
    ],
    technologies: ["Laravel", "React", "Tailwind", "Inertia"],
  },
  {
    slug: "iline-electro-mechanics",
    title: "iLine Electro Mechanics",
    description:
      "An interactive web system developed for an electro-mechanical engineering services company to improve internal operations. The platform enables efficient management of projects, clients, personnel, and service activities through a unified dashboard. It enhances workflow visibility and supports better coordination across administrative and operational processes.",
    href: "/projects/iline-electro-mechanics",
    badge: {
      variant: "default",
      text: "Personal",
    },
    thumbnail: "/assets/iline/home.png",
    images: [
      {
        title: "Home Page",
        url: "/assets/iline/home.png",
      },
      {
        title: "Services Page",
        url: "/assets/iline/services.png",
      },
      {
        title: "Dashboard Page",
        url: "/assets/iline/dashboard.png",
      },
    ],
    technologies: ["Laravel", "React", "Tailwind", "Inertia"],
  },
  {
    slug: "solana-vierra",
    title: "Solana Vierra",
    description:
      "A hotel management application designed to assist with organizing hospitality operations and administrative tasks. The system centralizes hotel-related information such as accommodations, dining services, and internal dashboards for staff use. It supports smoother operational management and provides a structured digital solution for hotel administration.",
    href: "/projects/solana-vierra",
    badge: {
      variant: "default",
      text: "School",
    },
    thumbnail: "/assets/solana-vierra/home.png",
    images: [
      {
        title: "Home Page",
        url: "/assets/solana-vierra/home.png",
      },
      {
        title: "Dining Page",
        url: "/assets/solana-vierra/dining.png",
      },
      {
        title: "Dashboard Page",
        url: "/assets/solana-vierra/dashboard.png",
      },
    ],
    technologies: ["Laravel", "React", "Tailwind", "Inertia"],
  },
];
