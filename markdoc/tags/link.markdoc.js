import { AppLink } from "@/components/app-link";

//I took most of this from the next.js plugin https://github.com/markdoc/next.js/blob/main/src/tags.js
const nextLink = {
  render: AppLink,
  description: 'Displays a NextUI link',
  attributes: {
    href: {
      description: 'The path or URL to navigate to.',
      type: String,
      errorLevel: 'critical',
      required: true,
    },
    target: {
      description: 'HTML attribute anchor target ("_self", "_blank", "_parent", "_top")',
      type: String,
    },
    size: { 
      description: "NextUI link sizing ('sm' | 'md' | 'lg')", 
      type: String, 
      matches: ['sm', 'md', 'lg'], 
      errorLevel: 'warning'
    }
  },
};

export default nextLink
