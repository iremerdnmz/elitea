import { expect, test } from '@playwright/test';

test('navigates from Services to Client Work', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  await page.getByRole('link', { name: 'Services' }).last().click();
  await expect(page).toHaveURL(/\/services$/);

  await page.getByRole('link', { name: /view all case studies/i }).click();
  await expect(page).toHaveURL(/\/services\/client-work$/);
  await expect(page.getByRole('heading', { name: 'Client Work' })).toBeVisible();
});
