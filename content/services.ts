export const description = `بخبرة تزيد عن 7 سنوات في بناء تطبيقات الويب، أقدم خدمات مختلفة لمساعدة
عملك على نمو وجوده على الويب. إليك ما يمكنني مساعدتك فيه:`;

export type Service = {
  icon: string;
  title: string;
  subtitle: string;
  summary: string;
};

export const services: Service[] = [
  {
    icon: "braces",
    title: "تطبيقات الويب",
    subtitle: "Webapps & SaaS",
    summary: `بناء تطبيقات الويب الشاملة (full stack) باستخدام أحدث التقنيات والأدوات`,
  },
  {
    icon: "globe",
    title: "تطوير المواقع",
    subtitle: "Website Development",
    summary: `تطوير مواقع الويب الديناميكية والساحرة باستخدام React و Next.js`,
  },
  {
    icon: "code",
    title: "بناء الواجهات البرمجية",
    subtitle: "API Development",
    summary: `بناء وتصميم واجهات برمجية قوية وموثوقة لتطبيقاتك`,
  },
  {
    icon: "cpu",
    title: "استشارات برمجية",
    subtitle: "Architecture Consultation",
    summary: `استشارات برمجية لمساعدتك في تحسين أداء تطبيقاتك وتحسين تصميمها`,
  },
];
