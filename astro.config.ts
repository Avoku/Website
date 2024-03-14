import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
    site: 'https://avoku.github.io',
    integrations: [sitemap()],
    redirects: {
        '/github': 'https://github.com/Avoku',
        '/discord': 'https://discord.gg/jpsXV4baWA',
        '/rbot': 'https://polymart.org/resource/discord-ranked-bot.3636',
    }
})
