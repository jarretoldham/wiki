"use client";

import { useTheme } from "next-themes";
import { Snippet } from "@nextui-org/snippet";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useState } from "react";

export function CodeBlock({ children, "data-language": language }: any) {
  const { theme, setTheme } = useTheme();

  const style = theme === "light" ? oneLight : oneDark;
  //github.com/react-syntax-highlighter/react-syntax-highlighter
  return (
    <div className="my-4 ml-5 w-11/12">
      <SyntaxHighlighter
        language={language}
        style={style}
        className="w-full"
        PreTag={Snippet}
        //pass in props to the Snippet component
        {...{ hideSymbol: true }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
