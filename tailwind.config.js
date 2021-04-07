const calc = require('postcss-calc');

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        minHeight: {
            minimum: 'calc(100vh - 108px - 64px)',
        },
        height: {
            home: 'calc(100vh - 108px)',
        },
        maxWidth: {
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
