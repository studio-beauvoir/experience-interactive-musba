import {sveltekit} from '@sveltejs/kit/vite';
import type {UserConfig} from 'vite';
import path from "path";

const config: UserConfig = {
    plugins: [sveltekit()],
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    },
    resolve: {
        alias: {
            '$lib': path.resolve('./src/lib/'),
            '$db': path.resolve('./src/db/'),
        }
    }
};

export default config;
