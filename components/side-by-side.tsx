import { Divider } from "@nextui-org/divider";
import * as React from "react";

export function SideBySide({ children }: React.PropsWithChildren) {
  const [first, ...rest] = React.Children.toArray(children);

  return (
    <div className="flex flex-col sm:flex-row py-2 border-1 border-background-400 rounded">
      <div className="flex flex-column w-4/4 sm:w-2/4 px-2">{first}</div>
      <Divider orientation="vertical" className="h-100 hidden sm:block" />
      <Divider orientation="horizontal" className="w-11/12 block sm:hidden" />
      <div className="flex flex-column w-4/4 sm:w-2/4 px-2">{rest}</div>
    </div>
  );
}
