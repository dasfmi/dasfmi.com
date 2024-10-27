import HireMeButton from "@/themes/one/components/HireMeButton";
import { SocialIcons } from "./SocialIcons";
import Button from "../primitives/Button";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row gap-8 lg:gap-0 container py-12 lg:py-24">
      <section className="w-full lg:w-1/2" dir="rtl">
        <h2 className="text-3xl lg:text-6xl dark:text-white">
          <p className="text-lg">سلاٌم عليكم 👋</p>
          أنا إسلام شحاته.
        </h2>

        <SocialIcons />
      </section>

      <section className="lg:w-1/2">
        <p className="text-2xl lg:text-2xl dark:text-white leading-tight">
          متخصص في بناء وتطوير تطبيقات الويب
        </p>
        <p className="text-sm dark:text-neutral-400 mt-4">
          خبرة أكثر من 7 سنوات في مجال تطوير البرمجيات.
        </p>
        <section className="flex gap-4 mt-12">
          <HireMeButton />
          <Button href="/projects">تصفح أعمالي</Button>
        </section>
      </section>
    </section>
  );
}
