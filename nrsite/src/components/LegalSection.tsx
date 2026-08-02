import { ReactNode } from "react";

export default function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="mb-3 font-display text-xl text-heading">{heading}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-mid [&_a]:text-roseText [&_a]:underline [&_a]:underline-offset-2 [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-heading [&_strong]:font-medium">
        {children}
      </div>
    </section>
  );
}
