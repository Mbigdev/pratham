import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PRATHAM Cancer Institute",
    short_name: "PRATHAM",
    description:
      "Precision care. Human strength. A fictional oncology hospital demonstration.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8FAF8",
    theme_color: "#123D52",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
