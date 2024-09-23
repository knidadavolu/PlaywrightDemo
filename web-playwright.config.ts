import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
    projects:[
        {
            name:'chromium',
            use:{
                browserName:'chromium',
                headless: false,
            },
        },
    ],
  testDir: './web-tests',
  reporter:[['allure-playwright']],
  
});
