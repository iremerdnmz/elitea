import { expect, test } from '@playwright/test';

test('opens Client Work from Services', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  await page.getByRole('link', { name: 'Services', exact: true }).click();
  await page
    .getByRole('link', { name: /Explore Our Client Work/i })
    .click();

  await expect(page.getByText('Client Work', { exact: true })).toBeVisible();
});
