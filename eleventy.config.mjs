import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';

import { EleventyI18nPlugin } from '@11ty/eleventy';

export default function (eleventyConfig) {
	eleventyConfig.on('eleventy.before', async () => {
		const tailwindInputPath = path.resolve('./src/assets/css/tailwind.css');
		const tailwindOutputPath = './dist/assets/css/tailwind.css';
		const cssContent = fs.readFileSync(tailwindInputPath, 'utf8');
		const outputDir = path.dirname(tailwindOutputPath);

		if (!fs.existsSync(outputDir)) {
			fs.mkdirSync(outputDir, { recursive: true });
		}

		const result = await postcss([tailwindcss()]).process(cssContent, {
			from: tailwindInputPath,
			to: tailwindOutputPath,
		});

		fs.writeFileSync(tailwindOutputPath, result.css);
	});

	eleventyConfig.addPlugin(EleventyI18nPlugin, {
		defaultLanguage: 'fr' // Required
	});

	return {
		dir: {
			input: "src",
			output: "dist",
			includes: "_includes",
		},
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk'
	};
}
