"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { socialLinks } from "@/data/home";
import Link from "next/link";

export function AppFooter() {
  return (
    <footer className="border-t-2 py-4">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-4 px-4 text-muted-foreground md:flex-row">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Davis Tumbaga. All rights reserved.
        </p>
        <ul className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <li key={link.title} className="">
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    variant={"ghost"}
                    size={"icon-lg"}
                    nativeButton={false}
                    render={
                      <Link href={link.href}>
                        {link.icon && <link.icon className="size-6" />}
                      </Link>
                    }
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{link.title}</p>
                </TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
