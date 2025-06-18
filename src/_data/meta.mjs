export default {
    url: process.env.URL || 'http://localhost:8080',

    en: {
        locale: 'en',
        siteName: 'd34dblog',
        siteDescription: "Personal site of Loïc Boiteux, web developer.",
        buildDate: new Date().toLocaleDateString('en-CA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    },
    fr: {
        locale: 'fr',
        siteName: 'd34dblog',
        siteDescription: "Site personnel de Loïc Boiteux, développeur web.",
        buildDate: new Date().toLocaleDateString('fr-CA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }
};