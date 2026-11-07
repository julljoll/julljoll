import { expect, test } from '@playwright/test';

const PROJECT_REPOSITORIES = [
  'https://github.com/julljoll/Compliace-Forensic-js',
  'https://github.com/julljoll/Ulpiano-Chief-Compliance-Officer',
  'https://github.com/julljoll/JullBrain',
  'https://github.com/julljoll/FotoForense',
  'https://github.com/julljoll/IPED_SHA256.US',
];

test('projects page lists all featured repositories in Spanish', async ({ page }) => {
  await page.goto('/projects/');

  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  await expect(page.getByRole('heading', { name: 'SHA256.US · Compliance Forensic' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Ulpiano · Chief Compliance Officer' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'JullBrain' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'FotoForense · PhotoHolmes' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'IPED_SHA256.US' })).toBeVisible();
  await expect(page.locator('article.project-card a')).toHaveCount(PROJECT_REPOSITORIES.length);

  for (const [index, repository] of PROJECT_REPOSITORIES.entries()) {
    await expect(page.locator('article.project-card a').nth(index)).toHaveAttribute('href', repository);
  }
});

test('projects are available in English and the colors page is removed from navigation', async ({ page }) => {
  await page.goto('/en/projects/');

  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('heading', { name: 'Selected projects' })).toBeVisible();
  await expect(page.locator('article.project-card a')).toHaveCount(PROJECT_REPOSITORIES.length);
  await expect(page.getByRole('link', { name: 'Colors' })).toHaveCount(0);
  await expect(page.getByRole('link', { name: 'Colores' })).toHaveCount(0);
});
