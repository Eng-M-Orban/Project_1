import { test, expect } from '@playwright/test';

test('Register', async ({ page }) => {
  await page.goto('http://localhost:8080/OpenCart/');
  await page.getByRole('link', { name: ' My Account ' }).click();
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByRole('textbox', { name: '* First Name' }).click();
  await page.getByRole('textbox', { name: '* First Name' }).fill('Mahmoud');
  await page.getByRole('textbox', { name: '* First Name' }).press('Tab');
  await page.getByRole('textbox', { name: '* Last Name' }).fill('Orban');
  await page.getByRole('textbox', { name: '* Last Name' }).press('Tab');
  await page.getByRole('textbox', { name: '* E-Mail' }).fill('elprof6075@gmail.com');
  await page.getByRole('textbox', { name: '* E-Mail' }).press('Tab');
  await page.getByRole('textbox', { name: '* Password' }).fill('abc123');
  await page.getByRole('textbox', { name: '* Password' }).press('Tab');
  await page.locator('#input-newsletter').check();
  await page.locator('input[name="agree"]').check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('link', { name: 'Continue' }).click();
  ;
});