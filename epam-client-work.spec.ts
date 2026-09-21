import { test, expect } from '@playwright/test';

test('EPAM Client Work is reachable from Services', async ({ page }) => {
  await page.goto('https://www.epam.com/', { waitUntil: 'domcontentloaded' });

  await page.getByRole('link', { name: 'Services', exact: true }).click();
  await page.getByRole('link', { name: 'Explore Our Client Work', exact: true }).click();

  await expect(page.getByText('Client Work', { exact: true })).toBeVisible();
});
