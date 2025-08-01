export default {
    url: process.env.URL || 'http://localhost:8080',
    title: 'Loïc Boiteux',

    en: {
        locale: 'en',
        siteName: 'd34dblog',
        siteDescription: "Personal site of Loïc Boiteux, web developer.",
        buildDate: {
            raw: new Date().toLocaleDateString('en-CA', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            }),
            label: new Date().toLocaleDateString('en-CA', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
        }
    },
    fr: {
        locale: 'fr',
        siteName: 'd34dblog',
        siteDescription: "Site personnel de Loïc Boiteux, développeur web.",
        buildDate: {
            raw: new Date().toLocaleDateString('fr-CA', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            }),
            label: new Date().toLocaleDateString('fr-CA', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
        }
    }
};