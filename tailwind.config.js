/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            bgMain: '#181818',
            main1default: '#EE10B0',
            main1hover: '#D60E9E',
            main1active: '#BE0D8D',
            main2default: '#0E9EEF',
            main2hover: '#0D8ED7',
            main2active: '#0B7EBF',
        },
        extend: {
            fontFamily: {
                vazirmatn: ['Vazirmatn', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
