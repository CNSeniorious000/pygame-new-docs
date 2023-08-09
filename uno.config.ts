import { presetTypography, presetIcons, presetUno, presetWebFonts, transformerDirectives, defineConfig } from 'unocss';
import extractorSvelte from '@unocss/extractor-svelte';

export default defineConfig({
	presets: [
		presetUno({ variablePrefix: 'pygame-' }),
		presetIcons(),
		presetTypography(),
		presetWebFonts({
			provider: 'bunny',
			fonts: {
				mono: 'Fira Code',
				sans: 'Fira Sans',
				quicksand: 'Quicksand'
			}
		})
	],
	transformers: [transformerDirectives()],
	extractors: [extractorSvelte()]
});
