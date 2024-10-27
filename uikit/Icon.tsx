import { BracesIcon, GlobeIcon, CodeIcon, CpuIcon } from "lucide-react";

export default function Icon({ name }: { name: string }) {
  switch (name) {
    case "braces":
      return <BracesIcon className="size-8 text-alt mt-1" />;
    case "globe":
      return <GlobeIcon className="size-8 text-alt mt-1" />;
    case "code":
      return <CodeIcon className="size-8 text-alt mt-1" />;
    case "cpu":
      return <CpuIcon className="size-8 text-alt mt-1" />;
  }
}
