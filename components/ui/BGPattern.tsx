import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export type BGVariantType =
  | "dots"
  | "diagonal-stripes"
  | "grid"
  | "horizontal-lines"
  | "vertical-lines"
  | "checkerboard";

export type BGMaskType =
  | "fade-center"
  | "fade-edges"
  | "fade-top"
  | "fade-bottom"
  | "fade-left"
  | "fade-right"
  | "fade-x"
  | "fade-y"
  | "none";

export type BGPatternProps = ComponentProps<"div"> & {
  variant?: BGVariantType;
  mask?: BGMaskType;
  size?: number;
  fill?: string;
};

const maskClasses: Record<BGMaskType, string> = {
  "fade-edges":
    "[mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,#fff_22%,transparent_72%)]",
  "fade-center":
    "[mask-image:radial-gradient(ellipse_at_center,transparent,#fff)]",
  "fade-top":
    "[mask-image:linear-gradient(to_bottom,transparent,#fff)]",
  "fade-bottom":
    "[mask-image:linear-gradient(to_bottom,#fff,transparent)]",
  "fade-left":
    "[mask-image:linear-gradient(to_right,transparent,#fff)]",
  "fade-right":
    "[mask-image:linear-gradient(to_right,#fff,transparent)]",
  "fade-x":
    "[mask-image:linear-gradient(to_right,transparent,#fff,transparent)]",
  "fade-y":
    "[mask-image:linear-gradient(to_bottom,transparent,#fff,transparent)]",
  none: "",
};

function getBgImage(
  variant: BGVariantType,
  fill: string,
  size: number
): string | undefined {
  switch (variant) {
    case "dots":
      return `radial-gradient(${fill} 1px, transparent 1px)`;
    case "grid":
      return `linear-gradient(to right, ${fill} 1px, transparent 1px), linear-gradient(to bottom, ${fill} 1px, transparent 1px)`;
    case "diagonal-stripes":
      return `repeating-linear-gradient(45deg, ${fill}, ${fill} 1px, transparent 1px, transparent ${size}px)`;
    case "horizontal-lines":
      return `linear-gradient(to bottom, ${fill} 1px, transparent 1px)`;
    case "vertical-lines":
      return `linear-gradient(to right, ${fill} 1px, transparent 1px)`;
    case "checkerboard":
      return `linear-gradient(45deg, ${fill} 25%, transparent 25%), linear-gradient(-45deg, ${fill} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${fill} 75%), linear-gradient(-45deg, transparent 75%, ${fill} 75%)`;
    default:
      return undefined;
  }
}

export function BGPattern({
  variant = "grid",
  mask = "none",
  size = 24,
  fill = "rgba(255,255,255,0.07)",
  className,
  style,
  ...props
}: BGPatternProps) {
  const bgSize =
    variant === "checkerboard"
      ? `${size * 2}px ${size * 2}px`
      : `${size}px ${size}px`;
  const backgroundImage = getBgImage(variant, fill, size);

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-0 size-full [mask-mode:alpha] [mask-position:center] [mask-repeat:no-repeat] [mask-size:100%_100%]",
        maskClasses[mask],
        className
      )}
      style={{
        backgroundImage,
        backgroundSize: bgSize,
        ...style,
      }}
      {...props}
    />
  );
}

BGPattern.displayName = "BGPattern";
