import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "../ProjectCard";
import { sortProjects } from "@/utils/projects";

interface ContributionsProps {
  range?: [number, number?];
}

export function Projects({ range }: ContributionsProps) {
  let allContributions = getPosts(["src", "app", "contributions", "projects"]);

  const sortedContributions = sortProjects(allContributions);

  const displayedContributions = range
    ? sortedContributions.slice(
        range[0] - 1,
        range[1] ?? sortedContributions.length
      )
    : sortedContributions;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedContributions.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`contributions/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.description}
          content={post.content}
          avatars={
            post.metadata.team?.map((member) => ({ src: member.avatar })) || []
          }
          link={post.metadata.url || ""}
          repository={post.metadata.repository || ""}
        />
      ))}
    </Column>
  );
}
