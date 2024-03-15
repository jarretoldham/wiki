import React from "react";
// import { Image } from "@nextui-org/image";
import Image from "next/image";

import test from "@/assets/foxit-webhook-status.png";

type ImageProps = {
  src: string;
  alt: string;
  title: string;
};

export async function AppImage({ src, alt, title }: ImageProps) {
  const img = require(src);
  return <Image alt={alt} title={title} src={img} />;
}
