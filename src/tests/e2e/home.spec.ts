import { test, expect } from '@playwright/test';
import { SITE_NAME } from '@/lib/site';

test('home page has a title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(`${SITE_NAME} — Perfil profesional`);
  await expect(page.getByRole('heading', { name: /evidencia digital/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /perspectiva jurídica/i })).toBeVisible();
  await expect(page.getByText(/Licenciatura en Derecho/)).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Alcance pericial' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/julljoll/',
  );
  await expect(page.getByRole('link', { name: 'Conoce SHA256.US' })).toHaveAttribute('href', 'https://sha256.us/es/');
  await expect(page.getByRole('link', { name: 'Explora el blog forense' })).toHaveAttribute(
    'href',
    'https://blog-astro-fawn.vercel.app/',
  );
});
