// "use client";

import {
  IconBrandFacebook,
  IconBrandGithub,
  IconCode,
  IconDatabaseCog,
  IconFileDownload,
  IconGitBranch,
  IconMail,
  IconPrompt,
} from "@tabler/icons-react";

export const skills = [
  {
    title: "Front-end Dev",
    description: "ReactJS and NextJS",
    icon: IconCode,
  },
  {
    title: "Back-end Dev",
    description: "PHP, Laravel, and NodeJS",
    icon: IconPrompt,
  },
  {
    title: "Database",
    description: "SQLite and MySQL",
    icon: IconDatabaseCog,
  },
  {
    title: "Version Control",
    description: "Git, Github, Gitlab",
    icon: IconGitBranch,
  },
];

export const socialLinks = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/davistumbaga24",
    icon: IconBrandFacebook,
  },
  {
    title: "Github",
    href: "https://github.com/DevWithDavis-404",
    icon: IconBrandGithub,
  },
  {
    title: "Email",
    href: "mailto:davis.tumbaga024@gmail.com",
    icon: IconMail,
  },
  {
    title: "CV",
    href: "/resume.pdf",
    download: "davis-tumbaga-resume",
    icon: IconFileDownload,
  },
];
