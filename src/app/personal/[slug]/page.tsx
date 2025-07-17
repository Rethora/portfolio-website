import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import {
  Meta,
  Schema,
  AvatarGroup,
  Button,
  Column,
  Flex,
  Heading,
  Media,
  Text,
} from "@once-ui-system/core";
import { baseURL, about, person, personal } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { ScrollToHash, CustomMDX } from "@/components";
import { Metadata } from "next";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "personal", "projects"]);
  console.log("posts from static params", posts);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const posts = getPosts(["src", "app", "personal", "projects"]);
  console.log(
    "Available slugs:",
    posts.map((p) => p.slug)
  );
  let post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.description,
    baseURL: baseURL,
    image:
      post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${personal.path}/${post.slug}`,
  });
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  try {
    const routeParams = await params;
    const slugPath = Array.isArray(routeParams.slug)
      ? routeParams.slug.join("/")
      : routeParams.slug || "";

    let posts = getPosts(["src", "app", "personal", "projects"]);
    console.log(
      "Available slugs:",
      posts.map((p) => p.slug)
    );
    let post = posts.find((post) => post.slug === slugPath);

    if (!post) {
      notFound();
    }

    const avatars =
      post.metadata.team?.map((person) => ({
        src: person.avatar,
      })) || [];

    console.log("post", post);
    console.log("slugPath", slugPath);

    return (
      <Column as="section" maxWidth="m" horizontal="center" gap="l">
        <Schema
          as="blogPosting"
          baseURL={baseURL}
          path={`${personal.path}/${post.slug}`}
          title={post.metadata.title}
          description={post.metadata.description}
          datePublished={post.metadata.date}
          dateModified={post.metadata.date}
          image={
            post.metadata.image ||
            `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
          }
          author={{
            name: person.name,
            url: `${baseURL}${about.path}`,
            image: `${baseURL}${person.avatar}`,
          }}
        />
        <Column maxWidth="xs" gap="16">
          <Button
            data-border="rounded"
            href="/work"
            variant="tertiary"
            weight="default"
            size="s"
            prefixIcon="chevronLeft"
          >
            Projects
          </Button>
          <Heading variant="display-strong-s">{post.metadata.title}</Heading>
        </Column>
        {post.metadata.images.length > 0 && (
          <Media
            priority
            aspectRatio="16 / 9"
            radius="m"
            alt="image"
            src={post.metadata.images[0]}
          />
        )}
        <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
          <Flex gap="12" marginBottom="24" vertical="center">
            {post.metadata.team && (
              <AvatarGroup reverse avatars={avatars} size="m" />
            )}
            <Text variant="body-default-s" onBackground="neutral-weak">
              {post.metadata.date && formatDate(post.metadata.date)}
            </Text>
          </Flex>
          <CustomMDX source={post.content} />
        </Column>
        <ScrollToHash />
      </Column>
    );
  } catch (e) {
    console.error("Error in /personal/[slug]:", e);
    return <h1>Render error: {String(e)}</h1>;
  }
}
