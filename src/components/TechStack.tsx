import { getTechStack } from "@/utils/utils";
import {
  AutoScroll,
  Column,
  HeadingLink,
  IconButton,
} from "@once-ui-system/core";

type TechStackProps = {
  technologies: string[];
};

export default function TechStack({ technologies }: TechStackProps) {
  const techStack = getTechStack(technologies);

  return (
    <>
      <Column maxWidth="m">
        <HeadingLink as="h2" id="technologies" marginTop="24" marginBottom="12">
          Tech Stack
        </HeadingLink>
        <ul>
          {techStack.map((technology) => (
            <li
              style={{
                marginRight: "10px",
                marginBottom: "10px",
              }}
              key={technology.name}
            >
              {technology.name}
            </li>
          ))}
        </ul>
      </Column>
      <Column fillWidth style={{ margin: "auto" }} as="section">
        {/* <Fade
          zIndex={1}
          to="right"
          fillHeight
          width="64"
          position="absolute"
          left="0"
          top="0"
        /> */}
        <AutoScroll paddingY="40">
          {techStack.map((tech) => (
            <IconButton
              variant="ghost"
              disabled
              key={tech.name}
              icon={tech.icon}
              tooltip={tech.name}
            />
          ))}
        </AutoScroll>
        {/* <Fade
          zIndex={1}
          to="left"
          fillHeight
          width="64"
          position="absolute"
          right="0"
          top="0"
        /> */}
      </Column>
    </>
  );
}
