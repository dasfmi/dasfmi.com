import { GraduationCapIcon, MessageCircleIcon, BoltIcon } from "lucide-react";
import { SquareTerminalIcon } from "lucide-react";
import * as services from "@/content/services";
import { Container, Divider, Grid, Row, Stack } from "@/uikit/Primitives";
import Icon from "@/uikit/Icon";

export function ServicesPage() {
  return (
    <>
      <Container>
        <Stack gap={0}>
          <h1 className="page-title">الخدمات</h1>

          <div className="flex flex-col lg:flex-row gap-4 ">
            <p className="lg:w-2/3">{services.description}</p>
          </div>

          <section className="py-12">
            <Grid cols={{ sm: 1, md: 1, lg: 2, xl: 2 }} gap={12}>
              {services.services.map((svc, index) => (
                <Row key={index} gap={4}>
                  <Icon name={svc.icon} />
                  <Stack gap={3}>
                    <span className="text-xl text-main">{svc.title}</span>
                    <p className="text-alt text-xs">{svc.subtitle}</p>
                    <p className="text-muted">{svc.summary}</p>
                  </Stack>
                </Row>
              ))}
            </Grid>
          </section>
        </Stack>
      </Container>

      <Divider />

      <Container>
        <h1 className="page-title">للمطورين</h1>

        <div className="flex">
          <p className="w-3/4 text-alt">
            نظرًا لأنني كنت أمارس مهنة القرصنة في البحار القاسية أثناء فترة
            عملي، فإنني أجمع المعرفة اللازمة لمساعدتك على النمو. بالإضافة إلى
            مساعدتك في بناء سيرتك الذاتية المهنية، أقدم لك الخدمات التالية:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <section className="flex flex-row gap-4 items-start">
            <div className="flex items-start">
              <GraduationCapIcon className="size-8 text-gray-500 mt-1" />
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="dark:text-gray-200 text-xl flex flex-col">
                <span>التوجيه</span>
                <span className="text-xs mt-3 text-muted">Mentorship</span>
              </h4>
              <p className="text-sm text-alt">
                يمكنني مساعدتك في حل مشاكلك المتعلقة بالترميز، وتقديم المشورة
                المهنية، والتوجيه الفني.
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
                <span className="text-xs mt-3 text-muted">Code Reviews</span>
              </h4>
              <p className="text-sm text-alt">
                يمكنني مراجعة الكود الخاص بك، وتقديم الملاحظات، ومساعدتك على
                تحسين مهاراتك.
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
                <span className="text-xs text-muted mt-3">Consulting</span>
              </h4>
              <p className="text-sm text-alt">
                يمكنني مساعدتك في هندسة مشروعك وقاعدة التعليمات البرمجية
                والقرارات الفنية.
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
                <span className="text-xs text-muted mt-3">Training</span>
              </h4>
              <p className="text-sm text-alt">
                يمكنني مساعدتك في تعلم التقنيات الجديدة وتحسين مهاراتك والارتقاء
                بمسيرتك المهنية.
              </p>
            </div>
          </section>
        </div>
      </Container>

      <div className="flex flex-col items-center place-self-center gap-8 mt-24">
        <h4 className="dark:text-gray-200 text-xl flex flex-col justify-center text-center">
          <span>ألديك مشروعاً نبنيه؟</span>
        </h4>
        {/* <HireMeButton /> */}
      </div>
    </>
  );
}
