import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig(({mode}) => {
    // gets env
    const env = loadEnv(mode, process.cwd())

    // returns config
    return {
        plugins: [
            laravel({
                input: ['resources/css/app.css', 'resources/js/app.jsx'],
                refresh: true,
            }),
        ],
        base: mode == "production" ? env.VITE_BASE + "/build" : null,
    }
});
