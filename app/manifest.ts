import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Daniel Ferrena | Professional Portfolio",
    short_name: "Daniel Ferrena",
    description: "Field marketing, retail execution, leadership, and brand advocacy portfolio.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbfbfd",
    theme_color: "#fbfbfd",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
