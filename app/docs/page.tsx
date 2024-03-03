import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { title, subtitle } from "@/components/primitives";

export default function DocsPage() {
  const sections = [
    {
      title: "Getting Started",
      subtitle: "Onboarding? Start here",
      link: {
        url: "/docs/getting-started",
        text: "Get Started",
      },
      description: "I wonder if I can get the markdown frontmatter here",
    },
    {
      title: "Standards & Guidelines",
      subtitle: "Coding standards, guidelines, and more",
      link: {
        url: "",
        text: "More Information",
      },
      description: "I wonder if I can get the markdown frontmatter here",
    },
    {
      title: "Tech Documentation",
      subtitle: "Internal product and solution documentation",
      link: {
        url: "",
        text: "RTFM",
      },
      description: "I wonder if I can get the markdown frontmatter here",
    },
  ];

  return (
    <>
      <div className="text-center">
        <h1 className="mb-1 text-center">Docs</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Explore team technical documentation, guidelines, and more
        </h2>
      </div>
      <Divider className="mb-5" />
      <div className="grid grid-cols-3 gap-4 w-max">
        {sections.map((section) => (
          <Card key={section.link.url} className="max-w-[400px] p-3">
            <CardHeader className="flex flex-col items-start">
              <h3 className={title({ color: "green", size: "xs" })}>
                {section.title}
              </h3>
              <p className="text-small text-default-500">{section.subtitle}</p>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>{section.description}</p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link href={section.link.url}>{section.link.text}</Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
