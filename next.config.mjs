import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "export",
  // turbo: {
  //   rules: {
  //     "*.yaml": {
  //       loaders: ["yaml-loader"],
  //     },
  //   },
  // },
};

const withMDX = createMDX({
  options: {
    // remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
