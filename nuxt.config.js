module.exports = {
    telemetry: false,
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: "nuxt-posts",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            { hid: "description", name: "description", content: "" }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
        script: [{ src: "https://cdn.jsdelivr.net/npm/marked/marked.min.js" }]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ["@/assets/scss/main.scss"],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [{ src: "~plugins/filter.js" }],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        "@nuxtjs/bulma",
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios"
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    serverMiddleware: ["~server/routes/index"],

    build: {
        postcss: {
            preset: {
                features: {
                    customProperties: false
                }
            }
        }
    }
};
