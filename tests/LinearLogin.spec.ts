import {test, expect} from '@playwright/test';
test('Login', async ({page}) => {
  await page.goto('http://localhost:8080/OpenCart/');
  await page.getByRole('link', {name: ' My Account '}).click();
    await page.getByRole('link', {name: 'Login'}).click();
    await page.getByRole('textbox', {name: 'E-Mail'}).click();
    await page.getByRole('textbox', {name: 'E-Mail'}).fill('elprof6075@gmail.com');
    await page.getByRole('textbox', {name: 'Password'}).click();
    await page.getByRole('textbox', {name: 'Password'}).fill('abc123');
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page.getByRole('link', {name: 'Edit your account information'})).toBeVisible();

}); 
test('test', async ({page}) => {
  await page.goto('http://localhost:8080/OpenCart/');
  await page.getByRole('link', { name: ' My Account ' }).click();
});
