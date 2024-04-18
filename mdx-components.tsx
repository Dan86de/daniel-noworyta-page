import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    ...components,
    Image: (props: ImageProps) => <Image {...props} alt={props.alt} />,
  };
}
