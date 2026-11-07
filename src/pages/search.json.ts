import { getCollection } from 'astro:content';
import { withBase } from '@/lib/paths';
import { postSlug } from '@/lib/posts';
import { PAGE_SEARCH_ENTRIES_ES, type SearchEntry } from '@/lib/search';
import { localizedPath } from '@/lib/i18n';

export async function GET(): Promise<Response> {
  const posts = await getCollection('blog');
  const postEntries: SearchEntry[] = posts
    .filter((post) => !post.data.draft && post.data.locale === 'es')
    .map((post) => ({
      title: post.data.title,
      description: post.data.description,
      tags: post.data.tags,
      body: post.body ?? '',
      url: `/blog/${postSlug(post)}/`,
    }));

  const entries: SearchEntry[] = [...PAGE_SEARCH_ENTRIES_ES, ...postEntries].map((entry) => ({
    ...entry,
    url: withBase(localizedPath(entry.url, 'es')),
  }));

  return new Response(JSON.stringify(entries), {
    headers: { 'Content-Type': 'application/json' },
  });
}
