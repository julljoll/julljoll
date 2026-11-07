import type { CollectionEntry } from 'astro:content';
import type { Locale } from '@/lib/i18n';

export function postSlug(post: CollectionEntry<'blog'>): string {
  return post.id.replace(/\.(md|mdx)$/i, '');
}

export function formatPostDate(date: Date, locale: Locale = 'es'): string {
  return date.toLocaleDateString(locale === 'es' ? 'es-ES' : 'en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
