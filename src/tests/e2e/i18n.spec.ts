import { expect, test } from '@playwright/test';

test('Spanish is the default language and the language link opens English', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  await expect(page.getByRole('link', { name: 'Idioma: English' })).toHaveAttribute('href', '/en/');
  await expect(page.getByRole('link', { name: 'Inicio' })).toBeVisible();
  await expect(page.getByRole('heading', { name: /evidencia digital/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Áreas del proyecto' })).toBeVisible();

  await page.getByRole('link', { name: 'Idioma: English' }).click();
  await expect(page).toHaveURL(/\/en\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('link', { name: 'Language: Español' })).toHaveAttribute('href', '/');
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  await expect(page.locator('.content-shell > section h2').first()).toContainText(
    /expert reports for judicial proceedings/i,
  );
  await expect(page.getByRole('heading', { name: 'Project focus' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'A legal perspective on digital evidence' })).toBeVisible();
  await expect(page.getByText(/law degree at Universidad Nacional Experimental/)).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Forensic scope' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Explore SHA256.US' })).toHaveAttribute('href', 'https://sha256.us/es/');
});

test('language switcher keeps the visitor on the corresponding section', async ({ page }) => {
  await page.goto('/blog/');
  await page.getByRole('link', { name: 'Idioma: English' }).click();
  await expect(page).toHaveURL(/\/en\/blog\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
});

test('blog listings only show posts written in the current language', async ({ page }) => {
  await page.goto('/blog/');
  await expect(page.getByRole('heading', { name: 'Bienvenida al sitio' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Make it yours' })).toHaveCount(0);

  await page.goto('/en/blog/');
  await expect(page.getByRole('heading', { name: 'Make it yours' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Bienvenida al sitio' })).toHaveCount(0);
});
