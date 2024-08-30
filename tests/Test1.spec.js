const { test, expect } = require('@playwright/test');


test('First Playwright test', async ({ page }) => {
    await page.goto('https://www.facebook.com/login/');

    await expect(page).toHaveTitle(/Log in to Facebook/);
    await page.getByLabel('Email address or phone number').fill('hariharan');
    await page.getByPlaceholder('Password').fill('hariharan@123');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect().textContent();
    console.log(await page.locator("text()=['Invalid username or password']").textContent());
});