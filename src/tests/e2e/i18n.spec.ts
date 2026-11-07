import { expect, test } from '@playwright/test';

test('Spanish is the default language and the language link opens English', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  await expect(page.getByRole('link', { name: 'Idioma: English' })).toHaveAttribute('href', '/en/');
  await expect(page.getByRole('link', { name: 'Inicio' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Jull Ortiz', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Áreas del proyecto' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Dispositivos móviles' })).toBeVisible();
  await expect(page.getByText(/Licenciatura en Derecho/)).toHaveCount(0);

  await page.getByRole('link', { name: 'Idioma: English' }).click();
  await expect(page).toHaveURL(/\/en\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('link', { name: 'Language: Español' })).toHaveAttribute('href', '/');
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Jull Ortiz', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Project focus areas' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Mobile devices' })).toBeVisible();
  await expect(page.getByText(/law degree at Universidad Nacional Experimental/)).toHaveCount(0);

  await page.goto('/en/experience/');
  await expect(page).toHaveTitle(/About me —/);
  await expect(page.getByRole('heading', { name: 'About me' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Education' })).toBeVisible();
  await expect(page.getByText(/Law degree/)).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Courses and certifications' })).toBeVisible();
  await expect(page.getByText('Basic Foundations of Digital Forensics')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Cybersecurity Fundamentals' })).toBeVisible();
  await expect(page.getByText(/16-hour course/)).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Forensic scope' })).toBeVisible();
});

test('language switcher keeps the visitor on the corresponding section', async ({ page }) => {
  await page.goto('/experience/');
  await page.getByRole('link', { name: 'Idioma: English' }).click();
  await expect(page).toHaveURL(/\/en\/experience\/$/);
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
