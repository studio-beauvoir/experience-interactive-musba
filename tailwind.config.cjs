/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            aspectRatio: {
                'phone': '9 / 16'
            }
        },
        fontFamily: {
            'sans': ['SfPro', ...defaultTheme.fontFamily.sans],
            'display': ['Saol', ...defaultTheme.fontFamily.sans]
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: '#262626',
            yellow: '#FFD976',
            brown: '#776A52',
            grey: '#DADADA',
            white: '#FFFFFF',
        },
    },
    plugins: []
};
