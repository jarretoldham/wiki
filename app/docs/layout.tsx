// import { markdoc } from "./getting-started/writing/page";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // console.log(markdoc);
  return <section className="gap-4 py-5 md:py-5">{children}</section>;
}
