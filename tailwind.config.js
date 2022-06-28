module.exports = {
    content: [],
    theme: {
        extend: {
            colors: {
                main: '#30384B',
                'main-light': '#3C4356',
                'soft-red': '#FC4E4C',
                'soft-green': '#05EB8D',
            },
            borderRadius: {
                50: '50%',
            },
            width: {
                1000: '1000px',
                14: '3.75rem',
            },
        },
    },
    plugins: [],
    purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
};
