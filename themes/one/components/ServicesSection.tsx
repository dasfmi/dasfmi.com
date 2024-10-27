import { GraduationCapIcon, MessageCircleIcon, BoltIcon } from "lucide-react";
import { GlobeIcon } from "lucide-react";
import { CpuIcon } from "lucide-react";
import { CodeIcon } from "lucide-react";
import { SquareTerminalIcon } from "lucide-react";
import { BracesIcon } from "lucide-react";
import HireMeButton from "@/themes/one/components/HireMeButton";

export default function ServicesSection() {
  return (
    <div className="flex flex-col items-start gap-8 w-full container">
      <h1 className="page-title">الخدمات</h1>

      <div className="flex flex-col lg:flex-row gap-4 ">
        <p className="lg:w-2/3">
          بخبرة تزيد عن 7 سنوات في بناء تطبيقات الويب، أقدم خدمات مختلفة لمساعدة
          عملك على نمو وجوده على الويب. إليك ما يمكنني مساعدتك فيه:
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="flex flex-row gap-4 items-start">
          <div className="flex items-start">
            <BracesIcon className="size-8 text-gray-500 mt-1" />
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="dark:text-gray-200 text-xl flex flex-col">
              <span>تطبيقات الويب</span>
              <span className="flex-1" />
              <span className="text-subtitle-en">Webapps & SaaS</span>
            </h4>
            <p className="font-end">
              Fast, scalable & secure web applications with robust architecture.
            </p>
          </div>
        </section>

        <section className="flex flex-row gap-4 items-start">
          <div className="flex items-start">
            <GlobeIcon className="size-8 text-gray-500 mt-1" />
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="dark:text-gray-200 text-xl flex flex-col w-full">
              <span>تطوير المواقع</span>
              <span className="flex-1" />
              <span className="text-subtitle-en">Website Development</span>
            </h4>
            <p className="font-en">
              Impressively fast websites with great SEO that make your content
              shine.
            </p>
          </div>
        </section>

        <section className="flex flex-row gap-4 items-start">
          <div className="flex items-start">
            <CodeIcon className="size-8 text-gray-500 mt-1" />
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="dark:text-gray-200 text-xl flex flex-col w-full">
              <span>بناء الواجهات البرمجية</span>
              <span className="flex-1" />
              <span className="text-subtitle-en">Build APIs</span>
            </h4>
            <p className="font-en">
              Architecting and building APIs that power your web and mobile
              apps.
            </p>
          </div>
        </section>

        <section className="flex flex-row gap-4 items-start">
          <div className="flex items-start w-[3rem]">
            <CpuIcon className="text-gray-500 size-8 mt-1" />
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="dark:text-gray-200 text-xl flex flex-col w-full">
              <span>استشارات برمجية</span>
              <span className="flex-1" />
              <span className="text-subtitle-en">Engineering Consultation</span>
            </h4>
            <p className="font-en">
              Web services, APIs, command line applications, testing, devops.
            </p>
          </div>
        </section>
      </div>

      <h1 className="page-title">للمطورين</h1>

      <div className="flex">
        <div className="w-1/4" />
        <p className="w-3/4 text-left m font-en" dir="ltr">
          As I have been pirating the career ship in the hard seas during my
          career time, I gather the neceassary knowledge to help you grow. On
          top of helping you build your professional resumé, I offer you the
          following services:
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="flex flex-row gap-4 items-start">
          <div className="flex items-start">
            <GraduationCapIcon className="size-8 text-gray-500 mt-1" />
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="dark:text-gray-200 text-xl flex flex-col">
              <span>التوجيه</span>
              <span className="text-subtitle-en">Mentorship</span>
            </h4>
            <p className="font-en">
              I can help you with your coding problems, career advice, and
              technical guidance.
            </p>
          </div>
        </section>

        <section className="flex flex-row gap-4 items-start">
          <div className="flex items-start">
            <MessageCircleIcon className="size-8 text-gray-500 mt-1" />
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="dark:text-gray-200 text-xl flex flex-col">
              <span>مراجعة الكود</span>
              <span className="text-subtitle-en">Code Reviews</span>
            </h4>
            <p>
              I can review your code, provide feedback, and help you improve
              your skills.
            </p>
          </div>
        </section>

        <section className="flex flex-row gap-4 items-start">
          <div className="flex items-start">
            <SquareTerminalIcon className="size-8 text-gray-500 mt-1" />
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="dark:text-gray-200 text-xl flex flex-col">
              <span>الاستشارات</span>
              <span className="text-subtitle-en">Consulting</span>
            </h4>
            <p>
              I can help you with your project architecture, codebase, and
              technical decisions.
            </p>
          </div>
        </section>

        <section className="flex flex-row gap-4 items-start">
          <div className="flex items-start">
            <BoltIcon className="size-8 text-gray-500 mt-1" />
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="dark:text-gray-200 text-xl flex flex-col">
              <span>التدريب</span>
              <span className="text-subtitle-en">Training</span>
            </h4>
            <p>
              I can help you learn new technologies, improve your skills, and
              level up your career.
            </p>
          </div>
        </section>
      </div>

      <div className="flex flex-col items-center place-self-center gap-8 py-12">
        <h4
          className="dark:text-gray-200 text-xl flex flex-col justify-center text-center"
          dir="ltr"
        >
          <span>ألديك مشروع لنبنيه؟</span>
          <span className="text-subtitle-en">
            Have a project to build together?
          </span>
        </h4>
        <HireMeButton />
      </div>
    </div>
  );
}
