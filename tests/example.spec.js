import { test, expect } from '@playwright/test';

test('Verificar título de Playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
})
test('Verificar el logo', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  await expect(page.getByAltText('Playwright logo').first()).toBeVisible();
  })
  test('Verificar el boton node.js', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  await expect(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
  })
  test('Verificar el boton de busqueda', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  await expect(page.getByRole('button', { name: /Search/ })).toBeVisible();
  await page.screenshot({path:"captura.png"})
});

