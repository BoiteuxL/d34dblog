import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';

import { EleventyI18nPlugin } from '@11ty/eleventy';
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPlugin(EleventyI18nPlugin, {
		defaultLanguage: 'fr' // Required
	});

	
	eleventyConfig.addPassthroughCopy({ "./src/scripts/": "/scripts/" });
	eleventyConfig.addPassthroughCopy({ "./src/assets/": "/assets/" });


	eleventyConfig.addCollection('projects-en', function (collectionApi) {
		return collectionApi.getAll().filter(item => {
			return item.data.tags && item.data.language === 'en' && item.data.tags.includes('project');
		});
	});

	eleventyConfig.addCollection('projects-fr', function (collectionApi) {
		return collectionApi.getAll().filter(item => {
			return item.data.tags && item.data.language === 'fr' && item.data.tags.includes('project');
		});
	});

	eleventyConfig.on('eleventy.after', async () => {
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
