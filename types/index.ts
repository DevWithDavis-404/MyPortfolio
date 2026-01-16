import { TablerIcon } from "@tabler/icons-react";
import { badgeVariants } from "@/components/ui/badge";
import { VariantProps } from "class-variance-authority";

export type NavItem = {
  title: string;
  href: string;
  icon?: TablerIcon;
  sub?: {
    title: string;
    href: string;
  }[];
}

export type Project = {
  slug: string;
  title: string;
  description: string;
  href: string;
  badge: {
    variant: VariantProps<typeof badgeVariants>["variant"];
    text: string;
  };
  thumbnail: string;
  images: {
    title: string;
    url: string;
  }[];
  technologies: string[];
}
