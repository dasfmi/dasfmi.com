import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

export function ContactPage() {
  return (
    <div className="flex gap-6 w-full container">
      <section className="lg:w-1/2">
        <h1 className="page-title">
          <span>وظفني</span>
        </h1>
        <p className="text-lg lg:w-10/12">
          أعمل معي ونبني مشاريعك. أرسل لي بريدًا إلكترونيًا وأخبرني عن مشروعك.
          سأعود إليك في غضون 48 ساعة. يمكنك التواصل معي على{" "}
          <a href="mailto:me@dasfmi.com" className="text-alt underline">
            me@dasfmi.com
          </a>
        </p>
        <ul className="list-none flex gap-2 items-center mt-8">
          <li className="text-muted">تواصل معي من خلال</li>
          <li>
            <a
              href="mailto:me@dasfmi.com"
              className="dark:fill-gray-400"
              aria-label="من خلال البريد"
            >
              <MailIcon className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/dasfmi"
              target="_blank"
              rel="noreferrer"
              aria-label="مشاريعي على Github"
              className="dark:fill-gray-400"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/dasfmi"
              target="_blank"
              rel="noreferrer"
              aria-label="ملفي على Linkedin"
              className="dark:fill-gray-400"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
          </li>
        </ul>
      </section>

      <form className="border shadow-sm p-8 lg:w-1/2 flex flex-col gap-6 items-start bg-neutral-50 dark:bg-neutral-900 dark:border-neutral-700 mt-12 rounded-xl">
        <div className="flex flex-col gap-3 w-full">
          <span>الإسم</span>
          <input
            type="text"
            className="w-full border shadow-sm py-2 px-2 dark:bg-neutral-950 dark:border-neutral-700 dark:text-white"
            placeholder="عبدالله"
          />
        </div>

        <div className="flex flex-col gap-3 w-full">
          <span>البريد</span>
          <input
            type="email"
            className="w-full shadow-sm border text-left p-2 dark:bg-neutral-950 dark:border-neutral-700"
            placeholder="someone@company.com"
          />
        </div>

        <div className="flex flex-col gap-3 w-full">
          <span>حدثني عن مشروعك</span>
          <textarea
            className="w-full border shadow-sm p-2 resize-none dark:bg-neutral-950 dark:border-neutral-700"
            placeholder="وصف مختصر للمشروع"
            rows={4}
          ></textarea>
        </div>

        <button className="btn-action">إرسال</button>
      </form>
    </div>
  );
}
