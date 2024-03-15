import { AppImage } from "@/components/app-image";

const appImage = {
  render: AppImage,
  attributes: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "",
    },
    title: {
      type: String,
    },
    size: {
      type: String,
      default: "md",
      matches: ["sm", "md", "lg"],
      errorLevel: "critical",
    },
    height: {
      type: Number,
    },
    width: {
      type: Number,
    },
    radius: {
      type: String,
      matches: ["none", "sm", "md", "lg", "full"],
      errorLevel: "warning",
    },
    shadow: {
      type: String,
      matches: ["none", "sm", "md", "lg", "full"],
      errorLevel: "warning",
    },
    blurred: {
      type: Boolean,
      default: false,
      description:
        "Whether the image should have a duplicated blurred image at the background.",
    },
    zoomed: {
      type: Boolean,
      default: false,
      description: "Whether the image should be zoomed when hovered.",
    },
  },
};

export default appImage;
