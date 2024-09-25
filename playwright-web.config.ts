import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  projects: [
    {
      name: "chromium",
      use: {
        browserName: "chromium",
        headless: false,
      },
    },
  ],
  testDir: "./tests-web",
  reporter: "allure-playwright",
});
