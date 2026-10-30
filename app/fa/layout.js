import RootShell from "@/components/root-shell";
import { vazirmatn } from "@/lib/fonts";
import { buildMetadata, viewport as siteViewport } from "@/lib/seo";

export const metadata = buildMetadata("fa");
export const viewport = siteViewport;

export default function PersianRootLayout({ children }) {
  return (
    <RootShell
      lang="fa"
      htmlClassName={vazirmatn.variable}
      bodyClassName={vazirmatn.className}
    >
      {children}
    </RootShell>
  );
}
