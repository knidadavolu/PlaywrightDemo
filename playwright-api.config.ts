import { defineConfig, devices, webkit } from "@playwright/test";

export default defineConfig({
  use: {
    baseURL: "", //Provide Base URL for API
    extraHTTPHeaders: {
      //Header to be included in all API requests
      "content-Type": "application/json",
      Authorization: "Bearer", // Provide Token
    },
  },
});
