import React from "react";
import { Image } from "@nextui-org/image";

type ImageProps = {
  src: string;
  alt?: string;
  title?: string;
  size: "sm" | "md" | "lg";
  height: number;
  width: number;
  radius: "none" | "sm" | "md" | "lg" | "full";
  shadow: "none" | "sm" | "md" | "lg";
  blurred?: boolean;
  zoomed?: boolean;
};

export async function AppImage({
  src,
  alt,
  title,
  size,
  blurred,
  zoomed,
  height,
  width,
  radius,
  shadow,
}: ImageProps) {
  //prevent null alt tags
  if (!alt) alt = "";

  return (
    <Image
      alt={alt}
      title={title}
      src={src}
      sizes={size}
      height={height}
      width={width}
      radius={radius}
      shadow={shadow}
      isBlurred={blurred ?? false}
      isZoomed={zoomed ?? false}
    />
  );
}
