import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { title, subtitle } from "@/components/primitives";
import docSections from "@/config/doc-sections";

export default function DocsPage() {
  const sections = docSections;

  return (
    <>
      <div className="text-center">
        <h1 className="mb-1 text-center">Docs</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Explore team technical documentation, guidelines, and more
        </h2>
      </div>
      <Divider className="mb-5" />
      <div className="flex flex-col items-center md:items-stretch md:flex-row md:flex-wrap md:justify-center gap-4 w-full">
        {sections.map((section) => (
          <Card
            key={section.link.url}
            className="bg-background-400 w-full md:w-5/12 lg:w-5/12 max-w-sm p-3"
          >
            <CardHeader className="flex flex-col items-start">
              <h3
                className={[title({ color: "green", size: "xs" }), "mb-0"].join(
                  " ",
                )}
              >
                {section.title}
              </h3>
              <p className="text-small text-default-500 my-0">
                {section.subtitle}
              </p>
            </CardHeader>
            <Divider />
            <CardBody className="align-middle">
              <p className="my-0">{section.description}</p>
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
