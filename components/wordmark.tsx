import Link from "next/link";
import { site } from "@/data/site";

export function Wordmark() {
  return <Link href="/" className="relative z-10 cursor-pointer text-[15px] font-semibold tracking-[-0.04em] transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0066cc]" aria-label="Return to Home">
    {site.name}<span className="text-[#6e6e73]">.</span>
  </Link>;
}
