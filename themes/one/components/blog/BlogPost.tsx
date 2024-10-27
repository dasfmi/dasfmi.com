// import pkg, { RenderableTreeNodes } from "@markdoc/markdoc";
import { ArrowLeft } from "lucide-react";
import * as React from "react";

type Props = {
  // content: RenderableTreeNodes;
  frontmatter: any;
  headings: { title: string }[];
};

export function BlogPost({ frontmatter, headings }: Props) {
  return (
    <section className="container">
      <img
        src={frontmatter.heroImage}
        alt={frontmatter.title}
        className="lg:hidden"
      />

      <div className="flex flex-col lg:flex-row gap-12 w-full max-h-full overflow-y-hidden">
        <aside className="lg:w-1/4">
          <section id="author" className="hidden lg:flex lg:flex-col">
            <div className="bg-neutral-100 dark:bg-neutral-800 h-24 w-full block" />

            <img
              src="/img/islam-shehata.webp"
              className="rounded-full mx-auto w-24 h-24 -mt-12"
              alt="author avatar"
            />

            <p className="text-center mt-4 text-neutral-500 dark:text-neutral-300">
              إسلام شحاته
            </p>
          </section>
          <nav className="w-full flex flex-col mt-12">
            {headings.map((heading, index) => (
              <h4
                key={index}
                className="flex py-3 text-base border-b border-neutral-300 dark:border-neutral-500"
              >
                <a
                  href={`#${heading.title}`}
                  className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 hover:dark:text-neutral-200 flex  gap-2 items-center w-full"
                >
                  {heading.title}
                  <span className="flex-1" />
                  <ArrowLeft className="w-4 h-4" />
                </a>
              </h4>
            ))}
          </nav>
          {/* <TableOfContents headings={headings} /> */}
        </aside>
        <article className="prose dark:prose-invert prose-xl w-full lg:w-3/4 overflow-y-auto">
          <h1 className="text-2xl w-full text-neutral-950 dark:text-neutral-100 leading-snug lg:leading-relaxed">
            {frontmatter.title}
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 mt-4">
            {frontmatter.description}
          </p>
          <img
            src={frontmatter.heroImage}
            alt={frontmatter.title}
            className="hidden lg:block my-12"
          />
          {/* {renderers.react(content, React)} */}
        </article>
      </div>
    </section>
  );
}
