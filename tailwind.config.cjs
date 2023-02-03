/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            aspectRatio: {
                'phone': '9 / 16'
            }
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: '#262626',
            yellow: '#FFD976',
            brown: '#776A52',
            grey: '#DADADA',
            white: '#FFFFFF',
        }
    },
    plugins: []
};
