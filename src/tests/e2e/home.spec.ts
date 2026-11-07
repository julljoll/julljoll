import { test, expect } from '@playwright/test';
import { SITE_NAME } from '@/lib/site';

test('home page focuses only on project areas and links to the profile separately', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(`${SITE_NAME} — Áreas del proyecto`);
  await expect(page.getByRole('heading', { name: 'Áreas del proyecto' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Dispositivos móviles' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Evidencia y documentos digitales' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Análisis técnico-jurídico' })).toBeVisible();
  await expect(page.getByRole('heading', { name: /perspectiva jurídica/i })).toHaveCount(0);
  await expect(page.getByText(/Licenciatura en Derecho/)).toHaveCount(0);
  await expect(page.getByRole('heading', { name: 'Alcance pericial' })).toHaveCount(0);
  await expect(page.getByRole('link', { name: 'Sobre mí' })).toHaveAttribute('href', '/experience/');
});

test('About Me contains education, career, and forensic scope', async ({ page }) => {
  await page.goto('/experience/');
  await expect(page).toHaveTitle(`Sobre mí — ${SITE_NAME}`);
  await expect(page.getByRole('heading', { name: 'Sobre mí' })).toBeVisible();
  await expect(page.getByText(/Licenciatura en Derecho/)).toBeVisible();
  await expect(page.getByText(/Mentors4EDU/)).toBeVisible();
  await expect(page.getByText(/Virtual Engine Marketing/)).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Alcance pericial' })).toBeVisible();
});
