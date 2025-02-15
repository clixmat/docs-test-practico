import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Docs test practico",
  description: "Documentación test practico",
  base: "/docs-test-practico/",
  outDir: "../dist",
  assetsDir: "assets",
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
});
