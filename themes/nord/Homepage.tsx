import Description from "@/content/description.mdx";
import ar from "@/locales/ar";
import { getBlogPostList } from "@/services/blog.service";
import Link from "next/link";
import { SocialIcons } from "./components/SocialIcons";
import { ArrowLeftIcon } from "lucide-react";
import { ServicesPage } from "./ServicesPage";
import { Container, Divider, Row } from "@/uikit/Primitives";

export const HomePage = async () => {
  const posts = (await getBlogPostList()).slice(0, 3);

  return (
    <>
      <Container>
        <Row gap={4}>
          <div className="py-12">
            <h2 className="text-4xl font-bold">
              سلاماً عليكم، أنا إسلام شحاته.
            </h2>
            <div className="w-1/2 text-xl text-alt mt-8">
              <Description />
            </div>
          </div>

          <span className="flex-1" />
          <SocialIcons />
        </Row>
      </Container>

      <Divider />

      <Container>
        <div className="flex flex-col py-12">
          <span className="font-bold text-6xl block">7 سنوات</span>
          <p className="text-muted">خبرة في بناء التطبيقات</p>

          <div className="mt-12 flex gap-2 items-center text-lg">
            {ar.home.doYouHaveAProject}
            <Link href="/contact" className="text-action">
              {ar.actions.letsTalk}{" "}
            </Link>
            <ArrowLeftIcon className="w-4 h-4 mt-2" />
          </div>
        </div>
      </Container>

      <Divider />

      <section className="py-12">
        <div className="container">
          <h2 className="text-xl font-bold">{ar.home.latestPosts}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {posts.map((post) => (
              <div key={post.id} className="mb-4">
                <Link href={`/blog/${post.id}`} className="">
                  <p className="text-alt text-xs">{post.formattedPubDate}</p>
                  <h3 className="text-xl">{post.title}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      <ServicesPage />
    </>
  );
};
