import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  projects: [
    {
      name: "iphone 12",
      use: {
        ...devices["iphone 12"],
        viewport: { width: 390, height: 844 },
        headless: false,
      },
    },
  ],
  testDir: "./tests/tests-mobile",
  reporter: [
    ['list'],
    ["allure-playwright"]
  ],
  use:{
    screenshot:'only-on-failure'
  },
});
