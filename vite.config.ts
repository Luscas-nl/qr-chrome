import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {src: "manifest.json", dest: ".", },
        {src: 'icons', dest: '.'}
      ],
    }),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        popup: "src/popup/index.html",
        background: "src/background/index.ts",
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
});
