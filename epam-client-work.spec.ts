import { expect, test } from '@playwright/test';

test.describe('EPAM client work navigation', () => {
  test('opens the Client Work page from Services', async ({ page }) => {
    await page.goto('https://www.epam.com/');

    await page.getByRole('link', { name: 'Services' }).click();
    await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

    await expect(page.getByText('Client Work', { exact: true })).toBeVisible();
  });
});
