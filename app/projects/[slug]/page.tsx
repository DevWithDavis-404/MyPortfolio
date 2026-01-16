import ProjectGallery from "@/components/project-gallery";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="mx-auto flex min-h-svh justify-center max-w-5xl flex-col gap-10 px-4 py-10 sm:px-6">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-left sm:text-center">
        <h1 className="text-2xl sm:text-3xl font-bold">
          {project.title}
        </h1>
        <p className="mt-3 leading-7 text-muted-foreground">
          {project.description}
        </p>
      </div>

      {/* Gallery */}
      <ProjectGallery images={project.images} />
    </div>
  );
}

