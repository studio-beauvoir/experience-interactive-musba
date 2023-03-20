/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            aspectRatio: {
                'phone': '9 / 16',
                'painting': '4 / 5'
            },
            inset: {
                '1/10': '10%',
                '2/10': '20%',
                '3/10': '30%',
                '4/10': '40%',
                '5/10': '50%',
                '6/10': '60%',
                '7/10': '70%',
                '8/10': '80%',
                '9/10': '90%',
            }
        },
        fontFamily: {
            'sans': ['SfPro', ...defaultTheme.fontFamily.sans],
            'display': ['Saol', ...defaultTheme.fontFamily.sans]
        },
        colors: {
            transparent: 'transparent',
            'semi-transparent': 'rgb(0 0 0 / 59%)',
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
