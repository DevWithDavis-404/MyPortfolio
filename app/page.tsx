import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GridBackground } from "@/components/ui/grid-background";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { TextReveal } from "@/components/ui/text-reveal";
import { TypingText } from "@/components/ui/typing-text";
import { skills, socialLinks } from "@/data/home";
import { projects } from "@/data/projects";
import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <header className="h-svh">
        <GridBackground
          gridSize={"8:8"}
          colors={{
            background: "bg-background",
            borderStyle: "dashed",
          }}
          beams={{
            speed: 5,
          }}
        >
          <div className="mx-auto flex h-full max-w-7xl flex-col justify-center gap-4 p-4">
            <TypingText
              texts={[
                "Hello there! I am Davis Tumbaga",
                "Full Stack Web Developer",
              ]}
              speed={100}
              loop={true}
              className="text-xl font-bold lg:text-5xl"
              cursor="_"
            />
            <TextReveal
              variant={"scale"}
              className="text-muted-foreground lg:text-2xl"
            >
              I design and build scalable web applications, focusing on backend
              systems that power reliable and efficient user experiences.
            </TextReveal>
          </div>
        </GridBackground>
      </header>

      <div className="mx-auto grid max-w-7xl gap-40 p-8 md:gap-20">
        <section className="mx-auto grid h-svh max-w-4xl place-content-center gap-10 md:h-[60svh]">
          <div className="flex flex-col-reverse items-center gap-10 md:flex-row">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold">About Me</h1>
              <p className="text-justify leading-7 text-muted-foreground">
                I am a backend-focused web developer with experience building
                scalable, data-driven applications and full-stack systems for
                real-world business use cases. I specialize in designing clean,
                maintainable solutions, with a strong emphasis on system
                architecture, reliability, and performance. I enjoy solving
                complex problems and turning requirements into practical,
                user-focused software.
              </p>
              <div className="mt-2 space-y-4 space-x-4">
                {socialLinks.map((item) => (
                  <Button
                    key={item.title}
                    variant={"outline"}
                    size={"lg"}
                    nativeButton={false}
                    render={
                      <Link
                        href={item.href}
                        target="_blank"
                        download={item.download}
                      >
                        {item.icon && <item.icon className="size-4" />}
                        <span>{item.title}</span>
                      </Link>
                    }
                  />
                ))}
              </div>
            </div>
            <Image
              src={"/assets/img.jpg"}
              alt=""
              className="shrink-0 rounded-xl"
              width={300}
              height={200}
            />
          </div>
        </section>

        <section className="mx-auto grid h-svh max-w-5xl place-content-center gap-10 md:h-[60svh]">
          <div className="mx-auto grid max-w-2xl gap-4 text-justify md:text-center">
            <h1 className="text-3xl font-bold">My Skills</h1>
            <p className="leading-7 text-muted-foreground">
              I build scalable and maintainable web applications with a strong
              focus on backend development, system design, and performance.
            </p>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <Item key={skill.title} variant={"default"}>
                <ItemMedia variant={"icon"}>
                  {skill.icon && <skill.icon className="size-8" stroke={1.5} />}
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>{skill.title}</ItemTitle>
                  <ItemDescription>{skill.description}</ItemDescription>
                </ItemContent>
              </Item>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-5xl gap-10">
          <div className="mx-auto grid max-w-2xl gap-4 text-justify md:text-center">
            <h1 className="text-3xl font-bold">My Projects</h1>
            <p className="leading-7 text-muted-foreground">
              These projects showcase real-world applications built to solve
              practical problems through clean architecture, efficient
              workflows, and user-focused design.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.title} className="p-0 hover:ring-white/50">
                <CardContent className="grid gap-2 p-0">
                  <Image
                    src={project.thumbnail}
                    alt=""
                    width={600}
                    height={400}
                    className="rounded-t-xl object-center"
                  />
                  <div className="space-y-4 p-4">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="leading-6 text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant={"secondary"}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      nativeButton={false}
                      render={
                        <Link href={project.href}>
                          <IconExternalLink />
                          View Project
                        </Link>
                      }
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
