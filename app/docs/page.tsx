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
      description: "Using Markdoc and Markdown to power your wiki site",
    },
    {
      title: "Standards & Guidelines",
      subtitle: "Coding standards, guidelines, and more",
      link: {
        url: "coding-standards",
        text: "More Information",
      },
      description: "Coding standards, guidelines, and more",
    },
    {
      title: "Tech Documentation",
      subtitle: "Internal product and solution documentation",
      link: {
        url: "/docs/tech-documentation",
        text: "RTFM",
      },
      description:
        "More information on Markdoc, Next.js, and other libraries used to create this template",
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
      <div className="flex flex-col md:flex-row gap-4 w-full">
        {sections.map((section) => (
          <Card
            key={section.link.url}
            className="bg-background-400 max-w-[400px] p-3"
          >
            <CardHeader className="flex flex-col items-start">
              <h3 className={title({ color: "green", size: "xs" })}>
                {section.title}
              </h3>
              <p className="text-small text-default-500">{section.subtitle}</p>
            </CardHeader>
            <Divider />
            <CardBody className="align-middle">
              <p>{section.description}</p>
            </CardBody>
            <Divider />
            <CardFooter className="p-2">
              <Link
                href={section.link.url}
                color="primary"
                size="md"
                underline="hover"
              >
                {section.link.text}
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
