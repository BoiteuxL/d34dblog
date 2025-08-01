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
	eleventyConfig.addPassthroughCopy({ "./src/assets/images": "/assets/images" });


	eleventyConfig.addCollection('projects-en', function (collectionApi) {
		return collectionApi.getAll().filter(item => {
			return item.data.tags && item.data.language === 'en' && item.data.tags.includes('Website/Project');
		}).sort((a, b) => {
			return a.data.title.localeCompare(b.data.title)
		});
	});

	eleventyConfig.addCollection('projects-fr', function (collectionApi) {
		return collectionApi.getAll().filter(item => {
			return item.data.tags && item.data.language === 'fr' && item.data.tags.includes('Website/Project');
		}).sort((a, b) => {
			return a.data.title.localeCompare(b.data.title)
		});
	});

		eleventyConfig.addCollection('blogposts-en', function (collectionApi) {
		return collectionApi.getAll().filter(item => {
			return item.data.tags && item.data.language === 'en' && item.data.tags.includes('Website/Blog');
		}).sort((a, b) => {
			return (new Date(a.data["modified-on"]).getTime - new Date(b.data["modified-on"]).getTime)
		});
	});

	eleventyConfig.addCollection('blogposts-fr', function (collectionApi) {
		return collectionApi.getAll().filter(item => {
			return item.data.tags && item.data.language === 'fr' && item.data.tags.includes('Website/Blog');
		}).sort((a, b) => {
			return (new Date(a.data["modified-on"]).getTime - new Date(b.data["modified-on"]).getTime)
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

	
	eleventyConfig.addFilter("formatDate", (date, format) => {
		return new Date(date).toLocaleDateString(format, {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
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
