import { Column, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, personal } from "@/resources";
import { Projects } from "@/components/personal/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: personal.title,
    description: personal.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(personal.title)}`,
    path: personal.path,
  });
}

export default function Personal() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={personal.path}
        title={personal.title}
        description={personal.description}
        image={`/api/og/generate?title=${encodeURIComponent(personal.title)}`}
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
