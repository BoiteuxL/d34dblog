export default {
  locale: {
    code: "fr",
    name: "Français"
  },
  permalink: function (data) {
    // Slug override for localized URL slugs
    if (data.slugOverride) {
      return `/fr/${this.slugify(data.slugOverride)}/`;
    }
  }
};