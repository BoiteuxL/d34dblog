export default {
  locale: {
    code: "en",
    name: "English"
  },
  permalink: function (data) {
    // Slug override for localized URL slugs
    if (data.slugOverride) {
      return `/en/${this.slugify(data.slugOverride)}/`;
    }
  }
};