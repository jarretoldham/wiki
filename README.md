# Tech Wiki Site Template

This is a template that uses [Markdoc](https://markdoc.dev/), along with Next.js as a starting point for a technology documentation site. Markdoc is a stripe-developed react library that enables you to write markdown documents, while giving interfaces on how to render those markdown documents into react components. Next.js was used to standardize site routing and to enable easily build their [Static Site Generation](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation) site into html for simplistic and cheap hosting.

Markdoc is a superset of markdown, which makes document writing easy, but is also easily extensible and customizable to be able to render the each markdown (and custom) elements exactly how you wish. It treats .md files as data, rather than code, which would enable you to easily pull out your documents into a CMS or have users write documentation without having to know React.

Markdoc also allows for custom _tags_ which enable you to render more complex react components from inside a markdown file. It supports some basic (and custom, should you desire) functions - like an if/else - inside of markdown to customize document rendering, and variables. More information on the markdown syntax can be found [here](https://markdoc.dev/docs/syntax).

## Technologies Used

- [Next.js 13](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Markdoc](https://markdoc.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## How to Use

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

## Adding Documents

This project uses the Next.js [App Router](https://nextjs.org/docs/app/building-your-application/routing) - adding any `page.md` to the `/app/docs/{your-route}` folder will add an available route to the `/docs/{your-route}` path when running the app. The app router will parse any markdown into a react webpage with the following file extentions: `["markdoc", "md", "mdoc"]`.

`layout.tsx` files are used to customize the layout of documents, as well as the custom document component in `components/document.tsx`. We use the `/markdoc/nodes/document.markdoc.ts` [custom node](https://markdoc.dev/docs/nodes#customizing-markdoc-nodes) as the configured document node so we can grab document metadata from during the markdoc parsing and tranforming phase (such as headings for the table of contents). This was made slightly more complicated by the Next App router (vs. the previous page router). For more information on configuring and customizing markdoc, read the [Markdoc Configuration](#markdoc-configuration) section.

### Images

Self-hosted images and other static files should be stored in the `/public` directory for them to be able to be rendered by Next. You then will be able to use the markdown image node (or the custom markdoc {% appImage %} tag) with that image.

If in the `/public/images/your_image.png` directory, you need to use the `/images/your_image.png` as the image src.

```markdown
![Your Image](/images/your_image.png "Your Image")
```

or

```mdhttps://markdoc.dev/docs/nextjs
{% appImage src="/images/foxit-webhook-status.png" alt="Foxit Webhook Status" blurred=true radius="sm"/%}
```

> All images use the NextUI Image component, the custom markdown tag (`components/app-image.tsx`) has more available options to pass in props to customize rendering.

### Page Metadata

You can control the page title and description through the document [frontmatter](https://markdoc.dev/docs/frontmatter#yaml) under the nextjs: metadata: tags. These values will get passed to Next on document rendering.

```yaml
nextjs:
  metadata:
    title: Your Title
    description: Your Description
```

## Styles

This project uses [Tailwind CSS](https://tailwindcss.com/) for styles, and for the most part uses their utility classes directly in components. This also uses Tailwind [preflight](https://tailwindcss.com/docs/preflight) which removes a lot of base styling for most html components - this is great for most react components as it gives more flexibility styling your components without having to override defaults.

However, it's not as easy to style markdown-rendered documents directly with these, so this project uses the `@apply` directive in `styles/docs.css` to style html elements only to .md in the custom `document.tsx` component.

## Components and Theming

[NextUI](https://nextui.org/) is used for a base component library and theme provision to the webite. This repo was started using their starter template:

```bash
npx create-next-app -e https://github.com/nextui-org/next-app-template
```

## Markdoc Configuration

This project uses the [NextJS Markdoc package](https://markdoc.dev/docs/nextjs) for customization. The configuration in `next.config.js` looks at the `/markdoc/config.mjs` file's default export for customized nodes, tags, and more. Each subdirectory has it's own `index.js` file that is used for exporting all customization, such as `/markdoc/nodes/index.js` is exporting all custom node configuration to the `config.mjs`.

### Markdoc Language Server VS Code Extension

There's a custom [markdoc language server extension](https://github.com/markdoc/language-server) for VS Code that is developed to support syntax highlighting, prop suggestions, and more. I did my best to configure this according to their docs and the [next specific instructions](https://markdoc.dev/docs/nextjs#advanced), but am still having some trouble getting some features (syntax suggestions, autocomplete, etc.) working on my machine.

## License

Licensed under the MIT license
