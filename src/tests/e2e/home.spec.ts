import { test, expect } from '@playwright/test';
import { SITE_NAME } from '@/lib/site';

test('home page shows the renamed profile hero and focuses the page on project areas', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(`${SITE_NAME} — Informática forense`);
  await expect(page.getByRole('heading', { name: /procesos judiciales/i })).toBeVisible();
  await expect(page.getByText(/Soy Jull Ortiz/)).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'Accesos del perfil' }).getByRole('link').last()).toContainText(
    'Blog forense',
  );
  await expect(page.getByRole('heading', { name: 'Áreas del proyecto' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Dispositivos móviles' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Evidencia y documentos digitales' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Análisis técnico-jurídico' })).toBeVisible();
  await expect(page.getByRole('heading', { name: /perspectiva jurídica/i })).toHaveCount(0);
  await expect(page.getByText(/Licenciatura en Derecho/)).toHaveCount(0);
  await expect(page.getByRole('heading', { name: 'Alcance pericial' })).toHaveCount(0);
  await expect(page.getByRole('link', { name: 'Sobre mí' }).first()).toHaveAttribute('href', '/experience/');
  await expect(page.getByRole('link', { name: 'Jull Ortiz', exact: true })).toBeVisible();
});

test('header exposes WhatsApp, Instagram, X, email, and website links', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('link', { name: 'WhatsApp' }).first()).toHaveAttribute(
    'href',
    'https://wa.me/584245585474',
  );
  await expect(page.getByRole('link', { name: 'Instagram' }).first()).toHaveAttribute(
    'href',
    'https://www.instagram.com/julljoll/',
  );
  await expect(page.getByRole('link', { name: 'X' }).first()).toHaveAttribute('href', 'https://x.com/julljoll');
  await expect(page.getByRole('link', { name: 'Correo electrónico' }).first()).toHaveAttribute(
    'href',
    'mailto:julljoll@gmail.com',
  );
  await expect(page.getByRole('link', { name: 'Sitio web: SHA256.US' }).first()).toHaveAttribute(
    'href',
    'https://sha256.us/es/',
  );

  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload();
  await page.locator('.nav-menu-button').click();
  await expect(page.getByRole('link', { name: 'WhatsApp' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Instagram' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'X', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Correo electrónico' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Sitio web: SHA256.US' })).toBeVisible();
});

test('About Me contains education, career, and forensic scope', async ({ page }) => {
  await page.goto('/experience/');
  await expect(page).toHaveTitle(`Sobre mí — ${SITE_NAME}`);
  await expect(page.getByRole('link', { name: 'Jull Ortiz', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Sobre mí' })).toBeVisible();
  await expect(page.getByText(/Licenciatura en Derecho/)).toBeVisible();
  await expect(page.getByText(/Mentors4EDU/)).toBeVisible();
  await expect(page.getByText(/Virtual Engine Marketing/)).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Cursos y certificaciones' })).toBeVisible();
  await expect(page.getByText('Fundamentos Básicos de la Informática Forense')).toBeVisible();
  await expect(page.getByText(/Curso autogestionado de 16 horas/)).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Cybersecurity Fundamentals' })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Patentes: un recorrido/ })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Verificar credencial' })).toHaveCount(8);
  await expect(page.getByText(/modelo AIDAR/)).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Alcance pericial' })).toBeVisible();
});
