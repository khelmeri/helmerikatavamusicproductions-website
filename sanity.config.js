import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { site } from "@/sanity/schemas/site";
import { song } from "@/sanity/schemas/song";

const config = defineConfig({
  name: "heavy-service-music-website",
  projectId: "1tnyclu0",
  dataset: "production",
  title: "Heavy Service Music Website",
  apiVersion: "2023-12-06",
  basePath: "/helmeri",
  plugins: [deskTool(), visionTool()],
  schema: { types: [site, song] },
});

export default config;
