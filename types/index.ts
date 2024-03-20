import { PropsWithChildren, SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type MarkdocTab = PropsWithChildren & {
  label: string;
};

export type MarkdocTabs = PropsWithChildren & {
  labels: MarkdocTab[];
  variant: "solid" | "bordered" | "light" | "underlined";
  size: "sm" | "md" | "lg";
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  fullWidth: boolean;
};
