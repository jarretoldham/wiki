export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="gap-4 py-5 md:py-5">{children}</section>;
}
