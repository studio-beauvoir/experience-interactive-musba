/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            aspectRatio: {
                'phone': '9 / 16'
            }
        }
    },
    plugins: []
};
