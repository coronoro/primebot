module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primebot: {
                    gray: '#36393f'
                }
            },
            listStyleType: {
                square: 'square',
                roman: 'upper-roman',
            },
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
