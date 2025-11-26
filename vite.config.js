import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
    base: mode === "development" ? "/" : "/sam-hume-portfolio/",
}));
