"use client";

import { AppLogo } from "@/components/app-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavItem } from "@/types";
import { IconCode, IconHome } from "@tabler/icons-react";
import Link from "next/link";
import { Fragment } from "react/jsx-runtime";

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: IconHome,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: IconCode,
    sub: [
      {
        title: "Student Portal",
        href: "/projects/student-portal",
      },
      {
        title: "Solana Vierra",
        href: "/projects/solana-vierra",
      },
      {
        title: "iLine Electro Mechanics",
        href: "/projects/iline-electro-mechanics",
      },
      {
        title: "PE Web System",
        href: "/projects/pe-web-system",
      },
    ],
  },
];

export function AppNavbar() {
  return (
    <Fragment>
      <nav className="sticky top-0 z-50 border-b-2 bg-background lg:border-b">
        <div className="flex h-16 items-center gap-2 px-4">
          <div className="hidden md:block">
            <AppLogo />
          </div>
          <div className="flex md:ml-auto">
            <NavigationMenu>
              <NavigationMenuList className={"flex-wrap gap-2"}>
                {navItems.map((item) => (
                  <Fragment key={item.title}>
                    {item.sub ? (
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid gap-2">
                            {item.sub.map((item) => (
                              <li key={item.title}>
                                <NavigationMenuLink
                                  render={
                                    <Link href={item.href}>
                                      <h1 className="text-sm leading-none font-medium">
                                        {item.title}
                                      </h1>
                                    </Link>
                                  }
                                />
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    ) : (
                      <NavigationMenuItem
                        render={
                          <Link
                            href={item.href}
                            className={`${navigationMenuTriggerStyle()} gap-2`}
                          >
                            {item.icon && <item.icon className="size-4" />}
                            <span>{item.title}</span>
                          </Link>
                        }
                      ></NavigationMenuItem>
                    )}
                  </Fragment>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
