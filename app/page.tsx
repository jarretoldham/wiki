import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 pt-16 mt-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Your Wiki,&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Better&nbsp;</h1>
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>
          A Markdoc-powered Next.js wiki to improve your documentation solution
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          href={siteConfig.links.docs}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideSymbol hideCopyButton variant="flat">
          <span>
            Get started by adding a page.md file{" "}
            <Code color="primary">app/docs/</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
