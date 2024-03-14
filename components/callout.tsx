"use client";

import * as React from "react";
import { Icon } from "./Icon";
import { useTheme } from "next-themes";

const TYPE_MAP = {
  note: {
    icon: "information-circle",
    iconColor: "text-foreground",
    borderColor: "border-zinc-600",
  },
  warning: {
    icon: "warning",
    iconColor: "text-orange-600",
    borderColor: "border-orange-600",
  },
  check: {
    icon: "checkmark-circle",
    iconColor: "text-foreground",
    borderColor: "border-zinc-600",
  },
  error: {
    icon: "warning",
    iconColor: "text-red-600",
    borderColor: "border-red-600",
  },
};

type CalloutProps = {
  title: string;
  children: React.ReactElement;
  type: "note" | "warning" | "check" | "error";
};

export function Callout({ title, children, type }: CalloutProps) {
  const { icon, iconColor, borderColor } = TYPE_MAP[type] || TYPE_MAP.note;

  const { theme, setTheme } = useTheme();

  const colors: any = {
    light: "bg-zinc-200",
    dark: "bg-zinc-800",
  };
  const background = theme ? colors[theme] : colors.dark;

  return (
    <div
      className={`flex flex-row items-center m-5 px-5 py-3 border ${borderColor} ${background} rounded drop-shadow`}
    >
      <div className="flex mr-5">
        <Icon icon={icon} color={iconColor} />
      </div>
      <div className="flex flex-col">
        <span className="text-base">{title}</span>
        <div className="text-sm">
          <span>{children}</span>
        </div>
      </div>
    </div>
  );
}
