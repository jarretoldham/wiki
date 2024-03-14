import * as React from "react";
import { Icon } from "./Icon";

const TYPE_MAP = {
  note: {
    icon: "information-circle",
    iconColor: "#8792a2",
  },
  warning: {
    icon: "warning",
    iconColor: "#d97917",
  },
  check: {
    icon: "checkmark-circle",
    iconColor: "var(--black)",
  },
  error: {
    icon: "warning",
    iconColor: "#ed5f74",
  },
};

type CalloutProps = {
  title: string;
  children: React.ReactElement;
  type: "note" | "warning" | "check" | "error";
};

export function Callout({ title, children, type }: CalloutProps) {
  const { icon, iconColor } = TYPE_MAP[type] || TYPE_MAP.note;
  return (
    <div className="my-5 px-5 py-3 border light:bg-slate-500 border-slate-900 dark:bg-slate-800 rounded-sm drop-shadow-lg">
      <div className="flex icon">
        <Icon icon={icon} color={iconColor} />
      </div>
      <span className="title text-lg font-semibold">{title}</span>
      <div className="copy">
        <span>{children}</span>
      </div>
    </div>
  );
}
