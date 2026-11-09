import type { CollectionEntry } from 'astro:content';
import type { Locale } from '@/lib/i18n';

export function postSlug(post: CollectionEntry<'blog'>): string {
  const filename = post.id.split('/').pop() ?? post.id;
  return filename.replace(/\.(md|mdx)$/i, '');
}

export function postImage(post: CollectionEntry<'blog'>): string {
  return post.data.image ?? '/assets/blog/ibm-razonamiento-gobernado.svg';
}

export function postImageAlt(post: CollectionEntry<'blog'>): string {
  return post.data.imageAlt ?? post.data.title;
}

export function formatPostDate(date: Date, locale: Locale = 'es'): string {
  return date.toLocaleDateString(locale === 'es' ? 'es-ES' : 'en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
