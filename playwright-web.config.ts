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
    {
      name: "Mobile Chrome",
      use: {
        ...devices["iphone 12"],
        headless: false,
      },
    },
  ],
  testDir: "./tests-web",
  reporter: "allure-playwright",
});
