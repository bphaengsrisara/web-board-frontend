import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

export default function Hidden({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <VisuallyHidden.Root>{children}</VisuallyHidden.Root>;
}
