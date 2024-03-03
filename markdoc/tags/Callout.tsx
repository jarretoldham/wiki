import * as React from "react";
// import { Icon } from "./Icon";

type CalloutProps = {
  title: string;
  children: React.ReactElement;
};

export function Callout({ title, children }: CalloutProps) {
  return (
    <div className="my-5 px-5 py-3 border light:bg-slate-500 border-slate-900 dark:bg-slate-800 rounded-sm drop-shadow-lg">
      {/* <Icon icon={icon} /> */}
      <span className="title text-lg font-semibold">{title}</span>
      <div className="copy">
        <span>{children}</span>
      </div>
    </div>
  );
}
