import { EleventyI18nPlugin } from '@11ty/eleventy';
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import markdownIt from 'markdown-it';
import markdownItLinkAttributes from 'markdown-it-link-attributes';
import htmlmin from "html-minifier-terser";

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPlugin(EleventyI18nPlugin, {
		defaultLanguage: 'fr' // Required
	});

	eleventyConfig.setLibrary("md", markdownIt({
        html: true,
        breaks: true,
        linkify: true
      }).use(markdownItLinkAttributes, {
        pattern: /^https?:\/\//, // Apply to all external links
        attrs: {
          target: '_blank',
          rel: 'noopener'
        }
      }));

	eleventyConfig.addPassthroughCopy({ "./src/assets/css/styles.min.css": "/assets/css/styles.css" });
	eleventyConfig.addPassthroughCopy({ "./src/assets/img": "/assets/img" });


	eleventyConfig.addCollection('projects-en', function (collectionApi) {
		return collectionApi.getAll().filter(item => {
			return item.data.tags && item.data.language === 'en' && item.data.tags.includes('project');
		}).sort((a, b) => {
			return a.data.title.localeCompare(b.data.title)
		});
	});

	eleventyConfig.addCollection('projects-fr', function (collectionApi) {
		return collectionApi.getAll().filter(item => {
			return item.data.tags && item.data.language === 'fr' && item.data.tags.includes('project');
		}).sort((a, b) => {
			return a.data.title.localeCompare(b.data.title)
		});
	});

	eleventyConfig.addTransform("htmlmin", function (content) {
		if ((this.page.outputPath || "").endsWith(".html")) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
			});

			return minified;
		}

		// If not an HTML output, return content as-is
		return content;
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
