import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "../ProjectCard";

interface PersonalProps {
  range?: [number, number?];
}

export function Projects({ range }: PersonalProps) {
  let allPersonal = getPosts(["src", "app", "personal", "projects"]);

  const sortedPersonal = allPersonal.sort((a, b) => {
    return (
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
    );
  });

  const displayedPersonal = range
    ? sortedPersonal.slice(range[0] - 1, range[1] ?? sortedPersonal.length)
    : sortedPersonal;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedPersonal.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`personal/${post.slug}`}
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
