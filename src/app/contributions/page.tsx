import { Column, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, contributions } from "@/resources";
import { Projects } from "@/components/contribution/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: contributions.title,
    description: contributions.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(contributions.title)}`,
    path: contributions.path,
  });
}

export default function Contributions() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={contributions.path}
        title={contributions.title}
        description={contributions.description}
        image={`/api/og/generate?title=${encodeURIComponent(
          contributions.title
        )}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Projects />
    </Column>
  );
}
