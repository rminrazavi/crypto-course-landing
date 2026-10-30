import RootShell from "@/components/root-shell";
import { buildMetadata, viewport as siteViewport } from "@/lib/seo";

export const metadata = buildMetadata("en");
export const viewport = siteViewport;

export default function EnglishRootLayout({ children }) {
  return <RootShell lang="en">{children}</RootShell>;
}
