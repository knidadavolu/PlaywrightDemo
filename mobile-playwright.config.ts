import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
    projects:[
        {
            name:'iphone 12',
            use:{
                ...devices['iphone 12'],
                headless: false,
            },
        },
    ],
  testDir: './mobile-tests',
  reporter:[['allure-playwright']],
  
});
