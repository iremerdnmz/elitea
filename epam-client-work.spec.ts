import { test, expect } from '@playwright/test';

test('EPAM Client Work is reachable from Services', async ({ page }) => {
  await page.goto('https://www.epam.com/', { waitUntil: 'domcontentloaded' });
  await expect(page).toHaveTitle('EPAM | Software Engineering & Product Development Services');
  await expect(page.getByRole('link', { name: 'Services', exact: true })).toBeVisible();

  await page.getByRole('link', { name: 'Services', exact: true }).click();
  await expect(page).toHaveURL('https://www.epam.com/services');

  await page.getByRole('link', { name: 'Explore Our Client Work', exact: true }).click();
  await expect(page).toHaveURL('https://www.epam.com/services/client-work');
  await expect(page.getByRole('heading', { name: 'Client Work', exact: true })).toBeVisible();
});
