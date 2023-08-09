import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

// const cache: Record<string, { timestamp: number; dom: string }> = {};

export const load = (async ({ fetch, params, setHeaders }) => {
	const { path } = params;

	const url = `https://proxy.pygame.site/docs/${path}`;

	// if (cache[url] && cache[url].timestamp + 100 * 60 * 1000 > Date.now()) {
	// 	const { dom } = cache[url];
	// 	return { url, dom };
	// }

	const res = await fetch(url, { headers: { 'user-agent': 'pygame.site' } });

	if (!res.ok) throw error(res.status, await res.text());

	const dom = await res.text();

	// cache[url] = {
	// 	dom,
	// 	timestamp: Date.now()
	// };

	setHeaders({ 'cache-control': 'public; max-age=6000' });

	return { url, dom };
}) satisfies PageLoad;
