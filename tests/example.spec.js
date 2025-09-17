import { test, expect } from '@playwright/test';

test('Verificar título de Playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
  await expect(page.getByAltText('Playwright logo').first()).toBeVisible();
  await expect(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
  await expect(page.getByRole('button', { name: /Search/ })).toBeVisible();
  await page.screenshot({path:"captura.png"})
});

