import type { LayoutServerLoad } from './$types';

export const config = { runtime: 'edge' };

export const load = (async () => {
	return {};
}) satisfies LayoutServerLoad;
