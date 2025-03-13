import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    "./app/**/*.tsx", // Scan files in the app directory
    "./components/**/*.tsx", // Scan files in the components directory
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}", // Explicitly point to the source files in your UI package
  ],
  presets: [sharedConfig],
};

export default config;