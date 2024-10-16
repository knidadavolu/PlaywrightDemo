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
  testDir: "./tests-mobile",
  reporter: [
    ['list'],
    ["allure-playwright"]
  ],
  use:{
    trace:'on',
    video:'retain-on-failure',
    screenshot:'on'
  },
});
