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


	eleventyConfig.addCollection('projects_en', function (collectionApi) {
		return collectionApi.getFilteredByGlob("./src/content/en/projects/*.project.md").sort((a, b) => {
			return a.data.title.localeCompare(b.data.title)
		});
	});

	eleventyConfig.addCollection('projects_fr', function (collectionApi) {
		return collectionApi.getFilteredByGlob("./src/content/fr/projects/*.project.md").sort((a, b) => {
			return a.data.title.localeCompare(b.data.title)
		});
	});

		eleventyConfig.addCollection('blogposts_en', function (collectionApi) {
		return collectionApi.getFilteredByGlob("./src/content/en/blog/*.blog.md").sort((a, b) => {
			return (new Date(a.data["modified-on"]).getTime - new Date(b.data["modified-on"]).getTime)
		});
	});

	eleventyConfig.addCollection('blogposts_fr', function (collectionApi) {
		return collectionApi.getFilteredByGlob("./src/content/fr/blog/*.blog.md").sort((a, b) => {
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
