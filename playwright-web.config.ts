import { defineConfig, devices, webkit } from "@playwright/test";

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
      name:"firefox",
      use:{
        browserName:"firefox",
        headless:false,
      },
    },

    {
      name:"webkit",
      use:{
        browserName:"webkit",
        headless:false,
      }
    }
  ],
  testDir: "./tests-web",
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
