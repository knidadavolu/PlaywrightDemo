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
  testDir: "./tests/tests-web",
  reporter: [
    ['list'],
    ["allure-playwright"]
  ],
  use:{
    screenshot:'only-on-failure'
  },
});
