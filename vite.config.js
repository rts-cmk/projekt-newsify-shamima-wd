import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      "/nyt": {
        target: "https://api.nytimes.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/nyt/, ""),
      },
    },
  },
});
